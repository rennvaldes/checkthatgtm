"use client";

import React, { useCallback, useEffect, useState } from "react";
import ContentLayout from "@/components/layout/ContentLayout";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/lib/shadcn/ui/carousel";
import KitButton from "@/components/ui/KitButton";
import ArrowRight from "@/components/icons/ArrowRight";
import Experts1Image from "@/assets/img/AboutSection/experts-1.png";
import Experts2Image from "@/assets/img/AboutSection/experts-2.png";
import Experts3Image from "@/assets/img/AboutSection/experts-3.png";
import expertsData from "@/components/pricing-sections/ExpertsSection/expertsData";
import MadronaLogo from "@/assets/img/v2/madrona-logo.png";
import TeamMemberCard from "@/components/common/TeamMemberCard";
import Spacer from "@/components/common/Spacer";

export default function TeamSection() {
  const CAROUSEL_IMAGES = [Experts1Image.src, Experts2Image.src, Experts3Image.src];

  const leadership = expertsData;
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
    <section>
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div className="text-sm text-[#303030]">Team</div>}
          className="items-start"
          leftClassName="md:text-base"
          rightContent={
            <div className="flex flex-col">
              <div className="mb-6 xl:mb-10">
                <h2 className="text-black text-3xl md:text-5xl tracking-tighter">
                  We’re a team of world-class operators
                  <br />
                  <span className="text-primary-gray">Fully remote</span>
                </h2>
              </div>

              <div className="flex flex-col gap-6 lg:gap-10 lg:max-w-[1920px]">
                <Carousel
                  className="bg-transparent"
                  setApi={setCarouselApi}
                  opts={{ align: "start", slidesToScroll: 1, startIndex: 0 }}
                >
                  <CarouselContent>
                    {CAROUSEL_IMAGES.map((src, i) => (
                      <CarouselItem
                        key={`team-carousel-${i}`}
                        className="basis-auto first-of-type:pl-4 lg:pl-8"
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
                <div className="flex w-min gap-11 lg:gap-7">
                  <KitButton
                    variant="secondary"
                    size="custom"
                    isDisabled={carouselWall === "left"}
                    onClick={() => carouselApi?.scrollPrev()}
                    className="disabled:text-ui-black/40 lg:px-4"
                  >
                    <ArrowRight className="rotate-180 lg:w-8 lg:h-8" />
                  </KitButton>
                  <KitButton
                    variant="secondary"
                    size="custom"
                    isDisabled={carouselWall === "right"}
                    onClick={() => carouselApi?.scrollNext()}
                    className="disabled:text-ui-black/40 lg:px-4"
                  >
                    <ArrowRight className="lg:w-8 lg:h-8" />
                  </KitButton>
                </div>
              </div>
              <Spacer size="d164" />
              <div className="flex flex-col gap-6">
                <h3 className="text-primary-black text-3xl md:text-5xl tracking-tighter font-medium">Leadership</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 xl:gap-y-10">
                  {leadership.map((m) => (
                    <TeamMemberCard
                      key={`leader-${m.name}`}
                      name={m.name}
                      title={m.description}
                      image={m.picture}
                      grayscale
                      wrapperClassName="w-full"
                      className="border-primary-gray"
                    />
                  ))}
                </div>
              </div>
              <Spacer size="d164" />
              <div className="flex flex-col gap-6 xl:gap-10">
                <h3 className="text-primary-black text-3xl md:text-5xl tracking-tighter font-medium">Investors</h3>
                <div className="flex flex-col gap-8">
                  {investorGroups.map((group) => (
                    <div key={`inv-group-${group.firm}`} className="w-full">
                      <div className="mb-2">
                        {group.firm === "Madrona" ? (
                          <img src={(MadronaLogo as any).src} alt="Madrona" className="h-8 md:h-10" />
                        ) : (
                          <h4 className="text-primary-black text-3xl md:text-5xl tracking-tighter font-semibold">
                            {group.firm}
                          </h4>
                        )}
                      </div>
                      <div className="divide-y divide-primary-gray border-b border-primary-gray">
                        {group.people.map((inv, idx) => (
                          <div
                            key={`inv-${group.firm}-${idx}`}
                            className="pt-3 pb-1 grid grid-cols-1 md:grid-cols-2 items-center gap-x-12 md:gap-x-16"
                          >
                            <div className="text-primary-black text-xl">{inv.name}</div>
                            <div className="text-primary-black text-xl font-light">{inv.role}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}