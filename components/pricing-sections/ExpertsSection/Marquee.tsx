import expertsData from "./expertsData";
import MarqueeDesktop from "./MarqueeDesktop";
import MarqueeMobile from "./MarqueeMobile";


function Marquee() {
  return (
    <section className="w-full overflow-x-hidden">
      <MarqueeDesktop expertsData={expertsData} />
      <MarqueeMobile expertsData={expertsData} />
    </section>
  );
}

export default Marquee;
