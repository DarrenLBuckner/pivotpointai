import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Use service role key for admin operations (you'll need to add this to .env.local)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

console.log('Using key type:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'SERVICE_ROLE' : 'ANON');

export async function GET() {
  try {
    console.log('Admin API: Fetching submissions...');
    
    const { data, error } = await supabase
      .from('blog_submissions')
      .select('*')
      .order('submitted_at', { ascending: false });

    console.log('Supabase response:', { data, error });

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }
    
    console.log('Found submissions:', data?.length || 0);
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, status } = await request.json();
    
    if (!id || !status) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const { error } = await supabase
      .from('blog_submissions')
      .update({ status })
      .eq('id', id);

    if (error) throw error;
    
    return NextResponse.json({ success: true, message: 'Status updated successfully' });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Failed to update status' }, { status: 500 });
  }
}
