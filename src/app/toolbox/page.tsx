import React from 'react';
import Link from 'next/link';

export default function AIToolbox() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden bg-[#f5f7fa]">
      <main className="w-full max-w-5xl flex flex-col gap-10 items-center relative z-10 text-[#1a237e]">
        <section className="w-full bg-white/80 rounded-xl shadow-lg p-8 border border-[#d3e3fd] mt-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-lg tracking-tight text-center">AI Toolbox</h1>
          
          <div className="prose prose-lg text-[#1a237e] mx-auto max-w-none">
            <p className="text-lg mb-6 text-center">
              A living list of apps, platforms, and services we use or genuinely recommend for growing a modern business with AI.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <p className="text-yellow-800">
                <strong>Transparency:</strong> Some links on this page are affiliate links. If you click and purchase, we may earn a commission at no extra cost to you. We only recommend tools we believe add real value.
              </p>
            </div>

            <p className="text-sm text-gray-600 mb-8">
              <strong>Last updated:</strong> August 14, 2025
            </p>

            <hr className="my-8" />

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <h2 className="text-xl font-bold text-blue-800 mb-2">How to Use This Page</h2>
              <p className="text-blue-700">
                We grouped tools by what you&apos;re trying to do. Each card includes a quick &ldquo;Why we like it&rdquo; so you can decide fast.
              </p>
            </div>

            <hr className="my-8" />

            {/* Automation & Agents Section */}
            <h2 className="text-2xl font-bold mb-6">🤖 Automation & Agents</h2>
            
            <div className="grid gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Tool Name 1</h3>
                <ul className="space-y-2 mb-4">
                  <li><strong>What it does:</strong> One-line plain-English summary.</li>
                  <li><strong>Why we like it:</strong> Specific result you saw, e.g., &ldquo;Cut our response time by ~40%.&rdquo;</li>
                  <li><strong>Best for:</strong> Small teams, service businesses, etc.</li>
                </ul>
                <a href="#" className="inline-block bg-[#1a237e] text-white px-4 py-2 rounded-lg hover:bg-[#1a237e]/90 transition-colors">
                  Try Tool Name 1
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Tool Name 2</h3>
                <ul className="space-y-2 mb-4">
                  <li><strong>What it does:</strong> One-line plain-English summary.</li>
                  <li><strong>Why we like it:</strong> Specific result you saw.</li>
                  <li><strong>Best for:</strong> Enterprise teams, complex workflows, etc.</li>
                </ul>
                <a href="#" className="inline-block bg-[#1a237e] text-white px-4 py-2 rounded-lg hover:bg-[#1a237e]/90 transition-colors">
                  Try Tool Name 2
                </a>
              </div>
            </div>

            <hr className="my-8" />

            {/* Content & Marketing Section */}
            <h2 className="text-2xl font-bold mb-6">📝 Content & Marketing</h2>
            
            <div className="grid gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Tool Name 3</h3>
                <ul className="space-y-2 mb-4">
                  <li><strong>What it does:</strong> AI-powered content creation and marketing automation.</li>
                  <li><strong>Why we like it:</strong> Helps create consistent, high-quality content at scale.</li>
                  <li><strong>Best for:</strong> Content creators, marketing teams, agencies.</li>
                </ul>
                <a href="#" className="inline-block bg-[#1a237e] text-white px-4 py-2 rounded-lg hover:bg-[#1a237e]/90 transition-colors">
                  Try Tool Name 3
                </a>
              </div>
            </div>

            <hr className="my-8" />

            {/* Data & Analytics Section */}
            <h2 className="text-2xl font-bold mb-6">📊 Data & Analytics</h2>
            
            <div className="grid gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Tool Name 4</h3>
                <ul className="space-y-2 mb-4">
                  <li><strong>What it does:</strong> Advanced data analysis and business intelligence.</li>
                  <li><strong>Why we like it:</strong> Turns complex data into actionable insights quickly.</li>
                  <li><strong>Best for:</strong> Data-driven businesses, analytics teams.</li>
                </ul>
                <a href="#" className="inline-block bg-[#1a237e] text-white px-4 py-2 rounded-lg hover:bg-[#1a237e]/90 transition-colors">
                  Try Tool Name 4
                </a>
              </div>
            </div>

            <hr className="my-8" />

            {/* Productivity & Ops Section */}
            <h2 className="text-2xl font-bold mb-6">⚡ Productivity & Ops</h2>
            
            <div className="grid gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Tool Name 5</h3>
                <ul className="space-y-2 mb-4">
                  <li><strong>What it does:</strong> Streamlines operations and boosts team productivity.</li>
                  <li><strong>Why we like it:</strong> Reduces manual work and improves efficiency.</li>
                  <li><strong>Best for:</strong> Operations teams, project managers.</li>
                </ul>
                <a href="#" className="inline-block bg-[#1a237e] text-white px-4 py-2 rounded-lg hover:bg-[#1a237e]/90 transition-colors">
                  Try Tool Name 5
                </a>
              </div>
            </div>

            <hr className="my-8" />

            {/* Design & Media Section */}
            <h2 className="text-2xl font-bold mb-6">🎨 Design & Media</h2>
            
            <div className="grid gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Tool Name 6</h3>
                <ul className="space-y-2 mb-4">
                  <li><strong>What it does:</strong> AI-powered design and media creation tools.</li>
                  <li><strong>Why we like it:</strong> Creates professional visuals without design expertise.</li>
                  <li><strong>Best for:</strong> Small businesses, content creators, marketers.</li>
                </ul>
                <a href="#" className="inline-block bg-[#1a237e] text-white px-4 py-2 rounded-lg hover:bg-[#1a237e]/90 transition-colors">
                  Try Tool Name 6
                </a>
              </div>
            </div>

            <hr className="my-8" />

            {/* Our Promise Section */}
            <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
              <h2 className="text-xl font-bold text-green-800 mb-3">Our Promise</h2>
              <p className="text-green-700 mb-3">
                We keep this page updated and remove tools that no longer meet our standards. Every recommendation is based on real experience or thorough evaluation.
              </p>
              <p className="text-green-700">
                <strong>Need help choosing?</strong> <Link href="/contact" className="text-green-800 hover:underline font-semibold">Contact us</Link> for personalized recommendations based on your specific business needs.
              </p>
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/get-started" 
                className="inline-block bg-[#1a237e] text-white px-8 py-3 rounded-lg hover:bg-[#1a237e]/90 transition-colors font-semibold text-lg"
              >
                Get Personalized Tool Recommendations
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
