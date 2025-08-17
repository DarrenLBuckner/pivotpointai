import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Test environment variables
    const envCheck = {
      hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasSupabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      nodeEnv: process.env.NODE_ENV
    };

    // Test Supabase connection
    let supabaseCheck = { connected: false, error: null as string | null };
    try {
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );
      
      const { error } = await supabase.from('leads').select('count').limit(1);
      supabaseCheck = { connected: !error, error: error?.message || null };
    } catch (err) {
      supabaseCheck = { connected: false, error: (err as Error).message };
    }

    // Common issues check
    const issues: string[] = [];
    if (!envCheck.hasSupabaseUrl) issues.push('Missing SUPABASE_URL');
    if (!envCheck.hasSupabaseKey) issues.push('Missing SUPABASE_ANON_KEY');
    if (!supabaseCheck.connected) issues.push(`Database connection failed: ${supabaseCheck.error}`);

    const result = {
      timestamp: new Date().toISOString(),
      healthy: issues.length === 0,
      environment: envCheck,
      database: supabaseCheck,
      issues
    };

    return NextResponse.json(result, { 
      status: result.healthy ? 200 : 500,
      headers: { 'Cache-Control': 'no-cache' }
    });
  } catch (error) {
    return NextResponse.json({ 
      error: 'Debug endpoint failed',
      message: (error as Error).message,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
