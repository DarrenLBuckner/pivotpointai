"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 shadow-lg py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
        <Image 
          src="/images/pivotpointlogo.jpg" 
          alt="PivotPoint AI Logo" 
          width={45} 
          height={45} 
          className="rounded-lg shadow-md object-cover"
          priority
        />
        <div className="font-extrabold text-xl sm:text-2xl text-[#1a237e] tracking-tight drop-shadow">
          <span className="hidden sm:inline">PivotPoint AI</span>
          <span className="sm:hidden">PivotPoint</span>
        </div>
      </Link>
      <div className="flex gap-3 sm:gap-6 text-[#1a237e] font-semibold text-sm sm:text-base">
        <Link href="/" className="hover:text-[#1a237e]/80 transition-colors">Home</Link>
        <Link href="/services" className="hover:text-[#1a237e]/80 transition-colors">Services</Link>
        <Link href="/mentorship" className="hover:text-[#1a237e]/80 transition-colors hidden md:inline">Mentorship</Link>
        <Link href="/blog" className="hover:text-[#1a237e]/80 transition-colors">Blog</Link>
        <Link href="/about" className="hover:text-[#1a237e]/80 transition-colors hidden sm:inline">About</Link>
        <Link href="/contact" className="hover:text-[#1a237e]/80 transition-colors">Contact</Link>
      </div>
    </nav>
  );
}
