'use client';

import Logo from '@/components/icons/Logo';
import { cn } from '@/lib/litebox-lib/utils/cn';

const comparisonData = [
  {
    feature: 'Cost',
    growthx: 'Predictable pricing starting at $15,000/mo',
    traditional: 'High overhead and hourly rates',
    saas: 'Subscription plus inhouse staff costs',
  },
  {
    feature: 'Quality',
    growthx: 'Domain experts with AI workflows',
    traditional: 'Variable quality across team members',
    saas: 'Only as good as your implementation',
  },
  {
    feature: 'Time to Start',
    growthx: 'Immedate',
    traditional: '3+ weeks of meetings before execution',
    saas: 'Months to hire and train your team',
  },
  {
    feature: 'Scope',
    growthx: 'Content, SEO, distribution & conversion',
    traditional: 'Limited to contracted deliverables',
    saas: 'Single-function tools requiring integration',
  },
  {
    feature: 'Scale',
    growthx: 'Up to 3 page templates',
    traditional: 'Bottlenecked by manual processes',
    saas: "Limited by your team's bandwidth",
  },
  {
    feature: 'Expertise',
    growthx: 'Growth strategist with proven track record',
    traditional: 'Agency-assigned specialists',
    saas: 'Requires hiring in-house experts',
  },
  {
    feature: 'Implementation',
    growthx: 'Works in Slack as extension of your team',
    traditional: 'Communication overhead with external team',
    saas: 'Self-service with minimal support',
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto w-full max-w-[calc(100vw-32px)] overflow-hidden lg:w-full lg:max-w-[1280px]">
        <div className="text-left max-w-[35rem] lg:max-w-[60.5rem]">
          <h3 className="text-ui-blue text-lg font-medium mb-1">
            Comparison
          </h3>
          <h4 className="font-clash-display text-black text-[1.75rem] font-medium leading-[1.9375rem] w-[80%] lg:text-[3.25rem] lg:leading-[3.5rem]">
            GrowthX vs&nbsp;
            <span className="font-kepler-std text-ui-blue text-[2rem] italic lg:text-[3.75rem]">
              others
            </span>
          </h4>
          <p className="font-elza text-[#5F5D78] lg:text-ui-black mt-4 text-base pr-10 lg:pr-0 lg:text-xl">
            We&apos;re not just another agency. We build growth engines that blend AI workflows with experts.
          </p>
        </div>

        <div className="overflow-x-auto mt-12 font-elza text-base">
          <div className="min-w-[800px]">
            {/* Headers */}
            <div className="grid grid-cols-4">
              <div className="p-6 font-medium text-muted-foreground flex items-center border-b">Features</div>
              <div className="p-6 bg-primary/5 flex items-center bg-white border border-t-ui-blue border-x-ui-blue">
                <Logo className="w-32 h-auto" />
              </div>
              <div className="p-6 font-medium text-muted-foreground flex items-center bg-white border-r border-y">Traditional Agencies</div>
              <div className="p-6 font-medium text-muted-foreground flex items-center bg-white border-r border-y">SaaS Tools</div>
            </div>

            {/* Content Rows */}
            {comparisonData.map((row, index, array) => (
              <div 
                key={row.feature}
                className="grid grid-cols-4"
              >
                <div className="p-6 font-medium flex items-center border-b">
                  {row.feature}
                </div>
                <div className={cn(
                  "p-6 bg-primary/5 flex items-center bg-white border-b border-x border-x-ui-blue",
                  index % 2 === 0 && "bg-primary/10",
                  index === array.length - 1 && "border-b-ui-blue"
                )}>
                  {row.growthx}
                </div>
                <div className="p-6 flex items-center bg-white border-r border-b">
                  {row.traditional}
                </div>
                <div className="p-6 flex items-center bg-white border-r border-b">
                  {row.saas}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
