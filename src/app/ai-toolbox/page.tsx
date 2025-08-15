import { loadToolbox, inferredIconFor, byCategory } from "@/lib/toolbox";

export const metadata = {
  title: "AI Toolbox - Game-Changing Tools for Business Success | PivotPoint AI",
  description: "Discover the exact AI tools PivotPoint AI uses to transform businesses. Hand-picked, battle-tested, and guaranteed to boost your productivity.",
};

export default function AIToolboxPage() {
  const items = loadToolbox();
  const cats = byCategory(items);

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e] via-[#3949ab] to-[#0891b2] opacity-10"></div>
      
      <div className="relative mx-auto max-w-4xl px-4 py-12 space-y-12">
        {/* Hero Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1a237e] to-[#0891b2] text-white px-4 py-2 rounded-full text-sm font-semibold">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            PivotPoint AI's Secret Weapons
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#1a237e] via-[#3949ab] to-[#0891b2] bg-clip-text text-transparent leading-tight">
            🚀 The Ultimate<br />AI Toolbox
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            These are the <span className="font-bold text-[#1a237e]">exact tools</span> we use to transform businesses across the Caribbean and Africa. 
            <span className="bg-yellow-200 px-2 py-1 rounded-md ml-2 font-semibold">Battle-tested. Results-proven.</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-2 rounded-full">
              <span className="text-green-600">✓</span>
              Hand-picked by experts
            </div>
            <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-2 rounded-full">
              <span className="text-blue-600">⚡</span>
              Instant productivity boost
            </div>
            <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-2 rounded-full">
              <span className="text-purple-600">🎯</span>
              Real business impact
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure - Stylish */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">🤝</span>
            <span className="font-semibold text-amber-800">Transparency First</span>
          </div>
          <p className="text-amber-700">
            Some links may be affiliate links. We only recommend tools that have personally transformed our clients' businesses. 
            <span className="font-semibold">Your success = our success.</span>
          </p>
        </div>

        {/* Tools Categories */}
        <div className="space-y-12">
          {cats.map(([category, tools]) => {
            // Define category styling and icons
            const categoryConfig = {
              'AI Powerhouses': {
                icon: '🤖',
                title: 'AI Powerhouses',
                subtitle: 'The smartest AI assistants for business',
                gradient: 'from-purple-500 to-pink-500'
              },
              'Daily Essentials': {
                icon: '⚡',
                title: 'Daily Essentials',
                subtitle: 'Tools you\'ll use every single day',
                gradient: 'from-blue-500 to-cyan-500'
              },
              'Finance & Accounting': {
                icon: '💰',
                title: 'Finance & Accounting',
                subtitle: 'Manage money like a pro',
                gradient: 'from-green-500 to-emerald-500'
              },
              'Marketing & Sales': {
                icon: '📈',
                title: 'Marketing & Sales',
                subtitle: 'Grow your customer base fast',
                gradient: 'from-orange-500 to-red-500'
              },
              'Automation Heroes': {
                icon: '🔄',
                title: 'Automation Heroes',
                subtitle: 'Work smarter, not harder',
                gradient: 'from-indigo-500 to-purple-500'
              },
              'Creative Studio': {
                icon: '🎨',
                title: 'Creative Studio',
                subtitle: 'Design like a professional',
                gradient: 'from-pink-500 to-rose-500'
              },
              'Analytics & Insights': {
                icon: '📊',
                title: 'Analytics & Insights',
                subtitle: 'Data-driven decisions made easy',
                gradient: 'from-teal-500 to-blue-500'
              },
              'Team Collaboration': {
                icon: '🏢',
                title: 'Team Collaboration',
                subtitle: 'Keep your team aligned and productive',
                gradient: 'from-violet-500 to-purple-500'
              }
            };

            const config = categoryConfig[category as keyof typeof categoryConfig] || {
              icon: '✨',
              title: category,
              subtitle: 'Essential tools for your business',
              gradient: 'from-gray-500 to-slate-500'
            };

            return (
              <section key={category} className="space-y-8">
                {/* Category Header */}
                <div className="text-center space-y-4">
                  <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${config.gradient} text-white px-6 py-3 rounded-2xl shadow-lg`}>
                    <span className="text-2xl">{config.icon}</span>
                    <div className="text-left">
                      <h2 className="text-2xl font-bold">{config.title}</h2>
                      <p className="text-sm opacity-90">{config.subtitle}</p>
                    </div>
                  </div>
                </div>
                
                {/* Tools Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {tools.map((t, index) => (
                    <div
                      key={t.name}
                      className="group relative bg-white rounded-2xl border-2 border-gray-100 p-6 hover:border-[#0891b2] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      {/* Popular Badge */}
                      {['ChatGPT', 'Claude', 'Notion', 'QuickBooks', 'Canva'].includes(t.name) && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg animate-pulse">
                          ⭐ POPULAR
                        </div>
                      )}

                      {/* Free Badge */}
                      {['Wave', 'Google Analytics', 'IFTTT'].includes(t.name) && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-green-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                          🆓 FREE
                        </div>
                      )}
                      
                      {/* Tool Header */}
                      <div className="flex items-start gap-4 mb-4">
                        {t.logo || inferredIconFor(t.url) ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={t.logo || inferredIconFor(t.url)}
                            alt=""
                            className="h-14 w-14 rounded-xl shadow-md group-hover:scale-110 transition-transform"
                          />
                        ) : (
                          <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white font-bold text-xl shadow-md`}>
                            {t.name.charAt(0)}
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-[#1a237e] group-hover:text-[#0891b2] transition-colors">
                            {t.name}
                          </h3>
                          <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                            {config.title}
                          </div>
                        </div>
                      </div>
                      
                      {/* Tool Description */}
                      {t.blurb && (
                        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                          {t.blurb}
                        </p>
                      )}
                      
                      {/* CTA Button */}
                      <a
                        href={t.affiliate_url || t.url}
                        className="group-hover:scale-105 transition-transform inline-flex items-center justify-center w-full rounded-xl px-6 py-3 text-sm font-bold bg-gradient-to-r from-[#1a237e] to-[#0891b2] text-white hover:from-[#0891b2] hover:to-[#1a237e] shadow-lg hover:shadow-xl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>🚀 Try {t.name}</span>
                        <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-[#1a237e] to-[#0891b2] text-white rounded-2xl p-8 space-y-4">
          <h3 className="text-2xl font-bold">Ready to Transform Your Business?</h3>
          <p className="text-lg opacity-90">
            These tools are just the beginning. Let PivotPoint AI help you implement a complete AI strategy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/get-started"
              className="bg-white text-[#1a237e] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              🚀 Get Started Today
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-[#1a237e] transition-colors"
            >
              💬 Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
