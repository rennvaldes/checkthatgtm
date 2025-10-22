"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function Phase2TeamSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Partnership</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">Extension of</span>
                <br />
                <span className="text-primary-gray">Your Team</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  What &quot;extension of your team&quot; means:
                </p>

                <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight space-y-4">
                  <li><strong>Direct communication:</strong> No account managers. You work with the people doing the work.</li>
                  <li><strong>Weekly check-ins:</strong> Strategic alignment, not status updates</li>
                  <li><strong>Flexible priorities:</strong> Your product launch moved up? We adjust immediately.</li>
                  <li><strong>Institutional knowledge:</strong> We remember what you told us 6 months ago</li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
