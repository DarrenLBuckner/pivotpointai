import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a237e] via-[#d3e3fd] to-[#e3f2fd] text-[#1a237e]">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      {/* Use Next.js Link for navigation */}
      <Link href="/" passHref>
        <span className="bg-[#1a237e] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#4e4f4f] transition cursor-pointer">Go Home</span>
      </Link>
    </div>
  );
}
