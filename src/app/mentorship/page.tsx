import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Mentorship & Training - PivotPoint AI",
  description: "Expert AI mentorship and training programs for Caribbean and African business leaders. Learn to implement AI solutions effectively in your organization.",
  keywords: "AI mentorship, AI training, business mentorship, AI education, Caribbean AI training, African AI mentorship",
  openGraph: {
    title: "AI Mentorship & Training - PivotPoint AI", 
    description: "Expert AI mentorship and training programs for business leaders.",
    url: "https://pivotpointai.io/mentorship",
  },
};

export default function Mentorship() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient mesh */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-10 animate-float"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 20 + 's',
                animationDuration: (Math.random() * 10 + 10) + 's'
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMTBMMTAgMEw0MCAwTDQwIDEwTDQwIDQwTDEwIDQwTDAgNDBMMCAxMFoiIGZpbGw9InVybCgjZ3JpZCkiLz4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JpZCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuMDUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=')] opacity-30"></div>
      </div>

      <main className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Floating badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 animate-pulse shadow-2xl">
              <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
              Professional Mentorship Program
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-white via-emerald-200 to-teal-300 bg-clip-text text-transparent leading-tight animate-fade-in-up">
              Accelerate Your Growth with{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Expert Guidance
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              Connect with experienced professionals who can help you navigate your career journey, develop new skills, and achieve your goals in the AI-powered economy.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600">
              <Link 
                href="/get-started" 
                className="group relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 border border-emerald-400/20"
              >
                <span className="relative z-10">🚀 Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </Link>
              
              <Link 
                href="/contact?subject=Mentorship%20Inquiry"
                className="group relative bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                📧 Contact Mentor Team
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Mentorship Offerings */}
        <section className="px-4 py-20 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive mentorship designed for emerging market professionals
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* One-on-One Mentoring */}
              <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">👤</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    One-on-One Mentoring
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Personalized guidance tailored to your specific needs and goals. Direct access to industry experts who understand the unique challenges of emerging markets.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-emerald-400 text-sm">
                      ✓ Weekly 1-hour sessions
                    </div>
                    <div className="flex items-center text-emerald-400 text-sm">
                      ✓ Customized learning path
                    </div>
                    <div className="flex items-center text-emerald-400 text-sm">
                      ✓ 24/7 support via messaging
                    </div>
                  </div>
                </div>
              </div>

              {/* Industry Expertise */}
              <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🏢</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    Industry Expertise
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Learn from professionals with real-world experience in AI, technology, business development, and emerging market dynamics across Caribbean and African contexts.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-blue-400 text-sm">
                      ✓ AI & Technology leaders
                    </div>
                    <div className="flex items-center text-blue-400 text-sm">
                      ✓ Business strategy experts
                    </div>
                    <div className="flex items-center text-blue-400 text-sm">
                      ✓ Regional market specialists
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Skill Development */}
              <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📚</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    Skill Development
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Focus on both technical and soft skills that matter most in today&apos;s AI-driven economy. Build capabilities that translate directly to career advancement and business success.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-purple-400 text-sm">
                      ✓ Technical AI skills
                    </div>
                    <div className="flex items-center text-purple-400 text-sm">
                      ✓ Leadership development
                    </div>
                    <div className="flex items-center text-purple-400 text-sm">
                      ✓ Communication mastery
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Planning */}
              <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-orange-500/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-orange-400 to-red-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🎯</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                    Career Planning & Network Building
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Strategic advice on career progression and opportunities. Connect with industry professionals and expand your network across emerging markets.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-orange-400 text-sm">
                      ✓ Strategic career roadmap
                    </div>
                    <div className="flex items-center text-orange-400 text-sm">
                      ✓ Professional networking
                    </div>
                    <div className="flex items-center text-orange-400 text-sm">
                      ✓ Opportunity identification
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Process */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven 5-step process designed for maximum impact
              </p>
            </div>

            <div className="relative bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {[
                    { step: "1", title: "Assessment", desc: "Evaluate current skills and career goals", color: "emerald" },
                    { step: "2", title: "Matching", desc: "Pair with mentor aligned to objectives", color: "blue" },
                    { step: "3", title: "Planning", desc: "Create personalized development plan", color: "purple" },
                    { step: "4", title: "Support", desc: "Regular sessions and continuous guidance", color: "orange" },
                    { step: "5", title: "Tracking", desc: "Monitor growth and adjust plan", color: "teal" }
                  ].map((item, index) => (
                    <div key={index} className="text-center group">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-${item.color}-400 to-${item.color}-500 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {item.step}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                      {index < 4 && (
                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-500 to-transparent" style={{transform: `translateX(-${100-index*25}%)`}}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Benefit */}
        <section className="px-4 py-20 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Who Can Benefit
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our mentorship program is designed for ambitious professionals across emerging markets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🎓", title: "Recent Graduates", desc: "Enter the workforce with confidence and industry connections" },
                { icon: "📈", title: "Career Advancement", desc: "Professionals ready to take the next step in their careers" },
                { icon: "🔄", title: "Career Transitions", desc: "Switch fields or industries with expert guidance" },
                { icon: "🚀", title: "Entrepreneurs", desc: "Build and scale businesses in emerging markets" },
                { icon: "💡", title: "AI Enthusiasts", desc: "Learn to leverage AI for personal and professional growth" },
                { icon: "🌍", title: "Regional Leaders", desc: "Drive innovation and growth in Caribbean and African markets" }
              ].map((item, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentor Showcase */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="relative bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Ready to Transform Your Career?
                </h3>
                
                <div className="w-full flex justify-center mb-8">
                  <Image src="/images/mentor_man_woman.png" alt="Mentorship Team" width={400} height={300} className="rounded-2xl shadow-2xl border border-emerald-500/20 opacity-90" />
                </div>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  Join our mentorship program and accelerate your growth with expert guidance tailored for the AI-powered economy in emerging markets.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link 
                    href="/get-started" 
                    className="group relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 border border-emerald-400/20"
                  >
                    <span className="relative z-10">🚀 Start Your Journey Today</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  </Link>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">100+</div>
                    <div className="text-gray-300 text-sm">Professionals Mentored</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
