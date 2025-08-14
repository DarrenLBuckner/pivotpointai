// components/BlogSidebar.tsx
import Link from "next/link";

export function BlogSidebar() {
  return (
    <aside className="space-y-4">
      {/* AI Toolbox Promotion Widget */}
      <div className="rounded-2xl border p-4 bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
        <h3 className="text-base font-semibold mb-2 text-[#1a237e]">Explore Our AI Toolbox</h3>
        <p className="text-sm mb-3 text-gray-700">
          Our curated list of AI tools we actually use and recommend. Some links may be affiliate links.
        </p>
        <Link
          href="/ai-toolbox"
          className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-[#0891b2] text-white hover:opacity-90 transition"
        >
          Visit AI Toolbox
        </Link>
      </div>

      {/* Newsletter Signup Widget */}
      <div className="rounded-2xl border p-4 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
        <h3 className="text-base font-semibold mb-2 text-[#1a237e]">Stay Updated</h3>
        <p className="text-sm mb-3 text-gray-700">
          Get the latest AI insights and tool recommendations delivered to your inbox.
        </p>
        <Link
          href="/get-started"
          className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-[#1a237e] text-white hover:opacity-90 transition"
        >
          Get Started
        </Link>
      </div>

      {/* Services Promotion Widget */}
      <div className="rounded-2xl border p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <h3 className="text-base font-semibold mb-2 text-[#1a237e]">Need AI Implementation Help?</h3>
        <p className="text-sm mb-3 text-gray-700">
          Let us help you choose and implement the right AI tools for your business.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-green-600 text-white hover:opacity-90 transition"
        >
          View Services
        </Link>
      </div>
    </aside>
  );
}
