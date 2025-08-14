import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { ToolboxItem } from '@/lib/toolbox';

const TOOLBOX_FILE = path.join(process.cwd(), 'data', 'ai-toolbox.yml');

export async function POST(request: Request) {
  try {
    const newTool: ToolboxItem = await request.json();
    
    // Load existing tools
    const fileContent = fs.readFileSync(TOOLBOX_FILE, 'utf8');
    const tools: ToolboxItem[] = yaml.load(fileContent) as ToolboxItem[] || [];
    
    // Add new tool
    tools.push(newTool);
    
    // Write back to file
    const yamlContent = yaml.dump(tools, { 
      flowLevel: -1,
      styles: {
        '!!null': 'canonical' // represents null as ~ or null
      }
    });
    fs.writeFileSync(TOOLBOX_FILE, yamlContent, 'utf8');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error adding tool:', error);
    return NextResponse.json({ error: 'Failed to add tool' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { name } = await request.json();
    
    // Load existing tools
    const fileContent = fs.readFileSync(TOOLBOX_FILE, 'utf8');
    const tools: ToolboxItem[] = yaml.load(fileContent) as ToolboxItem[] || [];
    
    // Remove tool by name
    const filteredTools = tools.filter(tool => tool.name !== name);
    
    // Write back to file
    const yamlContent = yaml.dump(filteredTools, { 
      flowLevel: -1,
      styles: {
        '!!null': 'canonical'
      }
    });
    fs.writeFileSync(TOOLBOX_FILE, yamlContent, 'utf8');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error removing tool:', error);
    return NextResponse.json({ error: 'Failed to remove tool' }, { status: 500 });
  }
}
