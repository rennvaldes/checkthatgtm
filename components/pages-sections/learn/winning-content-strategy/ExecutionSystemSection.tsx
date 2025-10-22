"use client";

import ContentLayout from "@/components/layout/ContentLayout";

export default function ExecutionSystemSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <ContentLayout
          leftContent={<div>Execution</div>}
          rightContent={
            <div>
              <h2 className="text-3xl lg:text-5xl xl:text-[64px] tracking-tighter mb-12">
                <span className="text-primary-black">From Strategy to</span>
                <br />
                <span className="text-primary-gray">Execution: Organization System</span>
              </h2>

              <div className="prose prose-lg lg:prose-xl max-w-none">
                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  Now you have this universe of content opportunities. <strong>What do you do with it?</strong>
                </p>

                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tighter mb-6">
                  Think Like a Course Creator
                </h3>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight mb-8">
                  Imagine you&apos;re running a bootcamp for your audience. How would you organize the information to guide them and advise them?
                </p>

                <p className="text-xl lg:text-2xl leading-relaxed tracking-tight font-semibold mb-6">
                  Organize into topic clusters/pillars:
                </p>

                <ul className="text-xl lg:text-2xl leading-relaxed tracking-tight space-y-3">
                  <li>Think of it as a tree with many branches</li>
                  <li>Each cluster is a seed you&apos;re planting and nurturing</li>
                  <li>Some clusters will be bigger (more content opportunities)</li>
                  <li>Some will be more strategic (closer to your offering)</li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
