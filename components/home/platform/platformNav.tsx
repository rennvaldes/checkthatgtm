"use client";

import { a, useSpring } from "@react-spring/web";

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
        <a.span style={iconSpring} className="mr-2">
          →
        </a.span>
        <a.span style={textSpring}>{feature.title}</a.span>
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
    <aside className="hidden desktop:block w-[calc(5/26*100%)] shrink-0 sticky top-20 self-start mt-60 mb-44">
      <nav className="flex flex-col justify-center">
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
