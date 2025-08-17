"use client";

import { useState } from "react";

export default function RegionsPage() {
  const [selectedRegion, setSelectedRegion] = useState("caribbean");

  const regions = {
    caribbean: {
      title: "AI Solutions for Caribbean Businesses",
      countries: ["Jamaica", "Trinidad & Tobago", "Barbados", "Bahamas", "Grenada", "St. Lucia"],
      benefits: [
        "WhatsApp-first approach perfect for Caribbean communication preferences",
        "Low-cost solutions designed for Caribbean SME budgets", 
        "Understanding of regional business challenges and opportunities",
        "Remote delivery with hands-on support across time zones"
      ],
      caseStudy: "Helped a Jamaican retail chain increase sales 40% with WhatsApp automation"
    },
    africa: {
      title: "AI Implementation for African Markets",
      countries: ["South Africa", "Nigeria", "Kenya", "Ghana", "Morocco", "Egypt"],
      benefits: [
        "Mobile-first AI solutions optimized for African market conditions",
        "Cost-effective automation for growing African businesses",
        "Experience with diverse African business environments", 
        "Scalable solutions from startups to established enterprises"
      ],
      caseStudy: "Transformed a South African logistics company's operations with AI automation"
    }
  };

  const currentRegion = regions[selectedRegion as keyof typeof regions];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Solutions for <span className="text-blue-600">Emerging Markets</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Specialized AI implementation and automation services designed specifically 
            for Caribbean and African businesses.
          </p>
        </div>

        {/* Region Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setSelectedRegion("caribbean")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                selectedRegion === "caribbean"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Caribbean Markets
            </button>
            <button
              onClick={() => setSelectedRegion("africa")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                selectedRegion === "africa"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              African Markets
            </button>
          </div>
        </div>

        {/* Region Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column - Region Info */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {currentRegion.title}
            </h2>
            
            {/* Countries Served */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Countries We Serve:</h3>
              <div className="grid grid-cols-2 gap-3">
                {currentRegion.countries.map((country, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">{country}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Regional Benefits */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Choose Us:</h3>
              <ul className="space-y-3">
                {currentRegion.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Case Study & CTA */}
          <div className="space-y-8">
            
            {/* Case Study */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Success Story</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                &ldquo;{currentRegion.caseStudy}&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-blue-400">
                <p className="text-sm text-blue-200">
                  Ready to see similar results for your business?
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Book a free consultation to discuss how AI can transform your business 
                in the {selectedRegion === "caribbean" ? "Caribbean" : "African"} market.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="/contact"
                  className="block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Schedule Free Consultation
                </a>
                <a 
                  href="/get-started"
                  className="block w-full bg-gray-100 text-gray-800 text-center py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Get Project Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Preview */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our AI Solutions for {selectedRegion === "caribbean" ? "Caribbean" : "African"} Businesses
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-blue-50">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">WhatsApp Automation</h4>
              <p className="text-gray-600 text-sm">
                Customer service and sales automation via WhatsApp - the preferred communication method.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-green-50">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Business Intelligence</h4>
              <p className="text-gray-600 text-sm">
                Data analysis and insights to make smarter business decisions and identify growth opportunities.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-purple-50">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Process Automation</h4>
              <p className="text-gray-600 text-sm">
                Streamline repetitive tasks and workflows to reduce costs and improve efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
