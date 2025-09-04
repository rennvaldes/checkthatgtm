"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import ContentLayout from "@/components/layout/ContentLayout";
import Accordion from "@/lib/litebox-lib/ui/Accordion/Accordion";

function FaqItem({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <Accordion
      id={`accordion-${title}`}
      title={
        <span className="font-messina-sans text-[20px] lg:text-[24px] lg:max-w-[724px] max-w-[272px] lg:leading-[27.6px] leading-[26px]">
          {title}
        </span>
      }
      content={
        <div className="font-messina-sans [&>p]:mb-6 [&>p:last-child]:mb-0 [&>p]:leading-[24px] [&>p]:text-[16px] [&>ul]:mb-6 [&>ul:last-child]:mb-0 [&>ul>li]:mb-2 [&>ul>li:last-child]:mb-0 [&>ul>li]:leading-[26px]">
          {children}
        </div>
      }
      variant="filled"
    />
  );
}

export default function FaqContentLayoutSection() {
  return (
    <section className="mx-auto w-full container px-4 md:px-6 lg:px-8">
      <ContentLayout
        className="gap-10 lg:gap-14"
        leftContent={
          <h3 className="text-[28px] md:text-[36px] lg:text-[52px] font-medium leading-[1.1] tracking-tight">
            FAQs
          </h3>
        }
        rightContent={
          <div className="flex flex-col lg:w-[820px] gap-4">
            <FaqItem title={"What services does GrowthX offer?"}>
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

            <FaqItem title={"What does the onboarding and project startup process look like?"}>
              <p>Our onboarding process is designed to quickly transform your growth initiatives without burdening your team:</p>
              <p><strong>Week 1: Discovery & Strategy</strong></p>
              <p>We begin with thorough research of your business, competitors, and audience before our kickoff meeting. We immerse ourselves in your brand positioning, messaging, and existing growth channels to develop a solid foundation of understanding. This preparation allows us to arrive at our first meeting with meaningful insights rather than basic questions.</p>
              <p><strong>Week 2-3: Foundation & Calibration</strong></p>
              <p>After aligning on objectives, we build your custom Content OS, setting up AI workflows tailored to your specific needs. We create initial content drafts for calibration, develop a comprehensive style guide, and establish production frameworks. During this phase, we'll collaborate closely to refine our approach, ensuring our outputs perfectly match your brand voice and strategic goals.</p>
              <p><strong>Week 4: Production Launch</strong></p>
              <p>Once calibrated, we immediately begin executing across your selected workstreams. Production starts within the first few weeks, as we prioritize quick wins to build momentum. Our rigorous quality assurance process combines AI-enhanced checks with expert human oversight from our managing editors and growth strategists.</p>
              <p>Throughout the entire process, we work as an extension of your team in Slack, providing daily updates and transparent communication. This approach ensures you maintain visibility without the burden of extensive meetings or management overhead.</p>
              <p>The onboarding phase sets the foundation for our ongoing partnership, where we continuously optimize and scale your growth engine based on performance data and evolving business priorities.</p>
            </FaqItem>

            <FaqItem title={"Who would be the GrowthX team member dedicated for the day-to-day?"}>
              <p>Your day-to-day contact will be a dedicated Growth Strategist, someone with a proven track record in driving growth and managing content programs. They'll be your point of contact, deeply involved in everything from strategy to execution, ensuring that your growth initiatives are on track. They're supported by a managing editor and a team of experts working in sync to deliver results.</p>
            </FaqItem>

            <FaqItem title={"Which KPIs should we measure? What would you consider success?"}>
              <p>Our ultimate goal is to drive real revenue for your business, but we recognize that it starts by building effective content, gaining distribution, and then converting that distribution into paying customers. We focus on optimizing controllable inputs because doing so consistently leads to the right outcomes over time. Here's how we approach each stage:</p>
              <p><strong>Phase 1 - Content Production</strong></p>
              <p>The first priority is getting a content strategy in place that scales. We focus on KPIs that ensure we're generating enough valuable content to get noticed:</p>
              <ul className="list-disc pl-6">
                <li>Articles Published</li>
                <li>Total Words Published</li>
                <li>Pages Indexed by Search Engines</li>
                <li>Keywords Ranked (early signals we're on the right track)</li>
              </ul>
              <p><strong>Phase 2 - Distribution & Reach</strong></p>
              <p>Once content is flowing, it's about ensuring people find and engage with it. This means nurturing and amplifying existing content to grow your audience and expand reach:</p>
              <ul className="list-disc pl-6">
                <li>Organic Search Impressions</li>
                <li>Organic Search Traffic (clicks, visits)</li>
                <li>Average CTR (Click-Through Rate)</li>
                <li>Number of Keywords Rising in Rank (top 3, 4-10, etc.)</li>
                <li>Domain Authority and Referring Domains</li>
              </ul>
              <p><strong>Phase 3 - Conversion to Leads</strong></p>
              <p>Here, we leverage the reach we've established to create meaningful conversions. Our goal is to convert interest into real leads:</p>
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
        }
      />
    </section>
  );
}
