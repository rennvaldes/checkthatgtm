import KitButton from "@/components/ui/KitButton";

const staticData = {
  lead: "Starting at $9,000 per month",
  highlightedWord: "Outcomes",
  title: "not tools",
  description:
    "We build scalable growth engines that generate demand.  From content creation and SEO to link building and analytics, a GrowthX subscription gives you access to our full suite of workstreams. You choose how to budget each month based on your business needs.",
  disclaimer: "Typical engagements range from $9,000 to $20,000 USD/month.",
  buttonText: "Book a call",
};

function PromoCard() {
  return (
    <div className="bg-[#20233A] w-full max-w-[36.6875rem] px-4 lg:px-12 h-full lg:min-h-[32.5rem]">
      <div className="flex items-center lg:justify-center pt-6 pb-6 lg:pb-4 lg:pt-10">
        <span className="text-[#FDFDFF] text-sm border border-[#FDFDFF] rounded-[2rem] py-1 px-4 inline-block lg:mx-auto lg:text-lg">
          {staticData.lead}
        </span>
      </div>
      <h3 className="font-clash-display mx-auto text-left text-[#FDFDFF] text-[1.5rem] font-medium leading-[40px] lg:text-[2.5rem] lg:leading-[77px] pb-4 lg:pb-2">
        <span className="font-kepler-std text-[#33FF9D] text-[2rem] italic lg:text-[3.375rem]">
          {staticData.highlightedWord}&nbsp;
        </span>
        {staticData.title}
      </h3>
      <p className="text-[#CECEE3] font-elza text-base font-normal mb-8 leading-relaxed lg:text-xl">
        {staticData.description}
      </p>
      <h4 className="font-elza text-[#9FA3BD] text-sm leading-relaxed">
        {staticData.disclaimer}
      </h4>
      <KitButton
        href="/book-demo"
        variant="tertiary"
        withAnimatedArrow="to-right"
        size="large"
        className="mt-[24px] mb-[38px] text-sm lg:mt-[32px]"
      >
        {staticData.buttonText}
      </KitButton>
    </div>
  );
}

export default PromoCard;
