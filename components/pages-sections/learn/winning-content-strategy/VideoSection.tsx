export default function VideoSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#E6E3DE] border border-primary-gray p-4 md:p-6 lg:p-8">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.loom.com/embed/b6075a75c513433ab6260ce35bb9cace?sid=1987c284-adf6-4619-8983-ae97e22ad1eb"
                allowFullScreen
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                style={{ border: 'none' }}
                title="Winning content strategy framework overview video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
