import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Animated SVG Background */}
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
      <main className="w-full max-w-3xl flex flex-col gap-10 items-center relative z-10 text-[#1a237e]">
        {/* Hero Section */}
        <section className="text-center py-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">AI Implementation for SMEs in Emerging Markets</h1>
          <p className="text-lg sm:text-xl font-medium mb-6 text-[#4e4f4f]">Practical, low-cost AI to grow sales and cut costs. WhatsApp-first. Hands-on delivery.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/get-started" className="bg-[#1a237e] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#4e4f4f] transition">Get Started</Link>
            <Link href="/plan" className="bg-[#d3e3fd] text-[#1a237e] px-6 py-3 rounded-full font-semibold shadow hover:bg-[#e3f2fd] transition">See a 30-Day Plan</Link>
          </div>
        </section>

        {/* Three Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-8">
          <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center border border-[#d3e3fd] relative">
            <h2 className="font-bold text-lg mb-2">AI Implementation</h2>
            <p className="text-[#4e4f4f] text-center">Strategic integration of AI for business success.</p>
            <Image src="/images/AI_Robot.png" alt="AI Robot" width={64} height={64} className="mt-4 opacity-80 drop-shadow-lg" style={{objectFit: 'contain'}} />
          </div>
          <div className="bg-white/80 rounded-xl shadow-lg p-8 flex flex-col items-center border border-[#d3e3fd] relative min-h-[220px]">
            <h2 className="font-bold text-lg mb-2 text-center w-full">Operations Automation</h2>
            <p className="text-[#4e4f4f] text-center w-full">Automate quotes, orders, reporting, and follow-ups.</p>
            <Image src="/images/computerball.png" alt="Automation" width={80} height={80} className="mt-4 opacity-80 drop-shadow-lg" style={{objectFit: 'contain'}} />
          </div>
          <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col items-center border border-[#d3e3fd] relative">
            <h2 className="font-bold text-lg mb-2">Sales Acceleration</h2>
            <p className="text-[#4e4f4f] text-center">AI content kits and lead capture that convert.</p>
            <Image src="/images/AI_robot_woman.png" alt="AI Robot Woman" width={64} height={64} className="mt-4 opacity-80 drop-shadow-lg" style={{objectFit: 'contain'}} />
          </div>
        </section>

        {/* Empowering Section */}
        <section className="bg-[#e3f2fd] rounded-xl p-6 mt-8 shadow w-full text-center">
          <h3 className="text-2xl font-bold mb-2">Empowering Businesses Through AI Innovation</h3>
          <p className="text-[#4e4f4f]">PivotPoint AI empowers communities in the Caribbean and Africa to thrive in the AI economy. We deliver mentorship and practical tech that help SMEs scale with real-world tools.</p>
        </section>

        {/* Testimonials */}
        <section className="mt-8 w-full">
          <h4 className="text-xl font-semibold mb-4 text-center">Testimonials</h4>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <blockquote className="bg-white/80 border-l-4 border-[#1a237e] p-4 rounded shadow text-[#4e4f4f] max-w-sm mx-auto">“PivotPoint AI transformed our operations.”<br /><span className="font-bold">— Business Owner</span></blockquote>
            <blockquote className="bg-white/80 border-l-4 border-[#1a237e] p-4 rounded shadow text-[#4e4f4f] max-w-sm mx-auto">“Clear roadmap and quick wins.”<br /><span className="font-bold">— Program Director</span></blockquote>
          </div>
        </section>
      </main>
    </div>
  );
}
