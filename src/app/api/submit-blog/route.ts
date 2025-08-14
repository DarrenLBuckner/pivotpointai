import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    console.log('API route called');
    const data = await request.json();
    console.log('Received data:', data);
    
    const { name, email, bio, country, blogType, title, content } = data;

    // Validate required fields
    if (!name || !email || !country || !blogType || !title || !content) {
      console.log('Missing required fields');
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log('Attempting to insert into Supabase...');
    
    // Map blogType to blogtype to match database column name
    const insertData = { 
      name, 
      email, 
      bio, 
      country, 
      blogtype: blogType, // Map camelCase to lowercase to match DB
      title, 
      content 
    };
    
    console.log('Insert data:', insertData);

    const { data: result, error } = await supabase
      .from('blog_submissions')
      .insert([insertData]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    
    console.log('Success! Inserted:', result);
    return NextResponse.json({ success: true, message: 'Blog submitted successfully!' });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Internal server error: ' + (err as Error).message }, { status: 500 });
  }
}
