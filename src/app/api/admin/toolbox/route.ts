import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { ToolboxItem } from '@/lib/toolbox';

const TOOLBOX_FILE = path.join(process.cwd(), 'data', 'ai-toolbox.yml');

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Ensure toolbox file exists
function ensureToolboxFile() {
  ensureDataDirectory();
  if (!fs.existsSync(TOOLBOX_FILE)) {
    const defaultTools: ToolboxItem[] = [
      {
        name: "ChatGPT",
        url: "https://chat.openai.com/",
        affiliate_url: "https://your-affiliate-link.example/chatgpt",
        category: "AI Tools",
        blurb: "General-purpose assistant for writing, analysis, and ideation."
      }
    ];
    const yamlContent = yaml.dump(defaultTools);
    fs.writeFileSync(TOOLBOX_FILE, yamlContent, 'utf8');
  }
}

export async function GET() {
  try {
    ensureToolboxFile();
    
    // Load existing tools
    const fileContent = fs.readFileSync(TOOLBOX_FILE, 'utf8');
    const tools: ToolboxItem[] = yaml.load(fileContent) as ToolboxItem[] || [];
    
    return NextResponse.json({ success: true, tools });
  } catch (error) {
    console.error('Error reading tools:', error);
    return NextResponse.json({ 
      error: 'Failed to read tools',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newTool: ToolboxItem = await request.json();
    
    // Validate required fields
    if (!newTool.name || !newTool.url || !newTool.category || !newTool.blurb) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    ensureToolboxFile();
    
    // Load existing tools
    const fileContent = fs.readFileSync(TOOLBOX_FILE, 'utf8');
    const tools: ToolboxItem[] = yaml.load(fileContent) as ToolboxItem[] || [];
    
    // Check for duplicate names
    if (tools.some(tool => tool.name === newTool.name)) {
      return NextResponse.json({ error: 'Tool with this name already exists' }, { status: 400 });
    }
    
    // Add new tool
    tools.push(newTool);
    
    // Write back to file
    const yamlContent = yaml.dump(tools, { 
      flowLevel: -1,
      styles: {
        '!!null': 'canonical'
      }
    });
    fs.writeFileSync(TOOLBOX_FILE, yamlContent, 'utf8');
    
    return NextResponse.json({ success: true, message: 'Tool added successfully' });
  } catch (error) {
    console.error('Error adding tool:', error);
    return NextResponse.json({ 
      error: 'Failed to add tool', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { name } = await request.json();
    
    if (!name) {
      return NextResponse.json({ error: 'Tool name is required' }, { status: 400 });
    }
    
    ensureToolboxFile();
    
    // Load existing tools
    const fileContent = fs.readFileSync(TOOLBOX_FILE, 'utf8');
    const tools: ToolboxItem[] = yaml.load(fileContent) as ToolboxItem[] || [];
    
    // Remove tool by name
    const filteredTools = tools.filter(tool => tool.name !== name);
    
    if (filteredTools.length === tools.length) {
      return NextResponse.json({ error: 'Tool not found' }, { status: 404 });
    }
    
    // Write back to file
    const yamlContent = yaml.dump(filteredTools, { 
      flowLevel: -1,
      styles: {
        '!!null': 'canonical'
      }
    });
    fs.writeFileSync(TOOLBOX_FILE, yamlContent, 'utf8');
    
    return NextResponse.json({ success: true, message: 'Tool removed successfully' });
  } catch (error) {
    console.error('Error removing tool:', error);
    return NextResponse.json({ 
      error: 'Failed to remove tool',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
