"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 shadow-lg py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50 backdrop-blur-md">
      {/* Logo - Much Larger for Visibility */}
      <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
        <Image 
          src="/images/pivotpointlogo.jpg" 
          alt="PivotPoint AI - Return to Homepage" 
          width={80} 
          height={80} 
          className="rounded-lg shadow-md object-cover"
          priority
        />
      </Link>

      {/* Desktop Menu - Hidden on Mobile */}
      <div className="hidden lg:flex gap-6 text-[#1a237e] font-semibold text-base">
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

      {/* Mobile Menu Button - Shown on Mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden flex flex-col gap-1 p-2"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-[#1a237e] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#1a237e] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#1a237e] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
          <div className="flex flex-col py-4 px-6 gap-4">
            <Link 
              href="/" 
              className="text-[#1a237e] font-semibold hover:text-[#1a237e]/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-[#1a237e] font-semibold hover:text-[#1a237e]/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/mentorship" 
              className="text-[#1a237e] font-semibold hover:text-[#1a237e]/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mentorship
            </Link>
            <Link
              href="/ai-toolbox"
              className="inline-flex items-center rounded-full px-3 py-2 text-sm font-medium bg-[#0891b2] text-white hover:opacity-90 transition w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Toolbox
            </Link>
            <Link 
              href="/blog" 
              className="text-[#1a237e] font-semibold hover:text-[#1a237e]/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="text-[#1a237e] font-semibold hover:text-[#1a237e]/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-[#1a237e] font-semibold hover:text-[#1a237e]/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
