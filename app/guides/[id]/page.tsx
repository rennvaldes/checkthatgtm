'use client';

import { useParams } from 'next/navigation';
import { GUIDES } from '../data';
import Link from 'next/link';
import { VideoEmbed } from '../components/VideoEmbed';

function isGoogleSlides(url: string): boolean {
  return url.includes('docs.google.com/presentation');
}

export default function GuidePage() {
  const { id } = useParams();
  const guide = GUIDES.find(p => p.id === id);

  if (!guide) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Guide not found</h1>
          <Link href="/guides" className="text-blue-500 hover:underline">
            Back to guides
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center py-20">
      <div className="w-full max-w-4xl px-4">
        <Link href="/guides" className="text-blue-500 hover:underline mb-8 block">
          ← Back to guides
        </Link>

        <h1 className="text-4xl font-bold mb-6">{guide.title}</h1>
        <p className="text-gray-600 text-lg mb-8">{guide.description}</p>

        {guide.videoUrl && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Video Walkthrough</h2>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <VideoEmbed
                url={guide.videoUrl}
                title={guide.title}
              />
            </div>
          </div>
        )}

        {guide.slideUrl && (
          <div className="my-8 w-full">
            <h2 className="text-2xl font-semibold mb-4">Slides</h2>
            {isGoogleSlides(guide.slideUrl) ? (
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src={guide.slideUrl}
                  title={`${guide.title} Slides`}
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ) : (
              <embed
                src={guide.slideUrl}
                type="application/pdf"
                width="100%"
                height="600px"
                className="rounded-lg shadow-lg"
              />
            )}
          </div>
        )}
      </div>
    </main>
  );
} 