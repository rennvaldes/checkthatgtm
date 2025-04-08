'use client';

import { useEffect, useState } from 'react';

export default function BookDemoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    document.body.classList.add('hide-nav');

    const setIframeHeight = () => {
      const iframe = document.getElementById('form-iframe') as HTMLIFrameElement;
      if (iframe) {
        iframe.style.height = `${window.innerHeight}px`;
      }
    };

    setIframeHeight();
    window.addEventListener('resize', setIframeHeight);

    return () => {
      document.body.classList.remove('hide-nav');
      window.removeEventListener('resize', setIframeHeight);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative [&:has(*)>nav]:hidden [&:has(*)>footer]:hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-ui-white">
          <div className="animate-pulse text-ui-black">Loading...</div>
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-ui-white">
          <div className="text-red-500">
            Failed to load the booking form. Please try again later or contact support.
          </div>
        </div>
      ) : (
        <iframe
          id="form-iframe"
          src="https://forms.default.com/639407"
          className="w-full border-0"
          title="Book a Demo"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
          allowFullScreen
        />
      )}
    </div>
  );
}
