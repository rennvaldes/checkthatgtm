"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { useIsMobile, usePrefersReducedMotion } from "@/lib/hooks";
import StarIcon from "@/assets/img/workstreamsSection/icons/star.svg";
import RefreshIcon from "@/assets/img/workstreamsSection/cardIcons/refresh.svg";
import ShieldIcon from "@/assets/img/workstreamsSection/cardIcons/shield.svg";
import ChartIcon from "@/assets/img/workstreamsSection/cardIcons/chart.svg";
import TrayImage from "@/assets/img/brands/tray.jpg";
import BardeenImage from "@/assets/img/brands/bardeen.svg";
import YImage from "@/assets/img/brands/y.jpg";
import DBIcon from "@/assets/img/workstreamsSection/cardIcons/database.svg";
import BorderChartIcon from "@/assets/img/workstreamsSection/cardIcons/border-chart.svg";
import BasecampImage from "@/assets/img/brands/basecamp.jpg";
import IFTTTImage from "@/assets/img/brands/ifttt.jpg";
import HomebaseImage from "@/assets/img/brands/homebase.jpg";
import AffirmImage from "@/assets/img/brands/affirm.jpg";

const staticData = [
  {
    icon: BorderChartIcon,
    title: "Paid Media",
    description:
      "Highly efficient campaigns adapted to your audience and optimizes with AI creatives.",
    highlightText: "Up to $250k in monthly budget",
    smallCopy: "Powered by growth marketers from",
    images: [
      {
        src: HomebaseImage.src,
        alt: "Homebase",
        width: 98,
      },
      {
        src: AffirmImage.src,
        alt: "Affirm",
        width: 98,
      },
    ],
    className: "h-fit",
  },
  {
    icon: ChartIcon,
    title: "Conversion rate optimization",
    description:
      "Tighten messaging, design, and UX to turn more visitors into leads and customers.",
    highlightText: "Up to 5 ongoing experiments",
    smallCopy: "Powered by heads of growth from",
    images: [
      {
        src: TrayImage.src,
        alt: "Tray AI",
        width: 98,
      },
      {
        src: BardeenImage.src,
        alt: "Bardeen",
        width: 40,
      },
      {
        src: YImage.src,
        alt: "Y",
        width: 40,
      },
    ],
  },
  {
    icon: ShieldIcon,
    title: "Gated Content",
    description:
      "Offer high-value content behind forms to capture qualified leads.",
    highlightText: "Up to 4 per month",
  },
  {
    icon: BorderChartIcon,
    title: "Outbound Sales",
    description:
      "Direct outreach to convert warm leads or cold prospects into paying customers.",
    highlightText: "Up to 3 concurrent campaigns",
    className: "h-fit",
  },
];

const ConvertSegment = () => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldAnimate = !isMobile && !prefersReducedMotion;

  return (
    <div className="mt-10 lg:mt-16">
      <div className="flex items-center gap-5 lg:gap-12 relative -left-[3.1rem] mb-4 lg:mb-6">
        <Image
          src={StarIcon}
          alt="Box"
          width={40}
          height={40}
          className="scale-[0.70] lg:scale-100 translate-x-[0.8rem] lg:translate-x-[0.08rem]"
        />
        <h4 className="font-kepler-std text-ui-blue text-2xl italic lg:text-[2.625rem]">
          Convert
        </h4>
      </div>
      {shouldAnimate ? (
        <motion.div
          className="ml-3 lg:ml-11 grid lg:grid-cols-2 gap-6 max-w-233"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {staticData.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </motion.div>
      ) : (
        <div className="ml-3 lg:ml-11 grid lg:grid-cols-2 gap-6 max-w-233">
          {staticData.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ConvertSegment;
