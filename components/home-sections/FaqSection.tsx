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

function FaqSection() {
  return (
    <section
      id='faq-section'
      className='mx-auto w-[320px] lg:w-full lg:max-w-[1280px] lg:mb-[123px] mb-[34px] mt-[40px] lg:mt-[80px]'>
      <h3 className='mb-[40px] text-center text-[28px] font-medium leading-[31px] lg:mb-[64px] lg:text-[52px] lg:leading-[57px]'>
        FAQs
      </h3>

      <div className='lg:mt-[64px] justify-center lg:flex'>
        <div className='flex flex-col lg:w-[820px]'>
          <FaqItem title={'How much does GrowthX cost?'}>
            <p>Subscriptions start at $9,000 per month and include:</p>
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
            <p>Typical engagements range from $9,000 to $20,000 USD/month based on your specific growth goals and the workstreams you prioritize. This predictable pricing model eliminates the surprise bills common with traditional agencies while providing the expert execution that self-service tools lack.</p>
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
            <p>Our Custom Workstream option is specifically designed for businesses with unique requirements that don't fit neatly into our standard offerings. We'll work with you to build a tailored solution that addresses your specific growth challenges.</p>
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
            <p>GrowthX is ideal for companies seeking sustainable, long-term organic growth rather than quick fixes. We're a good fit if:</p>
            <ol className="list-decimal pl-6">
              <li><strong>You understand growth takes time</strong> - We don't promise viral traffic overnight. Our approach builds lasting, compounding results through consistent execution.</li>
              <li><strong>You value sustainable growth</strong> - Our proven record includes building content engines for companies like IBM, HP, ServiceTitan, and HashiCorp that drive real business outcomes.</li>
              <li><strong>You appreciate first-principles thinking</strong> - We start by deeply understanding your market, product, and audience before implementing automation.</li>
              <li><strong>You're ready for a 12+ month journey</strong> - While our 12-week bootcamp establishes the foundation, real growth compounds over time as we build momentum.</li>
              <li><strong>You're committed to the process</strong> - We're selective with our clients, looking for partners who are ready to invest in content and shift from renting audiences to earning them.</li>
            </ol>
            <p><strong>Bottom line:</strong> If you're tired of dumping money into ads with no lasting ROI and can commit to consistent content production while trusting our proven process, GrowthX is built for you.</p>
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

export default FaqSection;
