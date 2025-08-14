import React from 'react';
import Link from 'next/link';

export default function Disclaimer() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden bg-[#f5f7fa]">
      <main className="w-full max-w-4xl flex flex-col gap-10 items-center relative z-10 text-[#1a237e]">
        <section className="w-full bg-white/80 rounded-xl shadow-lg p-8 border border-[#d3e3fd] mt-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-lg tracking-tight text-center">Disclaimer</h1>
          
          <div className="prose prose-lg text-[#1a237e] mx-auto max-w-none">
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> August 14, 2025<br />
              <strong>Last Updated:</strong> August 14, 2025
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <h2 className="text-xl font-bold text-yellow-800 mb-2">⚠️ Important Legal Notice</h2>
              <p className="text-yellow-700">
                This disclaimer governs your use of PivotPoint AI&apos;s website, services, content, and materials. By accessing our website or using our services, you acknowledge and agree to the terms set forth in this disclaimer.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">1. General Disclaimer</h2>
            <p className="mb-6">
              The information, advice, tools, and services provided by PivotPoint AI are for general informational and educational purposes only. They are not intended as specific professional advice for your particular business situation.
            </p>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
              <h3 className="text-lg font-semibold text-red-800 mb-2">NO GUARANTEES</h3>
              <p className="text-red-700">
                We expressly disclaim any guarantees, warranties, or representations regarding specific business results, revenue increases, cost savings, ROI, timeline for results, or suitability for your specific business needs.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">2. Business and Investment Disclaimer</h2>
            
            <h3 className="text-xl font-semibold mb-3">No Guaranteed Results</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Past performance does not predict future results</li>
              <li>Individual results may vary significantly</li>
              <li>Success depends on factors beyond our control including market conditions, implementation quality, business environment, and individual effort</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Risk Acknowledgment</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>All business activities involve risk</li>
              <li>AI implementation may not suit every business</li>
              <li>Technology investments may not yield expected returns</li>
              <li>Market conditions can affect outcomes</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">3. Professional Services Disclaimer</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Not Professional Advice</h3>
              <p className="text-blue-700 mb-2">Our content and services do not constitute:</p>
              <ul className="list-disc pl-4 text-blue-700">
                <li>Legal advice</li>
                <li>Financial or investment advice</li>
                <li>Accounting or tax advice</li>
                <li>Medical or health advice</li>
                <li>Technical support for third-party products</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">4. Technology and AI Disclaimer</h2>
            <p className="mb-4">
              AI and automation technologies are rapidly evolving. We cannot guarantee:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Compatibility with all systems</li>
              <li>Continuous functionality of tools and platforms</li>
              <li>Absence of technical issues during implementation</li>
              <li>Success of third-party integrations</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by law:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Our liability is limited to fees paid for services</li>
              <li>We exclude liability for indirect or consequential damages</li>
              <li>We are not liable for lost profits or opportunity costs</li>
              <li>Force majeure events may excuse performance</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">6. Consultation Recommendation</h2>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-green-700">
                Before implementing any recommendations, we strongly advise you to:
              </p>
              <ul className="list-disc pl-4 text-green-700 mt-2">
                <li>Assess your specific business situation</li>
                <li>Evaluate potential risks and benefits</li>
                <li>Consult with qualified professionals</li>
                <li>Test implementations in controlled environments</li>
                <li>Monitor results and adjust as necessary</li>
              </ul>
            </div>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="mb-2"><strong>PivotPoint AI</strong></p>
              <p className="mb-2">2827 Osceola</p>
              <p className="mb-2">Missouri, United States 63111</p>
              <p className="mb-2"><strong>Email:</strong> info@pivotpointai.io</p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 italic">
                <strong>By using our website or services, you acknowledge that you have read, understood, and agree to the terms set forth in this disclaimer.</strong>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/terms" className="text-[#1a237e] hover:underline">Terms and Conditions</Link>
              <Link href="/privacy" className="text-[#1a237e] hover:underline">Privacy Policy</Link>
              <Link href="/cookies" className="text-[#1a237e] hover:underline">Cookie Policy</Link>
              <Link href="/accessibility" className="text-[#1a237e] hover:underline">Accessibility Statement</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
