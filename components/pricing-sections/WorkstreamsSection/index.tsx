import CornerDeco from "@/components/icons/CornerDecoration";
import ActionsBoard from "./ActionsBoard";
import X from "@/components/icons/X";

function WorkstreamsSection() {
  return (
    <section className="mt-10 lg:mt-0 relative flex flex-col items-center" id="workstreams-section">
      <div className="px-5 pt-5 lg:px-20 lg:pt-20">
        <CornerDeco className="text-ui-peach size-[2.1rem] absolute right-48 top-64 hidden lg:block" />
        <X className="text-ui-blue absolute right-15 top-44 hidden lg:block" />
        <div className="text-left max-w-140 lg:max-w-242">
          <h3 className="text-ui-blue text-lg font-medium mb-1">
            Our Workstreams
          </h3>
          <h4 className="font-clash-display text-black text-[1.75rem] font-medium leading-7.75 w-[80%] lg:text-[3.25rem] lg:leading-14">
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
