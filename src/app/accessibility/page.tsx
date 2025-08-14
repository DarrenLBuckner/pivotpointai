import React from 'react';
import Link from 'next/link';

export default function Accessibility() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden bg-[#f5f7fa]">
      <main className="w-full max-w-4xl flex flex-col gap-10 items-center relative z-10 text-[#1a237e]">
        <section className="w-full bg-white/80 rounded-xl shadow-lg p-8 border border-[#d3e3fd] mt-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-lg tracking-tight text-center">Accessibility Statement</h1>
          
          <div className="prose prose-lg text-[#1a237e] mx-auto max-w-none">
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> August 14, 2025<br />
              <strong>Last Updated:</strong> August 14, 2025
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <h2 className="text-xl font-bold text-blue-800 mb-2">♿ Our Commitment to Accessibility</h2>
              <p className="text-blue-700">
                PivotPoint AI is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards to provide equal access to information and functionality.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">1. Accessibility Standards</h2>
            <p className="mb-4">We strive to conform to the following accessibility standards:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>WCAG 2.1 Level AA:</strong> Web Content Accessibility Guidelines 2.1 at Level AA</li>
              <li><strong>Section 508:</strong> U.S. federal accessibility requirements</li>
              <li><strong>ADA:</strong> Americans with Disabilities Act compliance</li>
              <li><strong>EN 301 549:</strong> European accessibility standard</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">2. Current Accessibility Features</h2>

            <h3 className="text-xl font-semibold mb-3">Visual Accessibility</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>High contrast color schemes designed for visual clarity</li>
              <li>Content that adapts to browser zoom settings</li>
              <li>Descriptive alt text for images and graphics</li>
              <li>Information not conveyed by color alone</li>
              <li>Clear visual focus indicators for keyboard navigation</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Motor Accessibility</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Full keyboard accessibility for all interactive elements</li>
              <li>Touch targets meet minimum size requirements</li>
              <li>Content without restrictive time limits</li>
              <li>Ability to pause or control moving content</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Cognitive Accessibility</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Simple, clear language and instructions</li>
              <li>Predictable and consistent page layouts</li>
              <li>Clear error messages and correction guidance</li>
              <li>Accessible help documentation and support</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">3. Assistive Technology Compatibility</h2>
            <p className="mb-4">Our website is designed to work with:</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Screen Readers</h4>
                <ul className="text-sm">
                  <li>• JAWS (Job Access With Speech)</li>
                  <li>• NVDA (NonVisual Desktop Access)</li>
                  <li>• VoiceOver (macOS and iOS)</li>
                  <li>• TalkBack (Android)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Voice Recognition</h4>
                <ul className="text-sm">
                  <li>• Dragon NaturallySpeaking</li>
                  <li>• Windows Speech Recognition</li>
                  <li>• Voice Control (macOS)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">4. Known Limitations</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">We are actively working to address:</h3>
              <ul className="text-yellow-700">
                <li>• Some PDF documents may not be fully accessible</li>
                <li>• Certain third-party embedded content may have limitations</li>
                <li>• Legacy content being updated for full compliance</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">5. Reporting Accessibility Issues</h2>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-green-700 mb-3">
                If you encounter accessibility barriers on our website, please contact us:
              </p>
              <div className="text-green-700">
                <p><strong>Email:</strong> accessibility@pivotpointai.io</p>
                <p><strong>Subject Line:</strong> Accessibility Issue Report</p>
              </div>
            </div>

            <p className="mb-4">Please include:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Description of the accessibility issue</li>
              <li>Page URL where the issue occurs</li>
              <li>Browser and assistive technology used</li>
              <li>Steps to reproduce the issue</li>
              <li>Your contact information for follow-up</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Response Timeline</h3>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Acknowledgment:</strong> Within 2 business days</li>
              <li><strong>Initial Assessment:</strong> Within 5 business days</li>
              <li><strong>Resolution Timeline:</strong> Varies based on complexity</li>
              <li><strong>Follow-up:</strong> Confirmation of fix with reporter</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">6. Alternative Formats</h2>
            <p className="mb-4">If you need content in an alternative format, we can provide:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Large print versions</li>
              <li>Audio recordings</li>
              <li>Electronic formats compatible with assistive technology</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">7. Continuous Improvement</h2>
            <p className="mb-4">We are dedicated to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Ongoing accessibility improvements</li>
              <li>Staying current with evolving standards</li>
              <li>Incorporating user feedback</li>
              <li>Maintaining compliance with legal requirements</li>
            </ul>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="mb-2"><strong>Accessibility Coordinator</strong></p>
              <p className="mb-2">PivotPoint AI Accessibility Team</p>
              <p className="mb-2">2827 Osceola</p>
              <p className="mb-2">Missouri, United States 63111</p>
              <p className="mb-2"><strong>Email:</strong> accessibility@pivotpointai.io</p>
              <p className="mb-2"><strong>General Contact:</strong> info@pivotpointai.io</p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 italic">
                <strong>We welcome your feedback on the accessibility of our website. Your input helps us improve our services for all users.</strong>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/terms" className="text-[#1a237e] hover:underline">Terms and Conditions</Link>
              <Link href="/privacy" className="text-[#1a237e] hover:underline">Privacy Policy</Link>
              <Link href="/cookies" className="text-[#1a237e] hover:underline">Cookie Policy</Link>
              <Link href="/disclaimer" className="text-[#1a237e] hover:underline">Disclaimer</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
