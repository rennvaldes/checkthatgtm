"use client";

import { animated, useSpring } from "@react-spring/web";

interface Feature {
  id: string;
  title: string;
  description: string;
  visual: {
    type: string;
    items: any;
  };
}

interface PlatformNavProps {
  features: Feature[];
  activeFeature: string;
  onFeatureClick: (featureId: string) => void;
}

function NavItem({
  feature,
  isActive,
  onClick,
}: {
  feature: Feature;
  isActive: boolean;
  onClick: () => void;
}) {
  const textSpring = useSpring({
    opacity: isActive ? 1 : 0.3,
    transform: isActive ? "translateX(0px)" : "translateX(-20px)",
    config: { tension: 300, friction: 35 },
  });

  const iconSpring = useSpring({
    opacity: isActive ? 1 : 0,
    transform: isActive ? "translateX(0px)" : "translateX(-8px)",
    config: { tension: 300, friction: 35 },
  });

  return (
    <li>
      <button
        onClick={onClick}
        className="text-left w-full text-base hover:opacity-100 transition-opacity flex items-center"
      >
        <animated.span style={iconSpring} className="mr-2">
          →
        </animated.span>
        <animated.span style={textSpring}>{feature.title}</animated.span>
      </button>
    </li>
  );
}

export function PlatformNav({
  features,
  activeFeature,
  onFeatureClick,
}: PlatformNavProps) {
  return (
    <aside className="hidden md:block col-span-2 sticky top-8 self-start h-full">
      <nav className="h-full flex flex-col justify-center">
        <ul className="space-y-[14px]">
          {features.map((feature) => (
            <NavItem
              key={feature.id}
              feature={feature}
              isActive={activeFeature === feature.id}
              onClick={() => onFeatureClick(feature.id)}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
