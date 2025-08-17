import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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

      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section - Dramatically Enhanced */}
        <section className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Floating badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-8 animate-pulse shadow-2xl">
              <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
              Enterprise AI Solutions for Emerging Markets
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent leading-tight animate-fade-in-up">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Class 1 AI
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              Strategic AI implementation, intelligent automation, and sales acceleration for SMEs across the Caribbean and Africa. 
              <span className="text-cyan-400 font-semibold">Real results, measurable ROI.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600">
              <Link 
                href="/get-started" 
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 border border-cyan-400/20"
              >
                <span className="relative z-10">Start Your AI Transformation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </Link>
              
              <Link 
                href="/plan" 
                className="group relative bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                View 30-Day Implementation Plan
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Enhanced Service Cards Section */}
        <section className="px-4 py-20 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Three Pillars of AI Excellence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our proven methodology transforms businesses through strategic AI implementation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* AI Implementation Card */}
              <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Image src="/images/AI_Robot.png" alt="AI Implementation" width={32} height={32} className="filter brightness-0 invert" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    AI Implementation
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Strategic integration of cutting-edge AI technologies tailored for emerging market dynamics and resource constraints.
                  </p>
                  
                  <div className="flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Learn More <span className="ml-2">→</span>
                  </div>
                </div>
              </div>

              {/* Operations Automation Card */}
              <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Image src="/images/computerball.png" alt="Operations Automation" width={32} height={32} className="filter brightness-0 invert" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    Operations Automation
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Intelligent automation of quotes, orders, reporting, and follow-ups. Reduce manual work by 80% while improving accuracy.
                  </p>
                  
                  <div className="flex items-center text-purple-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Learn More <span className="ml-2">→</span>
                  </div>
                </div>
              </div>

              {/* Sales Acceleration Card */}
              <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Image src="/images/AI_robot_woman.png" alt="Sales Acceleration" width={32} height={32} className="filter brightness-0 invert" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    Sales Acceleration
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    AI-powered content generation, intelligent lead capture, and conversion optimization that drives measurable revenue growth.
                  </p>
                  
                  <div className="flex items-center text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Learn More <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Empowering Section */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl"></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Empowering the Next Generation of{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    AI-Powered Businesses
                  </span>
                </h3>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                  PivotPoint AI bridges the technology gap for SMEs in the Caribbean and Africa. We deliver enterprise-grade AI solutions with hands-on mentorship, practical implementation, and measurable results that drive real business transformation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                    <div className="text-gray-300">Businesses Transformed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">80%</div>
                    <div className="text-gray-300">Average Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-400 mb-2">3x</div>
                    <div className="text-gray-300">Revenue Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials */}
        <section className="px-4 py-20 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-6xl mx-auto">
            <h4 className="text-4xl font-bold text-white text-center mb-16">
              Success Stories from Our Clients
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                    "PivotPoint AI completely transformed our operations. We&apos;ve seen a 300% increase in efficiency and our revenue has doubled in just 6 months."
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      M
                    </div>
                    <div>
                      <div className="font-bold text-white">Maria Rodriguez</div>
                      <div className="text-gray-400">CEO, Caribbean Logistics</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                    "The roadmap was crystal clear and the implementation was seamless. We&apos;re now ahead of our competitors with AI-powered automation."
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      J
                    </div>
                    <div>
                      <div className="font-bold text-white">James Okonkwo</div>
                      <div className="text-gray-400">Director, African Tech Solutions</div>
                    </div>
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
