import Image from "next/image";

export default function VisualHero() {
  return (
    <section className="w-screen border-t-[0.5px] border-b-[0.5px] border-border">
      <div className="p-6 relative">
        {/* Desktop image */}
        <div className="hidden md:block relative w-full h-auto">
          <Image
            src="/img/about/company-hero-desktop-2x.webp"
            alt="GrowthX team"
            width={3376}
            height={1680}
            className="w-full h-auto"
            priority
          />
          <div className="absolute inset-0 flex items-center px-6 lg:px-12">
            <h2 className="text-[clamp(50px,50px+(78-50)*(100vw-375px)/(1112-375),78px)] leading-[0.89] tracking-[-0.07em] font-regular text-white max-w-[800px]">
              We&apos;re a team of
              <br />
              world-class operators.
              <br />
              Fully remote.
            </h2>
          </div>
        </div>

        {/* Mobile image */}
        <div className="md:hidden relative w-full h-auto">
          <Image
            src="/img/about/company-hero-mobile-2x.webp"
            alt="GrowthX team"
            width={740}
            height={740}
            className="w-full h-auto"
            priority
          />
          <div className="absolute inset-0 flex items-center px-6">
            <h2 className="text-[clamp(50px,50px+(78-50)*(100vw-375px)/(1112-375),78px)] leading-[0.89] tracking-[-0.07em] font-regular text-white max-w-[400px]">
              We&apos;re a team of
              <br />
              world-class operators.
              <br />
              Fully remote.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
