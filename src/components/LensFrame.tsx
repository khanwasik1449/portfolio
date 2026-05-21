"use client";

import Image from "next/image";

export default function LensFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative flex items-center justify-center mb-6">
      {/* Outer ring */}
      <div className="absolute w-[180px] h-[180px] rounded-full border-[3px] border-[#333]">
        <div className="absolute inset-1 rounded-full border border-[#555]" />
      </div>

      {/* Inner ring with IT specs */}
      <div className="absolute w-[160px] h-[160px] rounded-full border-[2px] border-[#444] flex items-center justify-center">
        <span className="text-[7px] text-[#888] tracking-[0.2em] font-mono absolute w-full text-center" style={{ top: "8px" }}>
          v2.0.0 · PRODUCTION
        </span>
        <span className="text-[7px] text-[#888] tracking-[0.2em] font-mono absolute w-full text-center" style={{ bottom: "8px" }}>
          AUTOMATION ENGINEER
        </span>
      </div>

      {/* Circuit trace ring */}
      <svg
        className="absolute w-[160px] h-[160px]"
        viewBox="0 0 100 100"
        fill="none"
      >
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 50 + 44 * Math.cos(rad);
          const y1 = 50 + 44 * Math.sin(rad);
          const x2 = 50 + 48 * Math.cos(rad);
          const y2 = 50 + 48 * Math.sin(rad);
          const turnRad = ((angle + 15) * Math.PI) / 180;
          const tx = 50 + 46 * Math.cos(turnRad);
          const ty = 50 + 46 * Math.sin(turnRad);
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2a2a2a" strokeWidth="0.8" />
              <circle cx={x2} cy={y2} r="1" fill="#444" />
              <circle cx={tx} cy={ty} r="0.6" fill="#333" />
            </g>
          );
        })}
        {/* Horizontal and vertical bus lines */}
        <line x1="10" y1="50" x2="25" y2="50" stroke="#2a2a2a" strokeWidth="0.5" />
        <line x1="75" y1="50" x2="90" y2="50" stroke="#2a2a2a" strokeWidth="0.5" />
        <line x1="50" y1="10" x2="50" y2="25" stroke="#2a2a2a" strokeWidth="0.5" />
        <line x1="50" y1="75" x2="50" y2="90" stroke="#2a2a2a" strokeWidth="0.5" />
      </svg>

      {/* Image */}
      <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-black z-10">
        <Image
          src={src}
          alt={alt}
          width={120}
          height={120}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Scanline glare overlay */}
      <div className="absolute w-[120px] h-[120px] rounded-full overflow-hidden z-20 pointer-events-none mix-blend-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        <div className="absolute top-[15%] left-[-10px] w-[60px] h-[1px] bg-neon-green/10 rotate-[-20deg]" />
        <div className="absolute bottom-[25%] right-[-5px] w-[40px] h-[1px] bg-neon-cyan/10 rotate-[15deg]" />
      </div>
    </div>
  );
}
