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
      className='mx-auto w-[320px] lg:w-full lg:max-w-[1280px] lg:mb-[123px] mb-[34px]'>
      <h3 className='mb-[40px] text-center text-[28px] font-medium leading-[31px] lg:mb-[64px] lg:text-[52px] lg:leading-[57px]'>
        FAQs
      </h3>

      <div className='lg:mt-[64px] justify-center lg:flex'>
        <div className='flex flex-col lg:w-[820px]'>
          <FaqItem title={'What services does GrowthX offer?'}>
            <p>GrowthX offers a suite of AI-powered growth services, each designed to build sustainable and scalable growth engines:</p>
            <ul className="list-disc pl-6">
              <li><strong>Editorial &amp; Content Refreshes</strong>: We provide a fully managed editorial program that delivers up to 50,000 words of high-quality content each month. This includes content strategy, expert editors, SEO optimization, and continuous performance monitoring to ensure maximum impact.</li>
              <li><strong>Programmatic SEO (pSEO)</strong>: Our programmatic SEO solution scales your organic growth by generating up to 1,200 templated, SEO-optimized pages annually. This helps drive traffic and visibility with minimal manual effort, leveraging advanced AI workflows and consistent quality oversight.</li>
              <li><strong>Interview-First Long-Form Content</strong>: We create high-quality, story-driven content based on interviews with key individuals in your ecosystem. This content is transformed into compelling long-form articles and repurposed for multiple platforms, helping you establish thought leadership and boost audience engagement.</li>
              <li><strong>Cross-Format Content Repurposing</strong>: We transform anchor content like webinars, podcasts, and reports into a broad range of derivative assets—including blog posts, social snippets, and videos—ensuring your message reaches audiences across various channels, maximizing both engagement and reach.</li>
              <li><strong>AI-Powered Link Building & Content Collaboration</strong>: GrowthX uses AI to acquire high-quality backlinks from authoritative sites, boosting your domain authority and improving organic search performance. We combine targeted outreach, link-building strategies, and ongoing analysis to enhance your content&apos;s SEO value continuously.</li>
            </ul>
            <p>Together, these services provide an end-to-end growth engine that combines AI efficiencies with expert insight to drive meaningful, lasting growth.</p>
          </FaqItem>

          <FaqItem title={'What happens during the onboarding and discovery phase?'}>
            <p>During onboarding, we dive deep into understanding your brand, audience, and unique growth challenges. We conduct a thorough analysis of your business history, market positioning, and existing content strategies to set a strong foundation. This phase is all about aligning on goals, ensuring our team knows your brand inside and out, and building the blueprint for success.</p>
          </FaqItem>

          <FaqItem title={'How do you start the project after onboarding?'}>
            <p>After onboarding, we kick things off with tailored strategy sessions to finalize your growth plan. We set up AI workflows, integrate our systems with yours, and create an operational framework for content production. The focus here is on getting all gears in motion&mdash;defining your content calendar, setting key milestones, and preparing for efficient execution.</p>
          </FaqItem>

          <FaqItem title="What is the process for workflow and content calibration?">
            <p>Workflow and content calibration involve tailoring our processes to suit your brand&apos;s voice, objectives, and style. We collaborate closely with you to review initial drafts, gather feedback, and refine our approach. It&apos;s an iterative process where we use both expert insight and AI-powered analytics to align content with your brand, ensuring it&apos;s both impactful and authentic.</p>
          </FaqItem>

          <FaqItem title={'When does content production begin?'}>
            <p>Content production begins immediately after the calibration phase. Once we&apos;ve aligned on the workflows and content strategy, we start executing, often within the first few weeks of onboarding. We prioritize quick wins, so expect to see content flowing early, as we believe in building momentum from the start.</p>
          </FaqItem>

          <FaqItem title={'How is content quality assured before publishing?'}>
            <p>Content quality is assured through a rigorous review process that combines AI-enhanced checks and human expertise. Every piece undergoes several stages of review&mdash;from SEO and keyword optimization to stylistic edits by a managing editor. Our content specialists, along with a dedicated growth lead, ensure every piece aligns with your standards and is ready to make an impact before going live.</p>
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

export default FaqSection;
