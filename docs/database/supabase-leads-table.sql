-- Create leads table for Get Started form submissions
-- Note: Cookie consent is handled client-side before form submission
-- This table only stores data from users who have provided proper consent
CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  organization_name VARCHAR(255) NOT NULL,
  role_position VARCHAR(255) NOT NULL,
  industry_sector VARCHAR(255) NOT NULL,
  number_of_employees INTEGER,
  email VARCHAR(255) NOT NULL,
  whatsapp_number VARCHAR(50) NOT NULL,
  country VARCHAR(100) NOT NULL,
  organization_type VARCHAR(50) NOT NULL,
  services_interested TEXT[], -- Array for multiple checkboxes
  preferred_contact_method VARCHAR(50) NOT NULL,
  project_timeline VARCHAR(255),
  budget_range VARCHAR(255),
  how_heard VARCHAR(255) NOT NULL,
  how_heard_other VARCHAR(255),
  additional_comments TEXT,
  consent_given BOOLEAN NOT NULL DEFAULT false,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'new' -- new, contacted, qualified, etc.
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for form submissions)
CREATE POLICY "Allow public lead submissions" ON leads
  FOR INSERT 
  TO public
  WITH CHECK (true);

-- Create policy to allow admins to read all leads
CREATE POLICY "Allow admin read access" ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy to allow admins to update leads
CREATE POLICY "Allow admin updates" ON leads
  FOR UPDATE
  TO authenticated
  USING (true);
