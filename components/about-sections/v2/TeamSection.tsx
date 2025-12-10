"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Grid } from "@/components/home/grid/gridRoot";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/lib/shadcn/ui/carousel";
import KitButton from "@/components/ui/KitButton";
import ArrowRight from "@/components/icons/ArrowRight";
import Experts1Image from "@/assets/img/AboutSection/company_01.jpg";
import Experts2Image from "@/assets/img/AboutSection/company_02.jpg";
import Experts3Image from "@/assets/img/AboutSection/company_03.jpg";
import Experts4Image from "@/assets/img/AboutSection/company_04.jpg";
import expertsData from "@/components/pricing-sections/ExpertsSection/expertsData";
import MadronaLogo from "@/assets/img/v2/madrona-logo.png";
import HubSpotLogo from "@/assets/img/logos/v2/logo-hubspot.png";
import TeamMemberCard from "@/components/common/TeamMemberCard";
import Spacer from "@/components/common/Spacer";
import MarcelImage from "@/assets/img/AboutSection/marcel.png";
import DanielImage from "@/assets/img/AboutSection/daniellopes.png";
import AndiImage from "@/assets/img/AboutSection/andibailey.png";
import KyleImage from "@/assets/img/AboutSection/kyle.png";
import JasonImage from "@/assets/img/AboutSection/jason.png";
import GeorgeImage from "@/assets/img/AboutSection/georgehaikal.png";
import BridgetImage from "@/assets/img/AboutSection/bridgetmcgillivray.png";
import MatthewImage from "@/assets/img/AboutSection/matthewpanzarino.png";
import RenatoImage from "@/assets/img/AboutSection/renatovaldesolmos.png";


export default function TeamSection() {
  const CAROUSEL_IMAGES = [Experts1Image.src, Experts2Image.src, Experts3Image.src, Experts4Image.src];

  const leadership = [
    {
      name: "Marcel Santilli",
      description: "Co-Founder & CEO",
      picture: MarcelImage.src,
    },
    {
      name: "Daniel Lopes",
      description: "Co-Founder & CTO",
      picture: DanielImage.src,
    },
    {
      name: "Andi Bailey",
      description: "Head of Customer Operations",
      picture: AndiImage.src,
    },
    {
      name: "Kyle Gaudreau",
      description: "VP Customer Growth",
      picture: KyleImage.src,
    },
    {
      name: "Jason Gong",
      description: "VP, Growth",
      picture: JasonImage.src,
    },
    {
      name: "George Haikal",
      description: "Chief of Staff",
      picture: GeorgeImage.src,
    },
    {
      name: "Bridget McGillivray",
      description: "VP, Operations",
      picture: BridgetImage.src,
    },
    {
      name: "Matthew Panzarino",
      description: "Chief Content Officer",
      picture: MatthewImage.src,
    },
    {
      name: "Renato Valdés-Olmos",
      description: "Head of Design",
      picture: RenatoImage.src,
    },
  ];
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [carouselWall, setCarouselWall] = useState<"left" | "right" | undefined>();

  const handleCarouselWall = useCallback(() => {
    if (!carouselApi) return;

    const onSnapChange = () => {
      const canScrollLeft = carouselApi.canScrollPrev();
      const canScrollRight = carouselApi.canScrollNext();

      if (canScrollLeft && canScrollRight) {
        setCarouselWall(undefined);
      } else if (canScrollLeft) {
        setCarouselWall("right");
      } else if (canScrollRight) {
        setCarouselWall("left");
      } else {
        setCarouselWall(undefined);
      }
    };

    onSnapChange();
    carouselApi.on("select", onSnapChange);
    return () => {
      carouselApi.off("select", onSnapChange);
    };
  }, [carouselApi]);

  useEffect(handleCarouselWall, [handleCarouselWall]);
  
  // Investors grouped by firm to match the design
  const investorGroups: { firm: string; people: { name: string; role: string }[] }[] = [
    {
      firm: "Madrona",
      people: [
        { name: "Guillaume Cabane", role: "Co-Founder at HyperGrowth Partners" },
        { name: "Karan Mehandru", role: "Managing Director at Madrona" },
        { name: "Karim Atiyeh", role: "CTO at Ramp" },
        { name: "Jean-Denis Greze", role: "Prev CTO at Plaid" },
        { name: "Rachel Wolan", role: "CPO Webflow" },
        { name: "Carilu Dietrich", role: "Ex-CMO of Atlassian" },
        { name: "Noah Gale", role: "Co-founder Tribe AI" },
        { name: "Netto Farah", role: "CTO at Koala" },
        { name: "Aaron Lee", role: "CEO at Smith.ai" },
        { name: "Rajan Sheth", role: "CMO at Together AI" },
        { name: "Jean Lafleur", role: "COO at Airbyte" },
        { name: "Osman Javed", role: "Head of Marketing at Norm AI" },
        { name: "Henry Taylor", role: "Head of Marketing at Laravel" },
      ],
    },
  ];

  return (
    <section className="pt-[105.6px]">
      <Grid>
        {/* Label - 2 columns */}
        <div className="col-span-full md:col-span-2">
          <span className="text-muted-foreground text-sm">Team</span>
        </div>

        {/* Content - responsive: full -> 8 cols -> 10 cols */}
        <div className="col-span-full md:col-span-8 lg:col-span-10 flex flex-col mt-3 md:mt-0">
          {/* Title */}
          <h2 className="text-[20px] lg:text-2xl leading-[1.5] lg:leading-[1.25] tracking-[-0.06em] font-[520] text-foreground">
            We're a team of world-class operators
          </h2>

          {/* Subtitle */}
          <p className="text-[20px] lg:text-2xl leading-[1.5] lg:leading-[1.25] tracking-[-0.06em] font-normal text-muted-foreground">
            Fully remote
          </p>
        </div>
      </Grid>

      <div className="mt-8 overflow-x-clip">
        <div className="flex flex-col gap-6 lg:gap-10">
          <div className="relative w-screen -ml-[20px]">
            <div className="ml-[20px] md:ml-[clamp(20px,calc((100vw-1280px)/2+20px),20px)]">
              <Carousel
                className="bg-transparent"
                setApi={setCarouselApi}
                opts={{ align: "start", slidesToScroll: 1, startIndex: 0 }}
              >
                <CarouselContent className="md:ml-0">
                  {CAROUSEL_IMAGES.map((src, i) => (
                    <CarouselItem
                      key={`team-carousel-${i}`}
                      className="basis-auto first-of-type:pl-0"
                    >
                      <img
                        src={src}
                        alt={`team-${i}`}
                        className="h-48 md:h-[380px] lg:h-[471px] object-cover grayscale"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
          <Grid>
            <div className="col-span-full md:col-span-8 md:col-start-3">
              <div className="flex w-min gap-11">
                <KitButton
                  variant="secondary"
                  size="custom"
                  isDisabled={carouselWall === "left"}
                  onClick={() => carouselApi?.scrollPrev()}
                  className="disabled:text-ui-black/40 rounded-full px-3 py-3 lg:px-4 transition-all duration-200 hover:bg-ui-black/10 active:bg-ui-black/15 hover:-translate-y-0.5"
                >
                  <ArrowRight className="rotate-180 lg:w-8 lg:h-8" />
                </KitButton>
                <KitButton
                  variant="secondary"
                  size="custom"
                  isDisabled={carouselWall === "right"}
                  onClick={() => carouselApi?.scrollNext()}
                  className="disabled:text-ui-black/40 rounded-full px-3 py-3 lg:px-4 transition-all duration-200 hover:bg-ui-black/10 active:bg-ui-black/15 hover:-translate-y-0.5"
                >
                  <ArrowRight className="lg:w-8 lg:h-8" />
                </KitButton>
              </div>
            </div>
          </Grid>
        </div>
      </div>
      
      <Grid className="mt-[22.4px]">
        <div className="col-span-full md:col-span-8 md:col-start-3">
          <div className="h-16 sm:h-20 md:h-28 lg:h-[82px]" aria-hidden="true" />
          <h2 className="text-[20px] lg:text-2xl leading-[1.5] lg:leading-[1.25] tracking-[-0.06em] font-[520] text-foreground">
            Leadership
          </h2>
          <div className="mt-8 flex flex-col gap-4">
            {/* Featured founders - larger and highlighted */}
            <div className="flex flex-wrap gap-4">
              {leadership
                .filter((m) => m.name === "Marcel Santilli" || m.name === "Daniel Lopes")
                .map((m) => (
                  <TeamMemberCard
                    key={`leader-${m.name}`}
                    name={m.name}
                    title={m.description}
                    image={m.picture}
                    grayscale
                    wrapperClassName="w-[280px] md:w-[320px] lg:w-[360px]"
                    className="border-[0.5px] border-border bg-transparent"
                    imageAspectClass="aspect-[3/3]"
                    nameClassName="text-xl font-semibold text-[#141414] tracking-tighter"
                    titleClassName="text-sm mt-2.5 tracking-tighter leading-[1.25] max-w-[200px]"
                  />
                ))}
            </div>
            {/* Rest of leadership - smaller */}
            <div className="flex flex-wrap gap-4">
              {leadership
                .filter((m) => m.name !== "Marcel Santilli" && m.name !== "Daniel Lopes")
                .map((m) => (
                  <TeamMemberCard
                    key={`leader-${m.name}`}
                    name={m.name}
                    title={m.description}
                    image={m.picture}
                    grayscale
                    wrapperClassName="w-[132px] md:w-[152px] lg:w-[172px]"
                    className="border-[0.5px] border-border bg-transparent"
                    imageAspectClass="aspect-[4/3]"
                    nameClassName="text-base font-semibold text-[#141414] tracking-tighter"
                    titleClassName="text-xs mt-1.5 tracking-tight leading-[1.25]"
                  />
                ))}
            </div>
          </div>
              <div className="h-[114.8px]"></div>
              <h2 className="text-[20px] lg:text-2xl leading-[1.5] lg:leading-[1.25] tracking-[-0.06em] font-[520] text-foreground">
                Investors
              </h2>
              <div className="mt-8">
                <div className="flex flex-col gap-8">
                  {investorGroups.map((group) => (
                    <div key={`inv-group-${group.firm}`} className="w-full">
                      <div className="mb-6 grid grid-cols-4 gap-0">
                        {group.firm === "Madrona" ? (
                          <>
                            <div className="flex items-center gap-4">
                              <img src={(MadronaLogo as any).src} alt="Madrona" className="h-6 md:h-8" />
                            </div>
                            <div className="col-span-3 flex items-center">
                              <img src={(HubSpotLogo as any).src} alt="HubSpot" className="h-24 md:h-[120px] grayscale" />
                            </div>
                          </>
                        ) : (
                          <h4 className="text-primary-black text-3xl lg:text-5xl tracking-tighter font-semibold">
                            {group.firm}
                          </h4>
                        )}
                      </div>
                      <div className="grid grid-cols-4 gap-0 relative before:absolute before:top-0 before:inset-x-[calc(-50vw+50%)] before:h-[0.5px] before:bg-border after:absolute after:bottom-0 after:inset-x-[calc(-50vw+50%)] after:h-[0.5px] after:bg-border">
                        {/* Rows */}
                        {group.people.map((inv, idx) => (
                          <div
                            key={`inv-${group.firm}-${idx}`}
                            className="grid grid-cols-4 col-span-4"
                          >
                            <div className="flex items-center py-4 border-b-[0.5px] border-border">
                              <span className="text-sm font-semibold">{inv.name}</span>
                            </div>
                            <div className="flex items-center pl-5 py-4 border-b-[0.5px] border-border col-span-3">
                              <span className="text-sm">{inv.role}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
        </div>
      </Grid>
    </section>
  );
}