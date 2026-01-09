"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface DetectedIcon {
  id: string;
  icon: string;
  name: string;
  x: number;
  y: number;
  angle: number;
  timestamp: number;
}

const icons = [
  { name: "salesforce", src: "/images/salesforce.png" },
  { name: "hubspot", src: "/images/hubspot.png" },
  { name: "slack", src: "/images/slack.png" },
  { name: "stripe", src: "/images/stripe.png" },
  { name: "zoom", src: "/images/zoom.png" },
];

export function RadarGrid() {
  const [detectedIcons, setDetectedIcons] = useState<DetectedIcon[]>([]);
  const [beamRotation, setBeamRotation] = useState(0);

  // Rotate beam continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setBeamRotation((prev) => (prev + 1) % 360);
    }, 30); // Smooth rotation

    return () => clearInterval(interval);
  }, []);

  // Detect icons at random intervals
  useEffect(() => {
    const detectIcon = () => {
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      const angle = Math.random() * Math.PI * 2;
      const distance = 0.3 + Math.random() * 0.6; // Between 30% and 90% of radius
      
      const x = 50 + Math.cos(angle) * distance * 50;
      const y = 50 + Math.sin(angle) * distance * 50;
      const angleDegrees = (angle * 180 / Math.PI + 90) % 360; // Convert to degrees, offset by 90

      const newIcon: DetectedIcon = {
        id: `${Date.now()}-${Math.random()}`,
        icon: randomIcon.src,
        name: randomIcon.name,
        x,
        y,
        angle: angleDegrees,
        timestamp: Date.now(),
      };

      setDetectedIcons((prev) => [...prev, newIcon]);

      // Remove icon after 12 seconds
      setTimeout(() => {
        setDetectedIcons((prev) => prev.filter((icon) => icon.id !== newIcon.id));
      }, 12000);
    };

    // Detect new icon every 2-4 seconds
    const scheduleNext = () => {
      const delay = 2000 + Math.random() * 2000;
      setTimeout(() => {
        detectIcon();
        scheduleNext();
      }, delay);
    };

    scheduleNext();
  }, []);

  // Helper function to check if beam is near icon
  const isBeamNearIcon = (iconAngle: number, beamAngle: number) => {
    const beamWidth = 45; // 1/8th of circle = 45 degrees
    let diff = Math.abs(beamAngle - iconAngle);
    if (diff > 180) diff = 360 - diff;
    return diff < beamWidth;
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Radar Container with 3D perspective - wide background graphic */}
      <div 
        className="aspect-square w-[120vw] max-w-[1400px]"
        style={{
          perspective: "1000px",
          perspectiveOrigin: "50% 50%",
        }}
      >
          {/* 3D Radar surface */}
          <div 
            className="absolute inset-0"
            style={{
              transform: "rotateX(60deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* SVG Radar with filters (matching hero style) */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 700 700"
              fill="none"
            >
              <defs>
                {/* Inner shadow filters for concentric circles - matching hero style */}
                <filter id="innerShadow1" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="80" result="blur" />
                  <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
                  <feFlood floodColor="#8CE58C" floodOpacity="0.6" result="color" />
                  <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
                  <feComposite in="shadow" in2="SourceAlpha" operator="in" result="innerShadow" />
                  <feMerge>
                    <feMergeNode in="SourceGraphic" />
                    <feMergeNode in="innerShadow" />
                  </feMerge>
                </filter>
                <filter id="innerShadow2" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="60" result="blur" />
                  <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
                  <feFlood floodColor="#8CE58C" floodOpacity="0.5" result="color" />
                  <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
                  <feComposite in="shadow" in2="SourceAlpha" operator="in" result="innerShadow" />
                  <feMerge>
                    <feMergeNode in="SourceGraphic" />
                    <feMergeNode in="innerShadow" />
                  </feMerge>
                </filter>
                <filter id="innerShadow3" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="40" result="blur" />
                  <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
                  <feFlood floodColor="#8CE58C" floodOpacity="0.4" result="color" />
                  <feComposite in="color" in2="offsetBlur" operator="in" result="shadow" />
                  <feComposite in="shadow" in2="SourceAlpha" operator="in" result="innerShadow" />
                  <feMerge>
                    <feMergeNode in="SourceGraphic" />
                    <feMergeNode in="innerShadow" />
                  </feMerge>
                </filter>
                <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0ABF53" stopOpacity="0" />
                  <stop offset="50%" stopColor="#0ABF53" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0ABF53" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Concentric circles with green gradient inner shadows */}
              {[
                { scale: 0.2, filter: "innerShadow3", opacity: 0.6 },
                { scale: 0.4, filter: "innerShadow2", opacity: 0.5 },
                { scale: 0.6, filter: "innerShadow2", opacity: 0.4 },
                { scale: 0.8, filter: "innerShadow1", opacity: 0.3 },
                { scale: 1.0, filter: "innerShadow1", opacity: 0.2 },
              ].map((circle, i) => (
                <circle
                  key={i}
                  cx="350"
                  cy="350"
                  r={350 * circle.scale}
                  fill="#F9FAFA"
                  fillOpacity="0.01"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeOpacity={0.15 - i * 0.02}
                  filter={`url(#${circle.filter})`}
                  opacity={circle.opacity}
                />
              ))}

              {/* Grid lines */}
              <g opacity="0.15">
                <line x1="350" y1="0" x2="350" y2="700" stroke="currentColor" strokeWidth="1" />
                <line x1="0" y1="350" x2="700" y2="350" stroke="currentColor" strokeWidth="1" />
                <line x1="100" y1="100" x2="600" y2="600" stroke="currentColor" strokeWidth="1" />
                <line x1="600" y1="100" x2="100" y2="600" stroke="currentColor" strokeWidth="1" />
              </g>

              {/* Rotating beam - pie slice (1/8 of circle = 45 degrees) */}
              <g transform={`rotate(${beamRotation} 350 350)`}>
                {/* Main pie slice - blurred */}
                <path
                  d="M 350 350 L 700 350 A 350 350 0 0 0 597.5 102.5 Z"
                  fill="#0ABF53"
                  opacity="0.3"
                  filter="blur(4px)"
                />
                {/* Brighter inner pie */}
                <path
                  d="M 350 350 L 700 350 A 350 350 0 0 0 597.5 102.5 Z"
                  fill="#0ABF53"
                  opacity="0.25"
                />
                {/* Leading edge glow */}
                <line
                  x1="350"
                  y1="350"
                  x2="700"
                  y2="350"
                  stroke="#0ABF53"
                  strokeWidth="3"
                  opacity="0.9"
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 10px rgba(10, 191, 83, 1))"
                />
              </g>

              {/* Center dot */}
              <circle
                cx="350"
                cy="350"
                r="6"
                fill="#0ABF53"
                filter="drop-shadow(0 0 10px rgba(10, 191, 83, 0.8))"
              />
            </svg>

            {/* Detected icons */}
            {detectedIcons.map((icon) => {
              const isLit = isBeamNearIcon(icon.angle, beamRotation);
              
              return (
                <div
                  key={icon.id}
                  className="absolute transition-all duration-150"
                  style={{
                    left: `${icon.x}%`,
                    top: `${icon.y}%`,
                    transform: "rotateX(-60deg) translateZ(20px) translate(-50%, -50%)",
                    transformStyle: "preserve-3d",
                    opacity: isLit ? 1 : 0,
                  }}
                >
                  {/* Pulse rings - only when lit */}
                  {isLit && (
                    <>
                      <div className="absolute inset-0 -m-2 rounded-xl border-2 border-[#0ABF53] animate-ping opacity-75" />
                      <div className="absolute inset-0 -m-2 rounded-xl bg-[#0ABF53]/30" />
                    </>
                  )}
                  
                  {/* Icon at reduced size */}
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={icon.icon}
                      alt={icon.name}
                      width={32}
                      height={32}
                      className="object-contain drop-shadow-lg"
                      unoptimized
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  );
}

