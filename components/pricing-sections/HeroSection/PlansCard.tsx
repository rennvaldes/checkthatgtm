import Check from "@/components/icons/Check";

const staticData = {
  title: "Included in",
  highlightedWord: "all plans",
  plans: [
    { text: "Access to all workstreams", scrollTo: "workstreams-section" },
    { text: "Access to top 1% growth experts", scrollTo: "experts-section" },
    { text: "Dedicated growth strategist" },
    { text: "Turnaround times starting at 24 hours" },
    { text: "We work in Slack as an extension of your team" },
    { text: "Access to GrowthX platform" },
    { text: "Access to AI Led Growth community" },
  ],
};

function PlansCard() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white w-full max-w-[36.6875rem] px-5 lg:px-12 h-full lg:min-h-[32.5rem] border border-ui-blue">
      <h3 className="font-clash-display mx-auto text-left text-[#20233A] text-[1.875rem] font-medium leading-[40px] pb-2 pt-6 lg:pt-4 lg:text-[2.375rem] lg:leading-[77px] ">
        {staticData.title}&nbsp;
        <span className="font-kepler-std text-ui-blue text-[2rem] italic lg:text-[2.8rem]">
          {staticData.highlightedWord}
        </span>
      </h3>
      <ul className="pb-8 lg:pb-10">
        {staticData.plans.map((plan, index) => (
          <li
            key={index}
            className={`group text-[#20233A] font-elza text-sm lg:text-base flex items-center justify-between gap-2 border-b border-[#C3B0F5] py-3 ${plan.scrollTo ? 'cursor-pointer transition-colors hover:bg-gray-50' : 'cursor-default'}`}
            onClick={() => plan.scrollTo ? handleScrollTo(plan.scrollTo) : undefined}
          >
            <div className="flex items-center gap-1">
              <span>{plan.text}</span>
            </div>
            <Check className="text-ui-blue h-[28px] w-[20px] shrink-0" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlansCard;
