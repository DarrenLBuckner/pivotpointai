import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import WhatsAppQuickAction from '../../components/WhatsAppQuickAction';

export default async function Contact() {
  const filePath = path.join(process.cwd(), 'content/contact.md');
  const markdown = fs.readFileSync(filePath, 'utf8');
  const html = marked(markdown);
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden pt-20 sm:pt-24">
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
      <main className="w-full max-w-3xl flex flex-col gap-8 sm:gap-10 items-center relative z-10 text-[#1a237e] px-4 sm:px-6 lg:px-8">
        <section className="w-full bg-white/80 rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-[#d3e3fd] mt-6 sm:mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg tracking-tight text-center">Contact</h1>
          <div className="prose prose-sm sm:prose-lg text-[#1a237e] mx-auto" dangerouslySetInnerHTML={{ __html: html }} />
          
          {/* Send Message Button */}
          <div className="mt-6 sm:mt-8 text-center">
            <a 
              href="mailto:info@pivotpointai.io?subject=Inquiry from PivotPoint AI Website&body=Hello PivotPoint AI team,%0D%0A%0D%0AI'm interested in learning more about your AI solutions.%0D%0A%0D%0ABest regards"
              className="inline-block bg-[#1a237e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-[#4e4f4f] transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              📧 Send Message
            </a>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600">
              Opens your email client to send a message to info@pivotpointai.io
            </p>
            
            {/* Alternative Contact Methods */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-[#1a237e]">
                Prefer Direct Communication?
              </h3>
              <p className="text-sm text-gray-600 mb-4 max-w-md mx-auto">
                For qualified business inquiries about AI implementation projects, you can reach out directly via WhatsApp:
              </p>
              
              <WhatsAppQuickAction 
                message="Hi Darren! I found your contact page and I'm seriously interested in discussing AI implementation for my business. Can we schedule a consultation?"
                buttonText="💬 Message on WhatsApp"
                variant="outline"
                className="w-full sm:w-auto"
              />
              
              <p className="mt-3 text-xs text-gray-500">
                Please include your business details and specific AI needs
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
