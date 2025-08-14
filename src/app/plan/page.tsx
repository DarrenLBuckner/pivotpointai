import React from "react";

export default function PlanComingSoon() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden bg-[#f5f7fa]">
      {/* Full AI Robot Woman Background */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/images/AI_robot_woman.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.25,
        }}
      ></div>
      <main className="w-full max-w-xl flex flex-col gap-10 items-center relative z-10 text-[#1a237e]">
        <section className="w-full bg-white/80 rounded-xl shadow-lg p-10 border border-[#d3e3fd] mt-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg tracking-tight">Coming Soon</h1>
          <p className="text-lg mb-4">Our 30-Day AI Implementation Roadmap will be available soon!</p>
          <p className="text-[#4e4f4f]">Stay tuned for practical steps to accelerate your business with AI.</p>
        </section>
      </main>
    </div>
  );
}
