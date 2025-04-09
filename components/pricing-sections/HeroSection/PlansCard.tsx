import Check from "@/components/icons/Check";

const staticData = {
  title: "Included in",
  highlightedWord: "all plans",
  plans: [
    "Access to all workstreams",
    "Access to top 1% growth experts",
    "Dedicated growth strategist ",
    "Turnaround times starting at 24 hours",
    "Global team coverage",
    "Access to GrowthX platform",
    "Access to AI Led Growth community",
  ],
};

function PlansCard() {
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
            className="text-[#20233A] font-elza text-sm lg:text-base flex items-center justify-between gap-2 border-b border-[#C3B0F5] py-3"
          >
            <span>{plan}</span>
            <Check className="text-ui-blue h-[28px] w-[20px] shrink-0" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlansCard;
