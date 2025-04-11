import Marquee from "./Marquee";

function ExpertsSection() {
  return (
    <section className="mt-10 lg:mt-[8.25rem]">
      <div>
        <h4 className="font-clash-display text-black text-center text-[1.75rem] font-medium leading-[1.9375rem] lg:text-[3.25rem] lg:leading-[3.5rem] mx-auto max-w-[37.5rem] mb-20">
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
