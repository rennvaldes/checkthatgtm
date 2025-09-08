/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import Accordion from '@/lib/litebox-lib/ui/Accordion/Accordion';

function FaqItem({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <Accordion
      id={`accordion-${title}`}
      title={
        <span className="text-[20px] lg:text-[24px] lg:max-w-[724px] max-w-[272px] lg:leading-[27.6px] leading-[26px]">
          {title}
        </span>
      }
      content={
        <div className="[&>p]:mb-6 [&>p:last-child]:mb-0 [&>p]:leading-[24px] [&>p]:text-[16px] [&>ul]:mb-6 [&>ul:last-child]:mb-0 [&>ul>li]:mb-2 [&>ul>li:last-child]:mb-0 [&>ul>li]:leading-[26px]">
          {children}
        </div>
      }
      variant='filled'
    />
  );
}

function FaqSectionHomepage() {
  return (
    <section
      id='faq-section-homepage'
      className='mx-auto w-[320px] lg:w-full lg:max-w-[1280px] lg:mb-[123px] mb-[34px] mt-[40px] lg:mt-[80px]'>
      <h3 className='mb-[40px] text-center text-[28px] font-medium leading-[31px] lg:mb-[64px] lg:text-[52px] lg:leading-[57px]'>
        FAQs
      </h3>

      <div className='lg:mt-[64px] justify-center lg:flex'>
        <div className='flex flex-col lg:w-[820px]'>
          <FaqItem title={'What services does GrowthX offer?'}>
            <p>GrowthX provides a comprehensive growth engine built around three core pillars that work together to drive sustainable results:</p>
            <p><strong>CONTENT: Create high-quality assets that build authority</strong></p>
            <ul className="list-disc pl-6">
              <li><strong>Editorial Content</strong>: Expert-written content with daily refreshes and publishing from senior editors formerly at TechCrunch and Animalz</li>
              <li><strong>Programmatic SEO</strong>: Data-driven content with up to 3 page templates led by SEO experts from ClickUp, G2, and Fanatics</li>
              <li><strong>AEO</strong>: Specialized optimization to increase referrals and mentions in AI tools like Google AI Overviews, Perplexity, and ChatGPT</li>
              <li><strong>Case Studies</strong>: Turnkey content creation from sourcing to interviewing to writing (up to 4 per month)</li>
              <li><strong>Content Refresh</strong>: Update and optimize existing content to boost rankings and traffic</li>
            </ul>
            <p><strong>DISTRIBUTE: Amplify reach and visibility</strong></p>
            <ul className="list-disc pl-6">
              <li><strong>Link Building</strong>: Full-service backlink campaigns delivering 20+ high-authority (DR 60-90) backlinks monthly</li>
              <li><strong>Social Media</strong>: Transform your expertise into platform-optimized posts that drive engagement (up to 5 posts weekly)</li>
            </ul>
            <p><strong>CONVERT: Turn audience into revenue</strong></p>
            <ul className="list-disc pl-6">
              <li><strong>Conversion Rate Optimization</strong>: Run up to 5 ongoing experiments to improve lead generation and sales</li>
              <li><strong>Paid Media</strong>: AI-optimized campaigns supporting up to $250k in monthly budget</li>
              <li><strong>Gated Content</strong>: High-value assets that capture qualified leads (up to 4 monthly)</li>
              <li><strong>Outbound Sales</strong>: Direct outreach campaigns to convert prospects into customers</li>
            </ul>
            <p>These workstreams are designed to synergize with each other, often delivering exponentially better results when combined. For example, high-quality content gains more visibility through link building, which drives more traffic that can be optimized for conversion, creating a complete growth flywheel.</p>
            <p>All workstreams are powered by our unique combination of AI workflows with guidance from domain experts formerly at companies like Deepgram, Scale AI, TripAdvisor, and TechCrunch—giving you access to top-tier talent that would otherwise be unavailable to most organizations.</p>
          </FaqItem>
          <FaqItem title={'What does the onboarding and project startup process look like?'}>
            <p>Our onboarding process is designed to quickly transform your growth initiatives without burdening your team:</p>
            <p><strong>Week 1: Discovery & Strategy</strong></p>
            <p>We begin with thorough research of your business, competitors, and audience before our kickoff meeting. We immerse ourselves in your brand positioning, messaging, and existing growth channels to develop a solid foundation of understanding. This preparation allows us to arrive at our first meeting with meaningful insights rather than basic questions.</p>
            <p><strong>Week 2-3: Foundation & Calibration</strong></p>
            <p>After aligning on objectives, we build your custom Content OS, setting up AI workflows tailored to your specific needs. We create initial content drafts for calibration, develop a comprehensive style guide, and establish production frameworks. During this phase, we&apos;ll collaborate closely to refine our approach, ensuring our outputs perfectly match your brand voice and strategic goals.</p>
            <p><strong>Week 4: Production Launch</strong></p>
            <p>Once calibrated, we immediately begin executing across your selected workstreams. Production starts within the first few weeks, as we prioritize quick wins to build momentum. Our rigorous quality assurance process combines AI-enhanced checks with expert human oversight from our managing editors and growth strategists.</p>
            <p>Throughout the entire process, we work as an extension of your team in Slack, providing daily updates and transparent communication. This approach ensures you maintain visibility without the burden of extensive meetings or management overhead.</p>
            <p>The onboarding phase sets the foundation for our ongoing partnership, where we continuously optimize and scale your growth engine based on performance data and evolving business priorities.</p>
          </FaqItem>
          <FaqItem title={'Who would be the GrowthX team member dedicated for the day-to-day?'}>
            <p>Your day-to-day contact will be a dedicated Growth Strategist, someone with a proven track record in driving growth and managing content programs. They&apos;ll be your point of contact, deeply involved in everything from strategy to execution, ensuring that your growth initiatives are on track. They&apos;re supported by a managing editor and a team of experts working in sync to deliver results.</p>
          </FaqItem>
          <FaqItem title={'Which KPIs should we measure? What would you consider success?'}>
            <p>Our ultimate goal is to drive real revenue for your business, but we recognize that it starts by building effective content, gaining distribution, and then converting that distribution into paying customers. We focus on optimizing controllable inputs because doing so consistently leads to the right outcomes over time. Here&apos;s how we approach each stage:</p>
            <p><strong>Phase 1 - Content Production</strong></p>
            <p>The first priority is getting a content strategy in place that scales. We focus on KPIs that ensure we&apos;re generating enough valuable content to get noticed:</p>
            <ul className="list-disc pl-6">
              <li>Articles Published</li>
              <li>Total Words Published</li>
              <li>Pages Indexed by Search Engines</li>
              <li>Keywords Ranked (early signals we&apos;re on the right track)</li>
            </ul>
            <p><strong>Phase 2 - Distribution & Reach</strong></p>
            <p>Once content is flowing, it&apos;s about ensuring people find and engage with it. This means nurturing and amplifying existing content to grow your audience and expand reach:</p>
            <ul className="list-disc pl-6">
              <li>Organic Search Impressions</li>
              <li>Organic Search Traffic (clicks, visits)</li>
              <li>Average CTR (Click-Through Rate)</li>
              <li>Number of Keywords Rising in Rank (top 3, 4-10, etc.)</li>
              <li>Domain Authority and Referring Domains</li>
            </ul>
            <p><strong>Phase 3 - Conversion to Leads</strong></p>
            <p>Here, we leverage the reach we&apos;ve established to create meaningful conversions. Our goal is to convert interest into real leads:</p>
            <ul className="list-disc pl-6">
              <li>Visit → Subscriber / Lead Conversion</li>
              <li>Conversion Rates by Offer, Page, or Topic</li>
              <li>Lead Volume and Quality</li>
              <li>Lead Engagement (e.g., Open Rates, Interaction Levels)</li>
            </ul>
            <p><strong>Phase 4 - Conversion to Revenue</strong></p>
            <p>The final step is about converting engaged leads into paying customers, making sure our content has ultimately driven business growth:</p>
            <ul className="list-disc pl-6">
              <li>Lead → Meeting (or Product Signup) Conversion</li>
              <li>Meeting → Sales Opportunity (or Product Activation)</li>
              <li>Sales Opportunity → Closed Deal (Monetization)</li>
              <li>Average Deal Size or Order Value</li>
              <li>Customer Lifetime Value (LTV)</li>
            </ul>
            <p>Success for us means creating a growth engine—starting with content that earns trust, building a distribution network that scales that trust, and then strategically converting that reach into tangible business outcomes. Every KPI ties back to this journey from content to conversion.</p>
          </FaqItem>
        </div>
      </div>
    </section>
  );
}

function FaqSectionPricing() {
  return (
    <section
      id='faq-section-pricing'
      className='mx-auto w-[320px] lg:w-full lg:max-w-[1280px] lg:mb-[123px] mb-[34px] mt-[40px] lg:mt-[80px]'>
      <h3 className='mb-[40px] text-center text-[28px] font-medium leading-[31px] lg:mb-[64px] lg:text-[52px] lg:leading-[57px]'>
        FAQs
      </h3>

      <div className='lg:mt-[64px] justify-center lg:flex'>
        <div className='flex flex-col lg:w-[820px]'>
          <FaqItem title={'How much does GrowthX cost?'}>
            <p>Subscriptions start at $15,000 per month and include:</p>
            <ul className="list-disc pl-6">
              <li>Access to our full suite of growth workstreams (Content, SEO, CRO, Paid Media, Outbound)</li>
              <li>Flexibility to switch and add additional workstreams as your needs evolve</li>
              <li>Dedicated growth strategist from the top 1% of industry experts</li>
              <li>AI-powered workflows that deliver results in days, not months</li>
              <li>Full team working in Slack as an extension of your organization</li>
              <li>Turnaround times starting at 24 hours</li>
              <li>Access to the GrowthX platform and AI-Led Growth community</li>
            </ul>
            <p>We focus on delivering outcomes, not just tools. Our approach builds scalable growth engines that generate demand across multiple channels simultaneously.</p>
            <p>Typical engagements range from $15,000 to $20,000 USD/month based on your specific growth goals and the workstreams you prioritize. This predictable pricing model eliminates the surprise bills common with traditional agencies while providing the expert execution that self-service tools lack.</p>
          </FaqItem>
          <FaqItem title={'What is the minimum commitment?'}>
            <p>GrowthX requires a 12-month minimum commitment because sustainable growth requires consistency and momentum. Unlike one-off campaigns or projects, our AI-powered growth engine is designed to build compounding results over time.</p>
            <p>This commitment allows us to:</p>
            <ul className="list-disc pl-6">
              <li>Properly calibrate our AI workflows to your specific brand voice and audience</li>
              <li>Move through our proven growth phases from content production to revenue conversion</li>
              <li>Provide you access to our team of domain experts who become deeply familiar with your business</li>
              <li>Implement, test, and optimize multiple growth initiatives for maximum impact</li>
            </ul>
            <p>Our most successful clients typically see the most significant results after 3-4 months as our strategies gain traction and begin compounding. The longer we collaborate, the more our team understands your unique market position, allowing us to continuously refine our approach for increasingly better outcomes.</p>
          </FaqItem>
          <FaqItem title={'Do you do custom plans?'}>
            <p>Yes, we offer complete flexibility to customize your plan:</p>
            <ul className="list-disc pl-6">
              <li><strong>Mix and match workstreams</strong>: You can allocate your budget across different workstreams (Content, SEO, CRO, Paid Media, Outbound) based on your specific growth priorities.</li>
              <li><strong>Custom workflow development</strong>: For unique needs, we develop new workstreams tailored to your business. This includes expanding technical documentation, creating custom AI workflows, or building specialized growth systems.</li>
              <li><strong>Adaptable scaling</strong>: As your growth needs evolve, we can adjust your workstreams and strategy accordingly without lengthy contract renegotiations.</li>
            </ul>
            <p>Our Custom Workstream option is specifically designed for businesses with unique requirements that don&apos;t fit neatly into our standard offerings. We&apos;ll work with you to build a tailored solution that addresses your specific growth challenges.</p>
          </FaqItem>
          <FaqItem title={'What billing options do you offer?'}>
            <p>We offer two simple billing options:</p>
            <ol className="list-decimal pl-6">
              <li><strong>Credit card billing</strong>: Convenient automatic monthly payments</li>
              <li><strong>Invoicing</strong>: Traditional invoice-based billing</li>
            </ol>
            <p>We can discuss which option works best for your company during our initial consultation.</p>
          </FaqItem>
          <FaqItem title={'Is GrowthX for me?'}>
            <p>GrowthX is ideal for companies seeking sustainable, long-term organic growth rather than quick fixes. We&apos;re a good fit if:</p>
            <ol className="list-decimal pl-6">
              <li><strong>You understand growth takes time</strong> - We don&apos;t promise viral traffic overnight. Our approach builds lasting, compounding results through consistent execution.</li>
              <li><strong>You value sustainable growth</strong> - Our proven record includes building content engines for companies like IBM, HP, ServiceTitan, and HashiCorp that drive real business outcomes.</li>
              <li><strong>You appreciate first-principles thinking</strong> - We start by deeply understanding your market, product, and audience before implementing automation.</li>
              <li><strong>You&apos;re ready for a 12+ month journey</strong> - While our 12-week bootcamp establishes the foundation, real growth compounds over time as we build momentum.</li>
              <li><strong>You&apos;re committed to the process</strong> - We&apos;re selective with our clients, looking for partners who are ready to invest in content and shift from renting audiences to earning them.</li>
            </ol>
            <p><strong>Bottom line:</strong> If you&apos;re tired of dumping money into ads with no lasting ROI and can commit to consistent content production while trusting our proven process, GrowthX is built for you.</p>
          </FaqItem>
          <FaqItem title={'How does the onboarding work?'}>
            <p>Our onboarding follows a proven 12-week acceleration program designed to build your growth engine:</p>
            <p><strong>Weeks 0-1: Discovery & Strategy</strong></p>
            <ul className="list-disc pl-6">
              <li>We deeply research your business, market, and audience before our first meeting</li>
              <li>We establish collaborative workflows in Slack and conduct kickoff sessions</li>
              <li>We align on priorities and growth objectives across all channels</li>
            </ul>
            <p><strong>Weeks 2-3: Foundation Building</strong></p>
            <ul className="list-disc pl-6">
              <li>We develop your comprehensive growth strategy across relevant workstreams</li>
              <li>We create necessary style guides and calibration pieces</li>
              <li>We implement quick wins to show immediate momentum</li>
            </ul>
            <p><strong>Weeks 4-7: Execution & Learning</strong></p>
            <ul className="list-disc pl-6">
              <li>We begin executing across selected workstreams (content, paid, CRO, etc.)</li>
              <li>We establish consistent production cadences</li>
              <li>We closely monitor performance signals and iterate rapidly</li>
            </ul>
            <p><strong>Weeks 8-12: Optimization & Scaling</strong></p>
            <ul className="list-disc pl-6">
              <li>We increase production velocity while maintaining quality</li>
              <li>We focus on distribution and conversion optimization</li>
              <li>We prepare a comprehensive review with next-phase recommendations</li>
            </ul>
            <p>Throughout the process, our team works as an extension of yours with daily updates in Slack and complete transparency. This initial 12-week program sets the foundation for long-term, sustainable growth across all your channels.</p>
          </FaqItem>
        </div>
      </div>
    </section>
  );
}

export { FaqSectionHomepage, FaqSectionPricing };
