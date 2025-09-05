'use client';

import React, { useEffect, useState } from 'react';

export default function BookingFormEmbed({ className = '' }: { className?: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [iframeSrc, setIframeSrc] = useState('https://forms.default.com/639407');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = urlParams.toString();
    setIframeSrc(`https://forms.default.com/639407?${utmParams}`);
  }, []);

  const handleIframeLoad = () => setIsLoading(false);
  const handleIframeError = () => { setIsLoading(false); setHasError(true); };

  return (
    <div className={["relative w-full", className].join(' ')}>
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70">
          <div className="animate-pulse text-ui-black">Loading…</div>
        </div>
      )}
      {hasError ? (
        <div className="w-full h-[70vh] min-h-[560px] flex items-center justify-center bg-[#F1EEE9]">
          <div className="text-red-500">Failed to load the booking form. Please try again later.</div>
        </div>
      ) : (
        <iframe
          id="pricing-form-iframe"
          src={iframeSrc}
          className="w-full h-[95vh] min-h-[560px] border-0"
          title="Book a Demo"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
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
