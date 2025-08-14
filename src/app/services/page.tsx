
import Image from 'next/image';

export default function Services() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
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
      <main className="w-full max-w-4xl flex flex-col gap-10 items-center relative z-10 text-[#1a237e]">
        {/* Flowchart for AI Implementation */}
        <section className="w-full flex flex-col items-center mt-8">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Part 1 */}
            <div className="flex flex-col items-center flex-1 min-w-[220px]">
              <div className="bg-[#1a237e] text-white rounded-full px-6 py-2 font-bold text-lg mb-2 shadow-lg">Pivot Point AI</div>
              <div className="w-1 h-8 bg-[#1a237e] my-1" />
              <div className="bg-white/90 border border-[#d3e3fd] rounded-xl px-4 py-3 shadow text-center w-full max-w-xs">
                <span className="font-semibold text-[#1a237e]">AI Strategy & Training</span>
              </div>
              <div className="w-1 h-8 bg-[#1a237e] my-1" />
              <div className="bg-white/90 border border-[#d3e3fd] rounded-xl px-4 py-3 shadow text-center w-full max-w-xs">
                <span className="font-semibold text-[#1a237e]">Business Process Automation</span>
              </div>
            </div>
            {/* Part 2 */}
            <div className="flex flex-col items-center flex-1 min-w-[220px] mt-8 md:mt-0">
              <div className="bg-white/90 border border-[#d3e3fd] rounded-xl px-4 py-3 shadow text-center w-full max-w-xs">
                <span className="font-semibold text-[#1a237e]">Custom AI Solutions</span>
              </div>
              <div className="w-1 h-8 bg-[#1a237e] my-1" />
              <div className="bg-white/90 border border-[#d3e3fd] rounded-xl px-4 py-3 shadow text-center w-full max-w-xs">
                <span className="font-semibold text-[#1a237e]">Cross-Atlantic Partnerships</span>
              </div>
            </div>
          </div>
        </section>
        {/* Roadmap Image Break */}
        <div className="w-full flex justify-center my-8">
          <Image src="/images/roadmap.jpeg" alt="AI Roadmap" width={500} height={400} className="rounded-2xl shadow-lg border border-[#d3e3fd] object-cover opacity-95" />
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
      </main>
    </div>
  );
}
