"use client";
import { useState } from 'react';

export default function TestSupabase() {
  const [result, setResult] = useState('');
  
  const testConnection = async () => {
    try {
      setResult('Testing connection...');
      
      const response = await fetch('/api/submit-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          bio: 'Test bio',
          country: 'United States',
          blogType: 'original',
          title: 'Test Blog Post',
          content: 'This is a test blog post content.'
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setResult(`SUCCESS: ${JSON.stringify(data, null, 2)}`);
      } else {
        setResult(`ERROR (${response.status}): ${JSON.stringify(data, null, 2)}`);
      }
    } catch (error) {
      setResult(`NETWORK ERROR: ${error}`);
    }
  };
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
      <button 
        onClick={testConnection}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Test API
      </button>
      <pre className="bg-gray-100 p-4 rounded overflow-auto">
        {result}
      </pre>
    </div>
  );
}
