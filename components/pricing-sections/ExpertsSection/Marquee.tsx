import expertsData from "./expertsData";
import MarqueeDesktop from "./MarqueeDesktop";


function Marquee() {
  return (
    <section className="w-full overflow-x-hidden">
      <MarqueeDesktop expertsData={expertsData} />
    </section>
  );
}

export default Marquee;
