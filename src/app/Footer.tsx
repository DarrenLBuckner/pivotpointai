import Link from 'next/link';
import CookieSettings from '../components/CookieSettings';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a237e] text-white py-6 px-4 mt-16 flex flex-col items-center shadow-inner">
      <div className="font-bold text-lg mb-2 tracking-wide">PivotPoint AI</div>
      <div className="text-sm mb-2 opacity-80">Empowering SMEs in the Caribbean & Africa with AI</div>
      <div className="flex gap-2 mb-2 flex-wrap justify-center text-sm">
        <a href="mailto:info@pivotpointai.io" className="hover:underline">info@pivotpointai.io</a>
        <span className="opacity-50">|</span>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <span className="opacity-50">|</span>
        <Link href="/ai-toolbox" className="hover:underline">AI Toolbox</Link>
        <span className="opacity-50">|</span>
        <Link href="/privacy" className="hover:underline">Privacy</Link>
        <span className="opacity-50">|</span>
        <Link href="/terms" className="hover:underline">Terms</Link>
        <span className="opacity-50">|</span>
        <Link href="/cookies" className="hover:underline">Cookies</Link>
        <span className="opacity-50">|</span>
        <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
        <span className="opacity-50">|</span>
        <Link href="/accessibility" className="hover:underline">Accessibility</Link>
        <span className="opacity-50">|</span>
        <CookieSettings />
      </div>
      <div className="text-xs opacity-60">&copy; {new Date().getFullYear()} PivotPoint AI. All rights reserved.</div>
    </footer>
  );
}
