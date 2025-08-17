-- Create AI Toolbox table for production storage
CREATE TABLE IF NOT EXISTS ai_toolbox (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  url TEXT NOT NULL,
  affiliate_url TEXT,
  category VARCHAR(100) NOT NULL,
  blurb TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_ai_toolbox_category ON ai_toolbox(category);
CREATE INDEX IF NOT EXISTS idx_ai_toolbox_created_at ON ai_toolbox(created_at);

-- Insert strategic business tools organized by category
INSERT INTO ai_toolbox (name, url, affiliate_url, category, blurb) VALUES

-- AI Powerhouses (Core AI tools)
('ChatGPT', 'https://chat.openai.com/', 'https://your-affiliate-link.example/chatgpt', 'AI Powerhouses', 'The AI assistant that started it all. Perfect for writing, customer service, and business planning.'),
('Claude', 'https://claude.ai/', 'https://your-affiliate-link.example/claude', 'AI Powerhouses', 'Advanced reasoning AI. Excellent for complex analysis, strategy, and technical writing.'),
('Perplexity', 'https://perplexity.ai/', 'https://your-affiliate-link.example/perplexity', 'AI Powerhouses', 'AI-powered search engine that provides accurate, sourced answers for research.'),

-- Daily Essentials (Everyday business tools)
('Notion', 'https://www.notion.so/', 'https://your-affiliate-link.example/notion', 'Daily Essentials', 'All-in-one workspace for notes, docs, databases, and project management.'),
('Google Workspace', 'https://workspace.google.com/', 'https://your-affiliate-link.example/google-workspace', 'Daily Essentials', 'Email, docs, sheets, and drive - essential for any business.'),
('Calendly', 'https://calendly.com/', 'https://your-affiliate-link.example/calendly', 'Daily Essentials', 'Automated scheduling that eliminates back-and-forth emails.'),

-- Finance & Accounting (Bookkeeping and financial tools)
('QuickBooks', 'https://quickbooks.intuit.com/', 'https://your-affiliate-link.example/quickbooks', 'Finance & Accounting', 'Industry-standard accounting software for small to medium businesses.'),
('FreshBooks', 'https://www.freshbooks.com/', 'https://your-affiliate-link.example/freshbooks', 'Finance & Accounting', 'Simple invoicing and expense tracking for service-based businesses.'),
('Wave', 'https://www.waveapps.com/', 'https://your-affiliate-link.example/wave', 'Finance & Accounting', 'Free accounting software perfect for small businesses and freelancers.'),
('Stripe', 'https://stripe.com/', 'https://your-affiliate-link.example/stripe', 'Finance & Accounting', 'Accept online payments easily with powerful developer tools.'),

-- Marketing & Sales (Customer acquisition and growth)
('Mailchimp', 'https://mailchimp.com/', 'https://your-affiliate-link.example/mailchimp', 'Marketing & Sales', 'Email marketing platform with automation and analytics.'),
('HubSpot', 'https://www.hubspot.com/', 'https://your-affiliate-link.example/hubspot', 'Marketing & Sales', 'Complete CRM and marketing automation platform.'),
('Buffer', 'https://buffer.com/', 'https://your-affiliate-link.example/buffer', 'Marketing & Sales', 'Schedule and manage social media posts across all platforms.'),
('ConvertKit', 'https://convertkit.com/', 'https://your-affiliate-link.example/convertkit', 'Marketing & Sales', 'Email marketing built for creators and course sellers.'),

-- Automation Heroes (Workflow automation)
('Zapier', 'https://zapier.com/', 'https://your-affiliate-link.example/zapier', 'Automation Heroes', 'Connect 6000+ apps and automate repetitive workflows without coding.'),
('Make', 'https://www.make.com/', 'https://your-affiliate-link.example/make', 'Automation Heroes', 'Visual automation platform for complex multi-step workflows.'),
('IFTTT', 'https://ifttt.com/', 'https://your-affiliate-link.example/ifttt', 'Automation Heroes', 'Simple automation for everyday apps and devices.'),

-- Creative Studio (Design and content)
('Canva', 'https://www.canva.com/', 'https://your-affiliate-link.example/canva', 'Creative Studio', 'Design anything - social posts, presentations, logos, and more.'),
('Figma', 'https://www.figma.com/', 'https://your-affiliate-link.example/figma', 'Creative Studio', 'Professional design tool for websites, apps, and user interfaces.'),
('Loom', 'https://www.loom.com/', 'https://your-affiliate-link.example/loom', 'Creative Studio', 'Record quick video messages and tutorials to communicate better.'),

-- Analytics & Insights (Data and reporting)
('Google Analytics', 'https://analytics.google.com/', 'https://your-affiliate-link.example/google-analytics', 'Analytics & Insights', 'Understand your website traffic and customer behavior.'),
('Hotjar', 'https://www.hotjar.com/', 'https://your-affiliate-link.example/hotjar', 'Analytics & Insights', 'See how users interact with your website through heatmaps and recordings.'),

-- Team Collaboration (Communication and project management)
('Slack', 'https://slack.com/', 'https://your-affiliate-link.example/slack', 'Team Collaboration', 'Team communication platform that organizes conversations by channels.'),
('Trello', 'https://trello.com/', 'https://your-affiliate-link.example/trello', 'Team Collaboration', 'Visual project management using boards, lists, and cards.'),
('Asana', 'https://asana.com/', 'https://your-affiliate-link.example/asana', 'Team Collaboration', 'Project management tool for teams to track work and hit deadlines.')

ON CONFLICT (name) DO NOTHING;

-- Set up Row Level Security (optional but recommended)
ALTER TABLE ai_toolbox ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access (for the website)
CREATE POLICY "Allow public read access" ON ai_toolbox
FOR SELECT USING (true);

-- Create policy to allow admin access (you'll need authentication for this)
-- For now, we'll skip this since you're using hardcoded admin credentials
