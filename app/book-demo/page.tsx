'use client';

import { useEffect } from 'react';

export default function BookDemoPage() {
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

  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe 
        id="form-iframe"
        src="https://forms.default.com/639407"
        className="w-full border-0"
        title="Book a Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
} 