"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import CubeIcon from "@/assets/img/workstreamsSection/icons/cube.svg";
import LightIcon from "@/assets/img/workstreamsSection/cardIcons/light.svg";
import ContentIcon from "@/assets/img/workstreamsSection/cardIcons/content.svg";
import LinkIcon from "@/assets/img/workstreamsSection/cardIcons/link.svg";
import SemrushIcon from "@/assets/img/brands/semrush.jpg";
import DeepGramIcon from "@/assets/img/brands/deepgram.jpg";

const staticData = [  
  {
    icon: LinkIcon,
    title: "Link Building",
    description:
      "Full service backlink campaigns to build domain authority and help your content rank in the most competitive searches.",
    highlightText: "20+ DR 60-90 backlinks per month",
    smallCopy: "Powered by experts from",
    images: [
      {
        src: SemrushIcon.src,
        alt: "Semrush",
        width: 98,
      },
      {
        src: DeepGramIcon.src,
        alt: "Deepgram",
        width: 98,
      },
    ],
  },
  {
    icon: LightIcon,
    title: "Social Media",
    description:
      "Build an audience by turning your thoughts and existing content into posts that drives engagement on every social platform.",
    highlightText: "Up to 5 posts per week",
  },
];

const DistributeSegment = () => {
  return (
    <div className="mt-10 lg:mt-16">
      <div className="flex items-center gap-5 lg:gap-12 relative -left-[3.1rem] mb-4 lg:mb-6">
        <Image
          src={CubeIcon}
          alt="Box"
          width={40}
          height={40}
          className="scale-[0.70] lg:scale-100 translate-x-[0.8rem] lg:translate-x-[0.08rem]"
        />
        <h4 className="font-kepler-std text-ui-blue text-2xl italic lg:text-[2.625rem]">
          Distribute
        </h4>
      </div>
      <motion.div
        className="ml-3 lg:ml-11 grid lg:grid-cols-2 gap-6 max-w-[58.25rem]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {staticData.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </motion.div>
    </div>
  );
};

export default DistributeSegment;
