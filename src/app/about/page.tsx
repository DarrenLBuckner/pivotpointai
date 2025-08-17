import Image from 'next/image';

export default function About() {
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
        <div className="w-full flex justify-center mt-6 sm:mt-8">
          <Image src="/images/conference_room.png" alt="PivotPoint AI Team" width={400} height={300} className="rounded-xl sm:rounded-2xl shadow-lg border border-[#d3e3fd] object-cover opacity-90 w-full max-w-md sm:max-w-lg" />
        </div>
        <section className="w-full bg-white/80 rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-[#d3e3fd] mt-6 sm:mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg tracking-tight text-center">About Us</h1>
          <div className="prose prose-sm sm:prose-lg text-[#1a237e] mx-auto space-y-4 sm:space-y-6">
            <p><strong>At PivotPoint AI, we believe technology should be a bridge</strong> — connecting people, creating opportunities, and closing the gap between potential and prosperity. Our mission is to empower Black and Brown communities across the African diaspora, the Caribbean, and emerging markets with the skills and tools to thrive in the AI era.</p>
            <p>Founded by <strong>Darren Buckner</strong> and <strong>Rochelle Pydana</strong>, our leadership blends African American innovation with deep Caribbean roots. Rochelle was born and raised in Guyana, educated at the University of Guyana and Michigan State University in the U.S., and brings a strong STEM background in science and technology. Darren, an African American entrepreneur who attended the historic HBCU Talladega College, brings decades of business-building experience and a commitment to economic empowerment in underrepresented communities.</p>
            <p>We are rooted in the African American experience, inspired by our love for Africa, and committed to building cross-cultural partnerships that unite Afro-Caribbean, Indo-Guyanese, African, and diaspora innovators.</p>
            <p><strong>We see talent everywhere. What’s missing are the pathways to opportunity. That’s what we build.</strong></p>
            <h2 className="text-2xl font-bold mt-8">Why We Exist</h2>
            <ul className="list-disc pl-6">
              <li>To ensure Black and Brown communities do not miss the opportunities of the digital age.</li>
              <li>To connect Africa, the Caribbean, and the diaspora in shared growth and innovation.</li>
              <li>To close the opportunity gap by making AI and tech skills accessible, relevant, and profitable.</li>
              <li>To give back to the regions that shaped us while creating pathways to generational wealth.</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8">What We Do</h2>
            <ul className="list-disc pl-6">
              <li>Deliver hands-on AI training for small businesses, youth, and public sector teams.</li>
              <li>Develop real estate and e-commerce tech platforms that stimulate local economies.</li>
              <li>Provide custom AI solutions for education, real estate, and enterprise.</li>
              <li>Build cross-Atlantic partnerships between Africa, the Caribbean, and the diaspora.</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8">Our Perspective</h2>
            <ul className="list-disc pl-6">
              <li><strong>Black-Owned & Diaspora-Led</strong> – Combining African American entrepreneurship with Guyanese-Caribbean insight.</li>
              <li><strong>Pan-African & Inclusive</strong> – Rooted in the global Black experience while embracing collaboration across all underrepresented communities.</li>
              <li><strong>Local Roots, Global Reach</strong> – Operating in the United States, Guyana, and South Africa, with expansion plans across Sub-Saharan Africa and the Caribbean.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
