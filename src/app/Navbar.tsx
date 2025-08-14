"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 shadow-lg py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50 backdrop-blur-md">
      <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
        <Image 
          src="/images/pivotpointlogo.jpg" 
          alt="PivotPoint AI - Return to Homepage" 
          width={55} 
          height={55} 
          className="rounded-lg shadow-md object-cover"
          priority
        />
      </Link>
      <div className="flex gap-6 text-[#1a237e] font-semibold text-base">
        <Link href="/" className="hover:text-[#1a237e]/80 transition-colors">Home</Link>
        <Link href="/services" className="hover:text-[#1a237e]/80 transition-colors">Services</Link>
        <Link href="/mentorship" className="hover:text-[#1a237e]/80 transition-colors">Mentorship</Link>
        
        {/* AI Toolbox pill between Mentorship and Blog */}
        <Link
          href="/ai-toolbox"
          className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-[#0891b2] text-white hover:opacity-90 transition"
          aria-label="AI Toolbox"
        >
          AI Toolbox
        </Link>
        
        <Link href="/blog" className="hover:text-[#1a237e]/80 transition-colors">Blog</Link>
        <Link href="/about" className="hover:text-[#1a237e]/80 transition-colors">About</Link>
        <Link href="/contact" className="hover:text-[#1a237e]/80 transition-colors">Contact</Link>
      </div>
    </nav>
  );
}
