import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export type ToolboxItem = {
  name: string;
  url: string;
  affiliate_url?: string;
  category?: string;
  blurb?: string;
  logo?: string; // override
};

export function loadToolbox(): ToolboxItem[] {
  const p = path.join(process.cwd(), "data", "ai-toolbox.yml");
  const raw = fs.readFileSync(p, "utf8");
  const data = yaml.load(raw) as ToolboxItem[];
  return Array.isArray(data) ? data : [];
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
  return Array.from(map.entries()).sort(([a],[b]) => a.localeCompare(b));
}
