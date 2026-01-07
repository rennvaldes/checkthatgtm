import FeatureCard from "../WorkstreamsSection/FeatureCard";
import ResearchIcon from "@/assets/img/workstreamsSection/cardIcons/books.svg";
import ContentIcon from "@/assets/img/workstreamsSection/cardIcons/content.svg";
import DistributionIcon from "@/assets/img/workstreamsSection/cardIcons/link.svg";
import ConversionIcon from "@/assets/img/workstreamsSection/cardIcons/border-chart.svg";
import AutomationIcon from "@/assets/img/workstreamsSection/cardIcons/refresh.svg";

const deliverables = [
  { icon: ResearchIcon, title: "Research & Strategy", desc: "ICP + intent mapping, keyword strategy, experiments backlog" },
  { icon: ContentIcon, title: "Content Engine", desc: "Briefs, outlines, drafts, edits, publish-ready assets" },
  { icon: DistributionIcon, title: "Distribution", desc: "Link-building, PR outreach, social repurposing" },
  { icon: ConversionIcon, title: "Conversion", desc: "Page templates, copy, UX improvements, analytics" },
  { icon: AutomationIcon, title: "Automation", desc: "AI workflows, internal tooling, documentation" },
];

export default function DeliverablesSection() {
  return (
    <section className="py-20" id="workstreams-section">
      <div className="mx-auto w-full max-w-[calc(100vw-32px)] lg:max-w-[1280px]">
        <div className="text-left max-w-140 lg:max-w-242">
          <h3 className="text-ui-blue text-lg font-medium mb-1">Included workstreams</h3>
          <h4 className="text-black text-3xl lg:text-5xl leading-tight tracking-tighter w-[90%]">
            A complete growth system
          </h4>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((d) => (
            <FeatureCard key={d.title} icon={d.icon} title={d.title} description={d.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
