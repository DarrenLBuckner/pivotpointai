import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden bg-[#f5f7fa]">
      <main className="w-full max-w-4xl flex flex-col gap-10 items-center relative z-10 text-[#1a237e]">
        <section className="w-full bg-white/80 rounded-xl shadow-lg p-8 border border-[#d3e3fd] mt-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-lg tracking-tight text-center">Privacy Policy</h1>
          
          <div className="prose prose-lg text-[#1a237e] mx-auto max-w-none">
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> August 14, 2025<br />
              <strong>Last Updated:</strong> August 14, 2025
            </p>

            <p className="mb-6">
              PivotPoint AI (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a corporation registered in the State of Missouri, United States. We are committed to protecting your privacy and complying with applicable privacy laws in the United States, the European Union (EU), and other jurisdictions where we operate, including certain African countries, Guyana, and Jamaica.
            </p>

            <p className="mb-8">
              This Privacy Policy explains how we collect, use, share, and protect your personal information when you interact with our website, submit content, or engage with our services.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>

            <h3 className="text-xl font-semibold mb-3">a) Information You Provide Directly</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name, email address, phone number, and other contact details.</li>
              <li>User-generated content (including blogs, articles, or media you submit).</li>
              <li>Responses to surveys, forms, and communications.</li>
              <li>Information provided when requesting a call or consultation.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">b) Information Collected Automatically</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address, browser type, device information, and operating system.</li>
              <li>Usage data (pages visited, actions taken, time spent on the site).</li>
              <li>Cookies, analytics tags, and similar tracking technologies.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">c) Information from Third Parties</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Publicly available data from social media profiles (when you link them).</li>
              <li>Data from partners, affiliates, and analytics providers.</li>
            </ul>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information for purposes including, but not limited to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing, personalizing, and improving our services.</li>
              <li>Contacting you with your consent (e.g., follow-up calls, emails).</li>
              <li>Reviewing and publishing user-submitted content (blogs, articles, media).</li>
              <li>Marketing, promotions, and business communications (where permitted by law).</li>
              <li>Complying with legal obligations.</li>
              <li>Protecting our legal rights and preventing misuse.</li>
            </ul>
            <p className="mb-6 font-semibold text-red-600">
              We <strong>cannot guarantee results</strong> from any advice, content, or tools provided.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">3. Legal Bases for Processing (GDPR Compliance)</h2>
            <p className="mb-4">If you are located in the EU, UK, or other GDPR jurisdictions, our processing of your personal data is based on:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Consent</strong> (Article 6(1)(a))</li>
              <li><strong>Performance of a contract</strong> (Article 6(1)(b))</li>
              <li><strong>Compliance with legal obligations</strong> (Article 6(1)(c))</li>
              <li><strong>Legitimate interests</strong> (Article 6(1)(f))</li>
            </ul>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">4. Sharing of Information</h2>
            <p className="mb-4">We may share your personal information with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Service providers and vendors assisting with operations (hosting, analytics, communications).</li>
              <li>Business partners (with your consent).</li>
              <li>Legal authorities, if required by law.</li>
              <li>Successors in the event of a merger, acquisition, or sale of assets.</li>
            </ul>
            <p className="mb-6 font-semibold">
              We <strong>do not sell your personal information</strong> without your explicit consent.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">5. International Data Transfers</h2>
            <p className="mb-6">
              Your personal information may be transferred to, and stored in, countries other than your own, including the United States, EU member states, African nations, Guyana, and Jamaica. We take reasonable measures to ensure your data is protected under applicable laws, including GDPR-standard contractual clauses where required.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have rights to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access, correct, or delete your data.</li>
              <li>Withdraw consent at any time.</li>
              <li>Request data portability.</li>
              <li>Restrict or object to processing.</li>
              <li>Lodge a complaint with your local data protection authority.</li>
            </ul>
            <p className="mb-6">
              Requests can be sent to <strong>info@pivotpointai.io</strong>.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
            <p className="mb-6">
              We retain personal data only as long as necessary for the purposes described above or as required by law.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar technologies to improve site functionality, analyze usage, and deliver relevant content. You can manage or disable cookies in your browser settings.
            </p>
            <p className="mb-6">
              We may use cookies or tracking links to monitor referral traffic for affiliate purposes. This may involve sharing non-personal click data with our affiliate partners.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">9. Security</h2>
            <p className="mb-6">
              We implement reasonable security measures to protect your data. However, no transmission or storage system is completely secure.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">10. User-Generated Content</h2>
            <p className="mb-4">By submitting blogs, articles, or other content:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>You grant us a non-exclusive, worldwide, royalty-free license to use, publish, and distribute your content.</li>
              <li>You affirm that you own the rights or have permission to share the content.</li>
              <li>We are not responsible for the views or opinions expressed in user submissions.</li>
            </ul>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">11. Children&apos;s Privacy</h2>
            <p className="mb-6">
              Our services are not intended for children under 16, and we do not knowingly collect data from them.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">12. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy at any time. The &ldquo;Last Updated&rdquo; date will be revised accordingly.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="mb-2"><strong>PivotPoint AI</strong></p>
              <p className="mb-2">Missouri, United States</p>
              <p className="mb-2"><strong>Email:</strong> info@pivotpointai.io</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
