import Marquee from "./Marquee";

function ExpertsSection() {
  return (
    <section className="pt-24 lg:pt-33" id="experts-section">
      <div>
        <h4 className="font-clash-display text-black text-left lg:text-center text-[1.75rem] font-medium leading-7.75 lg:text-[3.25rem] lg:leading-14 lg:mx-auto max-w-88 lg:max-w-150 px-5 lg:px-0 mb-8 lg:mb-20">
          Exclusive access to a network&nbsp;
          <span className="font-kepler-std text-ui-blue text-[2rem] italic lg:text-[3.75rem]">
            of experts
          </span>
        </h4>
        <Marquee />
      </div>
    </section>
  );
}

export default ExpertsSection;
