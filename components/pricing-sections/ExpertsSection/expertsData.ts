/* Experts images */
import MarcelImage from "@/assets/img/expertsSection/marcelo-santilli.jpg";
import KyleImage from "@/assets/img/expertsSection/kyle-gaudreau.jpg";
import JasonImage from "@/assets/img/expertsSection/jason-gong.jpg";
import DavidImage from "@/assets/img/expertsSection/david-capone.jpg";
import JakubImage from "@/assets/img/expertsSection/jakub-rudnik.jpg";
import MaraImage from "@/assets/img/expertsSection/mara-leighton.jpg";
import StewartImage from "@/assets/img/expertsSection/stewart-mohammadi.jpg";
import MatthewImage from "@/assets/img/expertsSection/matthew-panzarino.jpg";
import KirklandImage from "@/assets/img/expertsSection/kirkland-gee.jpg";

/* Brands images desktop */
import DeepgramImage from "@/assets/img/brands/deepgram-small.jpg";
import ScaleImage from "@/assets/img/brands/scale-small.jpg";
import HomebaseImage from "@/assets/img/brands/homebase-small.jpg";
import TrayImage from "@/assets/img/brands/tray-small.jpg";
import BardeenImage from "@/assets/img/brands/bardeen-small.jpg";
import AffirmImage from "@/assets/img/brands/affirm-small.jpg";
import TripAdvisorImage from "@/assets/img/brands/tripadvisor-small.jpg";
import FanaticsImage from "@/assets/img/brands/fanatics-small.jpg";
import SoftrImage from "@/assets/img/brands/softr-small.jpg";
import G2Image from "@/assets/img/brands/g2-small.jpg";
import VerbatimImage from "@/assets/img/brands/verbatim-small.jpg";
import BusinessInsiderImage from "@/assets/img/brands/business-insider-small.jpg";
import NerdwalletImage from "@/assets/img/brands/nerdwallet-small.jpg";
import WorkatoImage from "@/assets/img/brands/workato-small.jpg";
import TechcrunchImage from "@/assets/img/brands/tech-crunch-small.jpg";
import ClickUpImage from "@/assets/img/brands/clickup-small.jpg";

/* Brands images mobile */
import DeepGramMobileImage from "@/assets/img/brands/deepgram-transparent.png";
import ScaleMobileImage from "@/assets/img/brands/scale-transparent.png";
import HomebaseMobileImage from "@/assets/img/brands/homebase-transparent.png";
import TrayMobileImage from "@/assets/img/brands/tray-transparent.png";
import BardeenMobileImage from "@/assets/img/brands/bardeen-transparent.png";
import AffirmMobileImage from "@/assets/img/brands/affirm-transparent.png";
import TripAdvisorMobileImage from "@/assets/img/brands/tripadvisor-transparent.png";
import FanaticsMobileImage from "@/assets/img/brands/fanatics-large-transparent.png";
import SoftrMobileImage from "@/assets/img/brands/softr-transparent.png";
import G2MobileImage from "@/assets/img/brands/g2-transparent.png";
import VerbatimMobileImage from "@/assets/img/brands/verbatim-transparent.png";
import BusinessInsiderMobileImage from "@/assets/img/brands/business-insider-transparent.png";
import NerdwalletMobileImage from "@/assets/img/brands/nerdwallet-transparent.png";
import WorkatoMobileImage from "@/assets/img/brands/workato-transparent.png";
import TechcrunchMobileImage from "@/assets/img/brands/tech-crunch-transparent.png";
import ClickUpMobileImage from "@/assets/img/brands/clickup-transparent.png";
import KiteImage from "@/assets/img/brands/kite-transparent.png";

export interface ExpertsData {
  name: string;
  description: string;
  picture: string;
  desktopImages: { src: string; alt: string; width: number; height: number }[];
  mobileImages: { src: string; alt: string; width: number; height: number }[];
}

const expertsData: ExpertsData[] = [
  {
    name: "Marcel Santilli",
    description: "Ex CMO of Deepgram, Scale AI",
    picture: MarcelImage.src,
    desktopImages: [
      {
        src: DeepgramImage.src,
        alt: "Deepgram",
        width: 56,
        height: 56,
      },
      {
        src: ScaleImage.src,
        alt: "Scale AI",
        width: 56,
        height: 56,
      },
    ],
    mobileImages: [
      {
        src: DeepGramMobileImage.src,
        alt: "Deepgram",
        width: 65,
        height: 18,
      },
      {
        src: ScaleMobileImage.src,
        alt: "Scale AI",
        width: 18,
        height: 18,
      },
    ],
  },
  {
    name: "Kyle Gaudreau",
    description: "VP Customer Growth",
    picture: KyleImage.src,
    desktopImages: [
      {
        src: HomebaseImage.src,
        alt: "Homebase",
        width: 56,
        height: 56,
      },
      {
        src: TrayImage.src,
        alt: "Tray",
        width: 56,
        height: 56,
      },
    ],
    mobileImages: [
      {
        src: HomebaseMobileImage.src,
        alt: "Homebase",
        width: 55,
        height: 16,
      },
      {
        src: TrayMobileImage.src,
        alt: "Tray",
        width: 49,
        height: 16,
      },
    ],
  },
  {
    name: "Jason Gong",
    description: "Ex YC Founder, Head of Growth at Bardeen",
    picture: JasonImage.src,
    desktopImages: [
      {
        src: AffirmImage.src,
        alt: "Affirm",
        width: 56,
        height: 56,
      },
      {
        src: BardeenImage.src,
        alt: "Bardeen",
        width: 56,
        height: 56,
      },
    ],
    mobileImages: [
      {
        src: AffirmMobileImage.src,
        alt: "Affirm",
        width: 32,
        height: 18,
      },
      {
        src: BardeenMobileImage.src,
        alt: "Bardeen",
        width: 18,
        height: 18,
      },
      {
        src: KiteImage.src,
        alt: "Kite",
        width: 18,
        height: 18,
      },

    ],
  },
  {
    name: "Jakub Rudnik",
    description: "Ex Content & SEO Softr, G2",
    picture: JakubImage.src,
    desktopImages: [
      {
        src: SoftrImage.src,
        alt: "Softr",
        width: 56,
        height: 56,
      },
      {
        src: G2Image.src,
        alt: "G2",
        width: 56,
        height: 56,
      },
    ],
    mobileImages: [
      {
        src: SoftrMobileImage.src,
        alt: "Softr",
        width: 32,
        height: 32,
      },
      {
        src: G2MobileImage.src,
        alt: "G2",
        width: 18,
        height: 18,
      },
    ],
  },
  {
    name: "Mara Leighton",
    description: "Ex Senior Reporter, Business Insider",
    picture: MaraImage.src,
    desktopImages: [
      {
        src: VerbatimImage.src,
        alt: "Verbatim",
        width: 56,
        height: 56,
      },
      {
        src: BusinessInsiderImage.src,
        alt: "Business Insider",
        width: 56,
        height: 56,
      },
    ],
    mobileImages: [
      {
        src: VerbatimMobileImage.src,
        alt: "Verbatim",
        width: 24,
        height: 24,
      },
      {
        src: BusinessInsiderMobileImage.src,
        alt: "Business Insider",
        width: 18,
        height: 18,
      },
    ],
  },
  {
    name: "Matthew Panzarino",
    description: "Ex Editor in Chief at Techcrunch",
    picture: MatthewImage.src,
    desktopImages: [
      {
        src: TechcrunchImage.src,
        alt: "Tech Crunch",
        width: 56,
        height: 56,
      },
    ],
    mobileImages: [
      {
        src: TechcrunchMobileImage.src,
        alt: "Tech Crunch",
        width: 24,
        height: 24,
      },
    ],
  },
  {
    name: "Kirkland Gee",
    description: "Ex SEO at ClickUp",
    picture: KirklandImage.src,
    desktopImages: [
      {
        src: ClickUpImage.src,
        alt: "ClickUp",
        width: 56,
        height: 56,
      },
    ],
    mobileImages: [
      {
        src: ClickUpMobileImage.src,
        alt: "ClickUp",
        width: 14,
        height: 14,
      },
    ],
  },
];

export default expertsData;
