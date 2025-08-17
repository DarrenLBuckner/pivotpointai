import { NextResponse } from 'next/server';
import { loadToolboxFromDatabase } from '@/lib/toolbox';

export async function GET() {
  try {
    const tools = await loadToolboxFromDatabase();
    return NextResponse.json({ success: true, data: tools });
  } catch (error) {
    console.error('Error loading toolbox:', error);
    return NextResponse.json({ error: 'Failed to load toolbox data' }, { status: 500 });
  }
}
