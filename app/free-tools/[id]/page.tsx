'use client';

import { useParams } from 'next/navigation';
import { TOOLS } from '../tools-data';
import Link from 'next/link';

export default function ToolPage() {
  const { id } = useParams();
  const tool = TOOLS.find(t => t.id === id);

  if (!tool) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tool not found</h1>
          <Link href="/free-tools" className="text-blue-500 hover:underline">
            Back to tools
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center py-20">
      <div className="w-full max-w-4xl px-4">
        <Link href="/free-tools" className="text-blue-500 hover:underline mb-8 block">
          ← Back to tools
        </Link>

        <h1 className="text-4xl font-bold mb-6">{tool.title}</h1>
        <p className="text-gray-600 text-lg mb-8">{tool.description}</p>

        {tool.videoUrl && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How it works</h2>
            <video
              controls
              className="w-full aspect-video rounded-lg"
              src={tool.videoUrl}
            />
          </div>
        )}

        {tool.iframeUrl && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Try it out</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                width="100%"
                height="600px"
                src={tool.iframeUrl}
                title={tool.title}
                sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-top-navigation-by-user-activation"
                allowFullScreen
                loading="lazy"
                className="border-0"
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
