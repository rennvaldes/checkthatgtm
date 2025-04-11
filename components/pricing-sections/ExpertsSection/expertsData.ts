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
    description: "Senior Director at Homebase",
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
    name: "David Capone",
    description: "Ex Director of SEO TripAdvisor, Fanatics",
    picture: DavidImage.src,
    desktopImages: [
      {
        src: TripAdvisorImage.src,
        alt: "TripAdvisor",
        width: 56,
        height: 56,
      },
      {
        src: FanaticsImage.src,
        alt: "Fanatics",
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
    name: "Stewart Mohammadi",
    description: "Ex Head of SEO Nerdwallet, Workato",
    picture: StewartImage.src,
    desktopImages: [
      {
        src: NerdwalletImage.src,
        alt: "Nerdwallet",
        width: 56,
        height: 56,
      },
      {
        src: WorkatoImage.src,
        alt: "Workato",
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
    name: "Matthew Panzarino",
    description: "Ex Editor in Chief at Techcrunch",
    picture: MatthewImage.src,
    desktopImages: [
      {
        src: TechcrunchImage.src,
        alt: "Deepgram",
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
        src: DeepGramMobileImage.src,
        alt: "Deepgram",
        width: 65,
        height: 18,
      },
    ],
  },
];

export default expertsData;
