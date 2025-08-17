// Test Supabase connection
const testData = {
  name: "Test User",
  email: "test@example.com", 
  bio: "This is a test bio",
  country: "United States",
  blogType: "original",
  title: "Test Blog Post",
  content: "This is test content for the blog post."
};

fetch('/api/submit-blog', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData)
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  console.error('Error:', error);
});

// Copy and paste this into your browser console at http://localhost:3001/blog/submit to test
