/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import Accordion from '@/lib/litebox-lib/ui/Accordion/Accordion';
import rampImage from '@/assets/img/FaqSection/ramp.jpg';
import Image from 'next/image';

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
        <div className="[&>p]:mb-6 [&>p:last-child]:mb-0 [&>p]:leading-[24px] [&>p]:text-[16px] [&>ul]:mb-6 [&>ul:last-child]:mb-0 [&>ul>li]:mb-2 [&>ul>li:last-child]:mb-0">
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
      className='mx-auto w-[320px] lg:w-full lg:max-w-[1280px] lg:mb-[123px] mb-[34px]'>
      <h3 className='mb-[40px] text-center text-[28px] font-medium leading-[31px] lg:mb-[64px] lg:text-[52px] lg:leading-[57px]'>
        FAQs
      </h3>

      <div className='lg:mt-[64px] justify-center lg:flex'>
        <div className='flex flex-col lg:w-[820px]'>
          <FaqItem title="What services does GrowthX offer?">
            <p>After the initial content launch our goal is to aggressively refine, iterate, and scale content production based on ongoing feedback. The exact volume depends on your goals and the strategy we align on. We usually recommend a mix of creating new pages and constantly refreshing existing one.</p>
            <p>Below is a sample content ramp up plan.</p>

            <Image
              alt='Mountain'
              className='max-w-[100%]'
              src={rampImage}
            />
          </FaqItem>

          <FaqItem title="What happens during the onboarding and discovery phase?">
            <p>In Week 1, we conduct a kick-off call to introduce teams and discuss project goals. We also engage in discovery sessions to go deeper in understanding your company, product, use cases, ideal customer profile (ICP), current strategy, etc. Finally we align on expectations and how to measure success.</p>
          </FaqItem>

          <FaqItem title="How do you start the project after onboarding?">
            <p>In Week 2, we perform initial research to identify AI-powered content opportunities, develop a playbook for AI workflows, and start building the Content Workflow Management system.</p>
          </FaqItem>

          <FaqItem title="What is the process for workflow and content calibration?">
            <p>Weeks 3 and 4 involve further development and refinement of AI workflows (AirOps) and the Content Workflow Management system (usually Airtable) based on feedback.</p>
          </FaqItem>

          <FaqItem title="When does content production begin?">
            <p>Usually by week 5, we ramp up content production and collect feedback on the initial batches of content produced. Our goal is to always get to publishing as quickly as possible to start showing results.</p>
          </FaqItem>

          <FaqItem title="How is content quality assured before publishing?">
            <p>First, we use the first 6 weeks to set the right strategy and calibrate on what great quality looks like for you. We then build multiple custom AI workflows to deliver that quality programmatically and add in several human input and review steps. Finally, we use dozens of tools and standard processes to do a final QA and review of each piece of content before publishing.</p>
          </FaqItem>

          <FaqItem title="Who would be the GrowthX team member dedicated for the day-to-day?">
            <p>Every customer is assigned a fully dedicated content operations lead with a strong background in SEO and writing. This person has advanced verbal and written English proficiency.</p>
            <p>Everyone on our team goes through 300+ hours of intensive training on a variety of topics like:</p>
            <p>SEO, keyword research, backlinking<br/>
            Tools training like Notion, Airtable, SEMRush, Ahref, etc<br/>
            Prompt engineering<br/>
            Building AI workflows in AirOps<br/>
            Content marketing and strategy<br/>
            Hands-on exercises to simulate day-to-day</p>
            <p>On top of that, every customer assigned an experienced strategist with a proven track record. This person will be guiding the strategy and execution every step of the way and will be heavily involved especially in the first six weeks.</p>
          </FaqItem>

          <FaqItem title="How KPIs should we measure? What would you consider success?">
            <p>Our ultimate goal is to drive real revenue for your business but we understand you often have to build distribution before conversion and monetization.</p>
            <p>Our approach emphasizes a strong focus on controllable inputs rather than outputs. This philosophy is rooted in the belief that by optimizing the factors we can control, the desired outcomes will naturally follow over time.</p>
            <p>Here's how we think about it but we are open to adapting to what works best for you.</p>

            <p><strong>Phase 1 - Establish content production</strong></p>
            <p>Here we want to make sure we have a clear content strategy and a way to scale it. In this phase we're looking at metrics like:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Articles published</li>
              <li>Total words published</li>
              <li>Pages indexed by search engines</li>
              <li>Keywords ranked for (early signals that we're publishing the right thing)</li>
            </ul>

            <p><strong>Phase 2 - Content refinement, enrichment and refresh</strong></p>
            <p>This is where we start to nurture existing content to continuously make them better. We want to send Google tons of signals that we're constantly improving our content.</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Organic search impressions</li>
              <li>Organic search traffic (clicks, visits)</li>
              <li>Average CTR</li>
              <li>Average position</li>
              <li># of keywords rising (top 3, 4-10, 11-20, 21-50, etc)</li>
              <li>Domain authority</li>
              <li>Referring domains</li>
            </ul>

            <p><strong>Phase 3 - Conversion to irresistible offers + nurture</strong></p>
            <p>We like to think of this as your "front-end" offer. What is something of high value that can be a lead magnet and drive a ton of subscribers.</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Visit → subscriber / lead</li>
              <li>Conversion by offer / by page / by topic</li>
              <li>Lead volume</li>
              <li>Lead engagement (open rates, etc)</li>
            </ul>

            <p><strong>Phase 4 - Monetization</strong></p>
            <p>We like to think of this as your "back-end" offer. While the previous steps are helping to increase your sellable surface area, this step is about finding the best ways to convert them into paying customers.</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Lead → meeting (or product signup)</li>
              <li>Meeting → sales opp (or product activation)</li>
              <li>Sales opp → win (or monetization)</li>
              <li>Average deal size (or average order value)</li>
              <li>LTV</li>
            </ul>
          </FaqItem>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
