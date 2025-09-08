import Spacer from "@/components/common/Spacer";
import ContentLayout from "@/components/layout/ContentLayout";
import ArrowRight16 from "@/components/icons/ArrowRight16";

export default function HeroSectionv2() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftClassName="mt-4"
          leftContent={<div>Company</div>}
          rightContent={
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-[96px] tracking-tighter">
                <span className="text-primary-black">Reimagining</span>
                <br />
                <span className="text-primary-gray">Service as Software</span>
              </h1>
            </div>
          }
          description="High-quality content production in 8 weeks. Publishing 5 articles per week across multiple topic categories."
          descriptionClassName="mt-12 text-lg lg:text-2xl max-w-[520px]"
          ctaButton={{
            text: "Join our Mission",
            href: "/book-demo",
            size: "md",
            icon: <ArrowRight16 className="w-4 h-4" />,
            className: "mt-5",
          }}
        />
      </div>
    </section>
  );
}
