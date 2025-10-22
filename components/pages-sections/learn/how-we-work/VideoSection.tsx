export default function VideoSection() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#E6E3DE] border border-primary-gray p-4 md:p-6 lg:p-8">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.loom.com/embed/fd05652bca384b90b6ef38a87b64b554?sid=16a59be7-4b86-48fa-973a-a891fb89c356"
                allowFullScreen
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                style={{ border: 'none' }}
                title="How we work process overview video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
