import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { createClient } from '@supabase/supabase-js';

export type ToolboxItem = {
  name: string;
  url: string;
  affiliate_url?: string;
  category?: string;
  blurb?: string;
  logo?: string; // override
};

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: any = null;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export async function loadToolboxFromDatabase(): Promise<ToolboxItem[]> {
  console.log("🔍 Loading toolbox from database...");
  console.log("Supabase URL:", supabaseUrl ? "✅ Set" : "❌ Missing");
  console.log("Supabase Key:", supabaseKey ? "✅ Set" : "❌ Missing");
  
  if (!supabase) {
    console.log("❌ Supabase not configured, falling back to YAML");
    return loadToolboxFromYAML();
  }

  try {
    console.log("🚀 Attempting database connection...");
    const { data, error } = await supabase
      .from('ai_toolbox')
      .select('*')
      .order('category', { ascending: true })
      .order('name', { ascending: true });

    if (error) {
      console.error("❌ Database error:", error);
      return loadToolboxFromYAML();
    }

    if (!data || data.length === 0) {
      console.log("⚠️ No data in database, falling back to YAML");
      return loadToolboxFromYAML();
    }

    console.log(`✅ Loaded ${data.length} tools from database`);
    return data.map((item: any) => ({
      name: item.name,
      url: item.url,
      affiliate_url: item.affiliate_url,
      category: item.category,
      blurb: item.blurb,
      logo: item.logo || ""
    }));
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    return loadToolboxFromYAML();
  }
}

// Fallback function for YAML loading
export function loadToolboxFromYAML(): ToolboxItem[] {
  try {
    const p = path.join(process.cwd(), "data", "ai-toolbox.yml");
    const raw = fs.readFileSync(p, "utf8");
    const data = yaml.load(raw) as ToolboxItem[];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error loading YAML file:", error);
    return [];
  }
}

// Keep the old function for backward compatibility, but make it async
export function loadToolbox(): ToolboxItem[] {
  // This is a synchronous function, so we'll use YAML for now
  // The page component will call loadToolboxFromDatabase directly
  return loadToolboxFromYAML();
}

// Basic favicon helper (free + reliable)
export function inferredIconFor(urlStr: string) {
  try {
    const u = new URL(urlStr);
    return `https://www.google.com/s2/favicons?domain=${u.hostname}&sz=64`;
  } catch {
    return "";
  }
}

export function byCategory(items: ToolboxItem[]) {
  const map = new Map<string, ToolboxItem[]>();
  for (const item of items) {
    const key = item.category || "Other";
    map.set(key, [...(map.get(key) || []), item]);
  }
  
  // Custom sort order for better UX
  const categoryOrder = [
    'AI Powerhouses',
    'Daily Essentials', 
    'Finance & Accounting',
    'Marketing & Sales',
    'Automation Heroes',
    'Creative Studio',
    'Analytics & Insights',
    'Team Collaboration',
    'Other'
  ];
  
  return Array.from(map.entries()).sort(([a], [b]) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    
    if (indexA === -1 && indexB === -1) return a.localeCompare(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    
    return indexA - indexB;
  });
}
