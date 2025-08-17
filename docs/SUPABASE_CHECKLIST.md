# Supabase Setup Checklist

## ✅ What's Already Done:

1. **Dependencies Installed**:
   - `@supabase/supabase-js` package is installed
   - Environment variables are configured in `.env.local`

2. **Environment Variables Set**:
   - `NEXT_PUBLIC_SUPABASE_URL`: https://ipfopznucvborxfzhegd.supabase.co
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

3. **API Route Created**:
   - `/api/submit-blog/route.ts` handles blog submissions
   - Proper error handling included

4. **Form Integration**:
   - Blog submission form at `/blog/submit`
   - All form fields properly mapped to API

## 🔍 What You Need to Verify:

### 1. Supabase Database Schema
Your `blog_submissions` table should have these columns:
- `id` (Primary Key, UUID, auto-generated)
- `name` (Text)
- `email` (Text)
- `bio` (Text) - *Added to match form*
- `country` (Text)
- `blogType` (Text - "original" or "ai")
- `title` (Text)
- `content` (Text)
- `created_at` (Timestamp, auto-generated)

### 2. Supabase RLS (Row Level Security) Policies
Make sure your table has proper policies:
- **INSERT policy**: Allow anonymous users to insert (for blog submissions)
- **SELECT policy**: Restrict access as needed (admin only?)

### 3. Test the Connection
To test if Supabase is working:

1. **Manual Test**: Visit `http://localhost:3001/blog/submit` and submit a test blog post
2. **Check Supabase Dashboard**: Login to https://supabase.com and verify the submission appears in your table
3. **Console Check**: Open browser dev tools to see any connection errors

### 4. Common Issues to Check:

- **CORS**: Make sure your domain is allowed in Supabase settings
- **API Keys**: Verify the anon key has proper permissions
- **Network**: Ensure firewall/antivirus isn't blocking connections
- **Schema**: Confirm table name and column names match exactly

## 🛠️ Quick Fixes:

### If submissions fail:
1. Check browser console for JavaScript errors
2. Verify API route at `/api/submit-blog` returns proper responses
3. Check Supabase logs in dashboard for server-side errors

### If connection fails:
1. Verify environment variables are loaded correctly
2. Test from a simple API route to isolate the issue
3. Check Supabase project status/health

## 📝 SQL Schema (if you need to create the table):

```sql
CREATE TABLE blog_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  bio TEXT,
  country TEXT NOT NULL,
  blogType TEXT NOT NULL CHECK (blogType IN ('original', 'ai')),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE blog_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON blog_submissions
  FOR INSERT TO anon
  WITH CHECK (true);
```

## 🚀 Ready to Test!

The Supabase integration should now work properly. Test by:
1. Starting the dev server: `npm run dev`
2. Visiting: http://localhost:3001/blog/submit
3. Submitting a test blog post
4. Checking your Supabase dashboard for the new entry
