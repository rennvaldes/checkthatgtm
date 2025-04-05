'use client';

import { useEffect, useState } from 'react';

export default function BookDemoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Set iframe to full height on load
  useEffect(() => {
    const setIframeHeight = () => {
      const vh = window.innerHeight;
      const iframe = document.getElementById('form-iframe') as HTMLIFrameElement;
      if (iframe) {
        iframe.style.height = `${vh}px`;
      }
    };

    // Initial setup
    setIframeHeight();
    
    // Adjust on resize
    window.addEventListener('resize', setIframeHeight);
    
    return () => {
      window.removeEventListener('resize', setIframeHeight);
    };
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="w-full h-screen overflow-hidden relative">
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
          src="https://forms.default.com/639407"  // Replace with your actual Default form URL
          className="w-full border-0"
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