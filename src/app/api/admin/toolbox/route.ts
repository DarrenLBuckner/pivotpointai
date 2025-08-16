import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { ToolboxItem } from '@/lib/toolbox';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const TOOLBOX_FILE = path.join(process.cwd(), 'data', 'ai-toolbox.yml');

// Fallback to file system for local development
const isProduction = process.env.NODE_ENV === 'production';

export async function GET() {
  try {
    if (isProduction) {
      // In production, try to read from Supabase first, fallback to file
      try {
        const { data: tools, error } = await supabase
          .from('ai_toolbox')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (!error && tools) {
          return NextResponse.json({ success: true, tools });
        }
      } catch (supabaseError) {
        console.log('Supabase not available, using file fallback');
      }
    }
    
    // Fallback to file system
    if (fs.existsSync(TOOLBOX_FILE)) {
      const fileContent = fs.readFileSync(TOOLBOX_FILE, 'utf8');
      const tools: ToolboxItem[] = yaml.load(fileContent) as ToolboxItem[] || [];
      return NextResponse.json({ success: true, tools });
    }
    
    return NextResponse.json({ success: true, tools: [] });
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
    
    if (isProduction) {
      // Try Supabase first in production
      try {
        // First check if tool already exists
        const { data: existing } = await supabase
          .from('ai_toolbox')
          .select('name')
          .eq('name', newTool.name)
          .single();
        
        if (existing) {
          return NextResponse.json({ error: 'Tool with this name already exists' }, { status: 400 });
        }

        const { data, error } = await supabase
          .from('ai_toolbox')
          .insert([{
            name: newTool.name,
            url: newTool.url,
            affiliate_url: newTool.affiliate_url || null,
            category: newTool.category,
            blurb: newTool.blurb
          }])
          .select();
        
        if (error) {
          console.error('Supabase insert error:', error);
          return NextResponse.json({ 
            error: 'Database error: ' + error.message,
            details: error 
          }, { status: 500 });
        }
        
        return NextResponse.json({ 
          success: true, 
          message: 'Tool added to database successfully',
          tool: data[0]
        });
      } catch (supabaseError) {
        console.error('Supabase connection error:', supabaseError);
        return NextResponse.json({ 
          error: 'Database connection failed',
          details: supabaseError instanceof Error ? supabaseError.message : 'Unknown database error'
        }, { status: 500 });
      }
    }
    
    // Fallback to file system (development mode or Supabase failure)
    try {
      // Create data directory if it doesn't exist
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      
      let tools: ToolboxItem[] = [];
      
      if (fs.existsSync(TOOLBOX_FILE)) {
        const fileContent = fs.readFileSync(TOOLBOX_FILE, 'utf8');
        tools = yaml.load(fileContent) as ToolboxItem[] || [];
      }
      
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
      
      return NextResponse.json({ success: true, message: 'Tool added to file successfully' });
    } catch (fileError) {
      console.error('File system error:', fileError);
      return NextResponse.json({ 
        error: 'Failed to add tool - file system not writable in production',
        details: 'Please set up database storage for production use'
      }, { status: 500 });
    }
    
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
    
    if (isProduction) {
      // Try Supabase first in production
      try {
        const { error } = await supabase
          .from('ai_toolbox')
          .delete()
          .eq('name', name);
        
        if (error) {
          throw error;
        }
        
        return NextResponse.json({ success: true, message: 'Tool removed from database successfully' });
      } catch (supabaseError) {
        console.log('Supabase not available, using file fallback');
      }
    }
    
    // Fallback to file system
    try {
      if (!fs.existsSync(TOOLBOX_FILE)) {
        return NextResponse.json({ error: 'No tools found' }, { status: 404 });
      }
      
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
      
      return NextResponse.json({ success: true, message: 'Tool removed from file successfully' });
    } catch (fileError) {
      console.error('File system error:', fileError);
      return NextResponse.json({ 
        error: 'Failed to remove tool - file system not writable in production',
        details: 'Please set up database storage for production use'
      }, { status: 500 });
    }
    
  } catch (error) {
    console.error('Error removing tool:', error);
    return NextResponse.json({ 
      error: 'Failed to remove tool',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
