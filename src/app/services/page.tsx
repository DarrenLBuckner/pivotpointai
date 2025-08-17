
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a237e] via-[#4e4f4f] to-[#e3f2fd] flex flex-col items-center relative overflow-hidden pt-20 sm:pt-24">
      {/* Animated SVG Background (copied from Home) */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bg-gradient" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1a237e" />
            <stop offset="1" stopColor="#e3f2fd" />
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#bg-gradient)" />
        <g>
          <path d="M0 300 Q720 600 1440 300" stroke="#d3e3fd" strokeWidth="3" fill="none">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M0 300 Q720 600 1440 300; M0 350 Q720 500 1440 350; M0 300 Q720 600 1440 300" />
          </path>
          <path d="M0 600 Q720 200 1440 600" stroke="#7e7f7f" strokeWidth="2" fill="none" opacity="0.7">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="M0 600 Q720 200 1440 600; M0 650 Q720 300 1440 650; M0 600 Q720 200 1440 600" />
          </path>
          <circle r="120" cx="720" cy="450" fill="#d3e3fd" opacity="0.08">
            <animate attributeName="r" dur="6s" repeatCount="indefinite" values="120;180;120" />
          </circle>
        </g>
      </svg>
      <main className="w-full max-w-4xl flex flex-col gap-8 sm:gap-10 items-center relative z-10 text-[#1a237e] px-4 sm:px-6 lg:px-8">
        {/* Get Started Button - Top Position */}
        <div className="w-full text-center mt-6 sm:mt-8">
          <Link 
            href="/get-started" 
            className="inline-block bg-[#1a237e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-[#4e4f4f] transition-all transform hover:scale-105 w-full sm:w-auto text-center"
          >
            🚀 Get Started with Your AI Journey
          </Link>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600">
            Transform your business with our comprehensive AI roadmap
          </p>
        </div>

        {/* Roadmap Image - Moved to Top */}
        <div className="w-full flex justify-center my-6 sm:my-8">
          <Image src="/images/roadmap.jpeg" alt="PivotPoint AI Roadmap" width={500} height={400} className="rounded-xl sm:rounded-2xl shadow-lg border border-[#d3e3fd] object-cover opacity-95 w-full max-w-md sm:max-w-lg" />
        </div>

        {/* Flowchart for AI Implementation */}
        <section className="w-full flex flex-col items-center mt-6 sm:mt-8">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
            {/* Part 1 */}
            <div className="flex flex-col items-center flex-1 min-w-[200px] sm:min-w-[220px]">
              <div className="bg-[#1a237e] text-white rounded-full px-4 sm:px-6 py-2 font-bold text-base sm:text-lg mb-2 shadow-lg text-center">Pivot Point AI</div>
              <div className="w-1 h-6 sm:h-8 bg-[#1a237e] my-1" />
              <div className="bg-white/90 border border-[#d3e3fd] rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow text-center w-full max-w-xs">
                <span className="font-semibold text-[#1a237e] text-sm sm:text-base">AI Strategy & Training</span>
              </div>
              <div className="w-1 h-6 sm:h-8 bg-[#1a237e] my-1" />
              <div className="bg-white/90 border border-[#d3e3fd] rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow text-center w-full max-w-xs">
                <span className="font-semibold text-[#1a237e] text-sm sm:text-base">Business Process Automation</span>
              </div>
            </div>
            {/* Part 2 */}
            <div className="flex flex-col items-center flex-1 min-w-[200px] sm:min-w-[220px] mt-6 md:mt-0">
              <div className="bg-white/90 border border-[#d3e3fd] rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow text-center w-full max-w-xs">
                <span className="font-semibold text-[#1a237e] text-sm sm:text-base">Custom AI Solutions</span>
              </div>
              <div className="w-1 h-6 sm:h-8 bg-[#1a237e] my-1" />
              <div className="bg-white/90 border border-[#d3e3fd] rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow text-center w-full max-w-xs">
                <span className="font-semibold text-[#1a237e] text-sm sm:text-base">Cross-Atlantic Partnerships</span>
              </div>
            </div>
          </div>
          
          {/* Get Started Button */}
          <div className="w-full text-center mt-6 sm:mt-8">
            <Link 
              href="/get-started" 
              className="inline-block bg-[#1a237e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-[#4e4f4f] transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              🚀 Get Started
            </Link>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600">
              Ready to transform your business with AI? Start your journey today!
            </p>
          </div>
        </section>

        {/* Regional Market Map Section */}
        <section className="w-full max-w-6xl mx-auto bg-white/90 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-[#d3e3fd] my-8 sm:my-12">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a237e] mb-3 sm:mb-4">Our Market Landscape</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-2 sm:px-0">
              Understanding the AI ecosystem across emerging markets - key players, opportunities, and competitive landscape
            </p>
          </div>

          {/* Interactive Market Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            
            {/* Caribbean Region */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2 sm:mb-3 flex items-center">
                🏝️ Caribbean Markets
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="bg-white/70 rounded-lg p-2 sm:p-3">
                  <h4 className="font-semibold text-blue-700 text-sm sm:text-base">Tech Infrastructure</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Growing digital adoption, mobile-first economies</p>
                </div>
                <div className="bg-white/70 rounded-lg p-2 sm:p-3">
                  <h4 className="font-semibold text-blue-700 text-sm sm:text-base">Key Sectors</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Tourism, Finance, Agriculture, Energy</p>
                </div>
                <div className="bg-white/70 rounded-lg p-2 sm:p-3">
                  <h4 className="font-semibold text-blue-700 text-sm sm:text-base">AI Readiness</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Early adoption phase, government support growing</p>
                </div>
              </div>
            </div>

            {/* African Region */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center">
                🌍 African Markets
              </h3>
              <div className="space-y-3">
                <div className="bg-white/70 rounded-lg p-3">
                  <h4 className="font-semibold text-orange-700">Tech Hubs</h4>
                  <p className="text-sm text-gray-600">Nigeria, Kenya, South Africa leading innovation</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <h4 className="font-semibold text-orange-700">Growth Sectors</h4>
                  <p className="text-sm text-gray-600">Fintech, AgTech, HealthTech, EdTech</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <h4 className="font-semibold text-orange-700">AI Opportunity</h4>
                  <p className="text-sm text-gray-600">Massive potential, leapfrogging traditional systems</p>
                </div>
              </div>
            </div>

            {/* Global Competition */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center">
                🌐 Global Landscape
              </h3>
              <div className="space-y-3">
                <div className="bg-white/70 rounded-lg p-3">
                  <h4 className="font-semibold text-purple-700">Major Players</h4>
                  <p className="text-sm text-gray-600">Google, Microsoft, AWS expanding presence</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <h4 className="font-semibold text-purple-700">Local Champions</h4>
                  <p className="text-sm text-gray-600">Regional tech companies building AI solutions</p>
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <h4 className="font-semibold text-purple-700">Market Gaps</h4>
                  <p className="text-sm text-gray-600">SME-focused, affordable, practical AI solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Market Insights */}
          <div className="bg-gradient-to-r from-slate-100 to-blue-50 rounded-xl p-6 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">Market Intelligence</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$12B+</div>
                <div className="text-sm text-gray-600">AI Market Size (Africa & Caribbean by 2030)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">65%</div>
                <div className="text-sm text-gray-600">SMEs Without AI Strategy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                <div className="text-sm text-gray-600">Cost Savings Potential</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">2.5x</div>
                <div className="text-sm text-gray-600">Revenue Growth Opportunity</div>
              </div>
            </div>
          </div>

          {/* Competitive Analysis */}
          <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Competitive Landscape Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-700 mb-3">🏢 Enterprise Competitors</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• IBM Watson - High-cost, complex implementations</li>
                  <li>• Accenture AI - Large enterprise focus only</li>
                  <li>• Deloitte AI - Consulting-heavy, expensive</li>
                  <li>• Local System Integrators - Limited AI expertise</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-700 mb-3">🚀 Tech Startups</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Regional fintech platforms - Narrow focus</li>
                  <li>• E-commerce solutions - Single vertical</li>
                  <li>• SaaS providers - Generic, not localized</li>
                  <li>• Freelance developers - Inconsistent quality</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Button - After Market Analysis */}
        <div className="w-full text-center my-8">
          <Link 
            href="/get-started" 
            className="inline-block bg-[#1a237e] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#4e4f4f] transition-all transform hover:scale-105"
          >
            🎯 Ready to Capture This Market Opportunity?
          </Link>
          <p className="mt-3 text-sm text-gray-600">
            Let&apos;s position your business ahead of the competition
          </p>
        </div>

        {/* Grouped Service Cards */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-center">
          {/* AI Services */}
          <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-[#d3e3fd] flex flex-col gap-4 items-center">
            <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">AI Services</h2>
            <ul className="list-disc pl-6 text-lg text-left mx-auto" style={{maxWidth: '90%'}}>
              <li>AI Strategy & Roadmapping</li>
              <li>AI Training for Teams & Youth</li>
              <li>AI Content Creation & Lead Capture</li>
              <li>Custom AI Solutions for Education, Real Estate, Enterprise</li>
            </ul>
          </div>
          {/* Implementation Services */}
          <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-[#d3e3fd] flex flex-col gap-4 items-center">
            <h2 className="text-2xl font-bold mb-2 text-[#1a237e]">Implementation Services</h2>
            <ul className="list-disc pl-6 text-lg text-left mx-auto" style={{maxWidth: '90%'}}>
              <li>Business Process Automation</li>
              <li>Operations Automation (Quotes, Orders, Reporting, Follow-ups)</li>
              <li>Real Estate & E-commerce Tech Platforms</li>
              <li>Cross-Atlantic Partnerships & Local Economic Stimulation</li>
            </ul>
          </div>
        </section>

        {/* Final Get Started Button - Bottom Position */}
        <div className="w-full text-center my-12">
          <Link 
            href="/get-started" 
            className="inline-block bg-gradient-to-r from-[#1a237e] to-[#4e4f4f] text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-xl transition-all transform hover:scale-105"
          >
            🚀 Start Your AI Transformation Today
          </Link>
          <p className="mt-4 text-lg text-gray-700 font-medium max-w-2xl mx-auto">
            Ready to join the next generation of AI-powered businesses? Let&apos;s discuss your specific needs and create a custom roadmap for success.
          </p>
          <div className="flex justify-center items-center mt-6 space-x-8 text-gray-600">
            <span className="flex items-center">✓ Free Consultation</span>
            <span className="flex items-center">✓ Custom Strategy</span>
            <span className="flex items-center">✓ Proven Results</span>
          </div>
        </div>
      </main>
    </div>
  );
}
