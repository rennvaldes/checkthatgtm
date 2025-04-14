import CornerDeco from "@/components/icons/CornerDecoration";
import ActionsBoard from "./ActionsBoard";
import X from "@/components/icons/X";

function WorkstreamsSection() {
  return (
    <section className="mt-10 lg:mt-0 relative 2xl:ml-[12vw]">
      <div className="px-5 pt-5 lg:px-20 lg:pt-20">
        <CornerDeco className="text-ui-peach size-[2.1rem] absolute right-[12rem] top-[16rem] hidden lg:block" />
        <X className="text-ui-blue absolute right-[3.75rem] top-[11rem] hidden lg:block" />
        <div className="text-left max-w-[35rem] lg:max-w-[60.5rem]">
          <h3 className="text-ui-blue text-lg font-medium mb-1">
            Our Workstreams
          </h3>
          <h4 className="font-clash-display text-black text-[1.75rem] font-medium leading-[1.9375rem] w-[80%] lg:text-[3.25rem] lg:leading-[3.5rem]">
            Services that power the fastest&nbsp;
            <span className="font-kepler-std text-ui-blue text-[2rem] italic lg:text-[3.75rem]">
              growing companies
            </span>
          </h4>
          <p className="font-elza text-[#5F5D78] lg:text-ui-black mt-4 text-base pr-10 lg:pr-0 lg:text-xl">
            Expert humans, paired with infinitely scalable AI workflows.
          </p>
        </div>
      </div>
      <ActionsBoard />
    </section>
  );
}

export default WorkstreamsSection;
