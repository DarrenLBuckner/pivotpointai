"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 shadow-lg py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50 backdrop-blur-md">
      <div className="font-extrabold text-2xl text-[#1a237e] tracking-tight drop-shadow">PivotPoint AI</div>
      <div className="flex gap-6 text-[#1a237e] font-semibold text-base">
        <Link href="/">Home</Link>
  <Link href="/services">Services</Link>
  <Link href="/mentorship">Mentorship</Link>
  <Link href="/blog">Blog</Link>
  <Link href="/about">About</Link>
  <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
