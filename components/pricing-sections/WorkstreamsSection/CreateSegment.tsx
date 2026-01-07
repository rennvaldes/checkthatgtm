"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import MagicWandIcon from "@/assets/img/workstreamsSection/icons/magic-wand.svg";
import PenIcon from "@/assets/img/workstreamsSection/cardIcons/pen.svg";
import WorldIcon from "@/assets/img/workstreamsSection/cardIcons/world.svg";
import BookIcon from "@/assets/img/workstreamsSection/cardIcons/books.svg";
import AnimalzImage from "@/assets/img/brands/animalz.jpg";
import NerdWalletImage from "@/assets/img/brands/nerdwallet.svg";
import TCImage from "@/assets/img/brands/tech-crunch.svg";
import ClickUpImage from "@/assets/img/brands/clickup.jpg";
import G2Image from "@/assets/img/brands/g2.jpg";
import FanaticsImage from "@/assets/img/brands/fanatics.jpg";
import VerbatimImage from "@/assets/img/brands/verbatim.jpg";
import BIImage from "@/assets/img/brands/bi.jpg";
import RefreshIcon from "@/assets/img/workstreamsSection/cardIcons/refresh.svg";
import LightIcon from "@/assets/img/workstreamsSection/cardIcons/light.svg";
import SemrushIcon from "@/assets/img/brands/semrush.jpg";
import BardeenImage from "@/assets/img/brands/bardeen.svg";
import DeepGramIcon from "@/assets/img/brands/deepgram.jpg";


const staticData = [
  {
    icon: LightIcon,
    title: "AEO",
    description:
      "Track and increase citations and mentions in Google AI Overviews, Perplexity, ChatGPT, and Claude.",
    highlightText: "Increase referrals and mentions",
    smallCopy: "Powered by AI experts from",
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
      {
        src: BardeenImage.src,
        alt: "Bardeen",
        width: 40,
      },
    ],
  },
  {
    icon: PenIcon,
    title: "Editorial Content",
    description:
      "High-quality, expert-written content that drives organic growth and brand authority.",
    highlightText: "Daily content refreshes and publishing",
    smallCopy: "Powered by senior editors from",
    images: [
      {
        src: AnimalzImage.src,
        alt: "Animalz",
        width: 98,
      },
      {
        src: TCImage.src,
        alt: "Tech Crunch",
        width: 40,
      },
    ],
  },
  {
    icon: WorldIcon,
    title: "Programmatic SEO",
    description:
      "Data-driven content creation at scale to cover full topic clusters and capture long-tail search traffic.",
    highlightText: "Up to 3 page templates",
    smallCopy: "Powered by SEO leaders from",
    images: [
      {
        src: ClickUpImage.src,
        alt: "Click Up",
        width: 98,
      },
      {
        src: G2Image.src,
        alt: "G2",
        width: 40,
      },
      {
        src: FanaticsImage.src,
        alt: "Fanatics",
        width: 40,
      },
    ],
  },
  {
    icon: BookIcon,
    title: "Case Studies",
    description:
      "Create stories that closes deals with turnkey content creation from sourcing to interviewing to writing.",
    highlightText: "Up to 4 case studies per month",
    smallCopy: "Powered by Product marketing leaders from",
    images: [
      {
        src: VerbatimImage.src,
        alt: "Verbatim",
        width: 40,
      },
      {
        src: BIImage.src,
        alt: "Business Insider",
        width: 40,
      },
    ],
  },
  {
    icon: RefreshIcon,
    title: "Content Refresh",
    description:
      "Update and optimize stale content to boost rankings, drive more traffic, and stay competitive.",
    highlightText: "Up to 50,000 words per month",
  },
];

const ContentSegment = () => {
  return (
    <div className="mt-25">
      <div className="flex items-center gap-5 lg:gap-12 relative -left-[3.1rem] mb-4 lg:mb-6">
        <Image
          src={MagicWandIcon}
          alt="Magic Wand"
          width={40}
          height={40}
          className="scale-[0.70] lg:scale-100 translate-x-[0.8rem] lg:translate-x-[0.08rem]"
        />
        <h4 className="font-kepler-std text-ui-blue text-2xl italic lg:text-[2.625rem]">
          Content
        </h4>
      </div>
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
    </div>
  );
};

export default ContentSegment;
