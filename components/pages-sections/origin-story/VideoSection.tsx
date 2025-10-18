export default function VideoSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#E6E3DE] border border-primary-gray p-4 md:p-6 lg:p-8">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.loom.com/embed/4e6a21ce8cd2436b960ceb87c6ecf75b?sid=3aae5538-fc00-409f-9441-a1d6ecf8cd66"
                allowFullScreen
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                style={{ border: 'none' }}
                title="Origin story overview video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
