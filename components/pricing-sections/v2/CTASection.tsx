import KitButton from "@/components/ui/KitButton";

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-[calc(100vw-32px)] lg:max-w-[1280px] flex flex-col items-center text-center">
        <h3 className="text-ui-blue text-lg font-medium mb-2">Ready?</h3>
        <h4 className="font-clash-display text-black text-[1.75rem] font-medium leading-7.75 w-[90%] lg:text-[3.25rem] lg:leading-14">
          Book a call to see if we’re a fit
        </h4>
        <p className="font-elza text-[#5F5D78] lg:text-ui-black mt-4 text-base lg:text-xl max-w-2xl">
          We’ll review your goals and share the playbook we’d run in your first 90 days.
        </p>
        <KitButton href="/book-demo" variant="tertiary" withAnimatedArrow="to-right" size="large" className="mt-8">
          Book a demo
        </KitButton>
      </div>
    </section>
  );
}
