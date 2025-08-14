import { NextResponse } from 'next/server';
import crypto from 'crypto';

// In a real app, these would be in a database with hashed passwords
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'pivotpoint2025' // In production, this should be hashed
};

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password required' }, { status: 400 });
    }

    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      // Generate a simple token (in production, use proper JWT)
      const token = crypto.randomBytes(32).toString('hex');
      
      return NextResponse.json({ 
        success: true, 
        token,
        message: 'Login successful' 
      });
    } else {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
