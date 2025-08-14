import { NextResponse } from 'next/server';
import crypto from 'crypto';

// In a real app, these would be in a database with hashed passwords
const ADMIN_CREDENTIALS = {
  username: 'Dbuck4Life',
  password: 'Malcolm2009' // Simplified for testing - no special characters
};

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password required' }, { status: 400 });
    }

    // Debug logging - REMOVE LATER
    console.log('=== LOGIN DEBUG ===');
    console.log('Received username:', JSON.stringify(username));
    console.log('Expected username:', JSON.stringify(ADMIN_CREDENTIALS.username));
    console.log('Username match:', username === ADMIN_CREDENTIALS.username);
    console.log('Received password:', JSON.stringify(password));
    console.log('Expected password:', JSON.stringify(ADMIN_CREDENTIALS.password));
    console.log('Password match:', password === ADMIN_CREDENTIALS.password);
    console.log('==================');

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
