import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import Image from 'next/image';

export default async function Mentorship() {
  const filePath = path.join(process.cwd(), 'content/mentorship.md');
  const markdown = fs.readFileSync(filePath, 'utf8');
  const html = marked(markdown);
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
      <main className="w-full max-w-3xl flex flex-col gap-10 items-center relative z-10 text-[#1a237e]">
        <section className="w-full bg-white/80 rounded-xl shadow-lg p-8 border border-[#d3e3fd] mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg tracking-tight text-center">Mentorship</h1>
          <div className="prose prose-lg text-[#1a237e] mx-auto" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="w-full flex justify-center mt-8">
            <Image src="/images/mentor_man_woman.png" alt="Mentorship" width={400} height={300} className="rounded-2xl shadow-lg border border-[#d3e3fd] object-cover opacity-90" />
          </div>
          
          {/* Send Message Button */}
          <div className="mt-8 text-center">
            <a 
              href="mailto:info@pivotpointai.io?subject=Mentorship Inquiry from PivotPoint AI Website&body=Hello PivotPoint AI team,%0D%0A%0D%0AI'm interested in learning more about your mentorship programs.%0D%0A%0D%0ABest regards"
              className="inline-block bg-[#1a237e] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#4e4f4f] transition-all transform hover:scale-105"
            >
              📧 Send Message
            </a>
            <p className="mt-3 text-sm text-gray-600">
              Opens your email client to send a message to info@pivotpointai.io
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
