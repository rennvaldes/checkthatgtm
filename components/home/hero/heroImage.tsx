"use client";

import Image from "next/image";
import { GridRoot } from "@/components/home/grid/gridRoot";

export function HeroImage() {
  return (
    <section data-section="hero-video" className="w-full border-t border-b border-border py-5 bg-white relative z-10">
      <div className="w-full h-[400px] tablet:h-[500px] desktop:h-[600px] relative overflow-hidden">
        <Image
          src="/images/hero-video.jpg"
          alt="CheckThat Platform"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 25%' }}
          priority
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <button className="pointer-events-auto bg-white/90 backdrop-blur-sm text-black px-6 py-3 rounded-full text-[14px] font-bold inline-flex items-center gap-3 h-12 shadow-lg hover:bg-white transition-colors">
            <svg 
              className="w-4 h-4 text-black" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Intro
          </button>
        </div>
      </div>
    </section>
  );
}

