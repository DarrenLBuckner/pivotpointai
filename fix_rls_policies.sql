-- Fix Row Level Security for AI Toolbox admin access
-- This script adds proper policies for admin operations

-- Drop existing policies to start fresh
DROP POLICY IF EXISTS "Allow public read access" ON ai_toolbox;
DROP POLICY IF EXISTS "Allow admin insert access" ON ai_toolbox;
DROP POLICY IF EXISTS "Allow admin update access" ON ai_toolbox;
DROP POLICY IF EXISTS "Allow admin delete access" ON ai_toolbox;

-- Create policy to allow public read access (for the website)
CREATE POLICY "Allow public read access" ON ai_toolbox
FOR SELECT USING (true);

-- Create policy to allow insert access (for admin adding tools)
-- Since we're not using auth yet, we'll allow all inserts for now
CREATE POLICY "Allow admin insert access" ON ai_toolbox
FOR INSERT WITH CHECK (true);

-- Create policy to allow update access (for admin editing tools)
CREATE POLICY "Allow admin update access" ON ai_toolbox
FOR UPDATE USING (true);

-- Create policy to allow delete access (for admin removing tools)
CREATE POLICY "Allow admin delete access" ON ai_toolbox
FOR DELETE USING (true);

-- Verify the policies are created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'ai_toolbox'
ORDER BY policyname;
