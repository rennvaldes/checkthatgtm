'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';
import './styles.scss';

export default function Career() {
  const initializeWorkable = () => {
    // @ts-ignore
    window.whr(document).ready(function(){
      // @ts-ignore
      window.whr_embed(662209, { detail: 'titles', base: 'jobs', zoom: 'country', grouping: 'none' });
      // @ts-ignore
      window.whr(document).on('click', 'li.whr-item a', function(e) {
        e.preventDefault();
        window.open(this.href, '_blank');
      });
    });
  };

  useEffect(() => {
    if (window.whr) {
      initializeWorkable();
    }
  }, []);

  return (
    <main className='relative min-h-screen flex flex-col items-center py-24'>
      <div className="w-full max-w-7xl px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Help Us Redefine Growth</h1>
        <div className="text-ui-grey text-center max-w-2xl mx-auto mb-8 space-y-4 text-lg">
          <p>
            We&apos;re building the future of growth marketing by combining AI with human expertise.
            We help companies achieve real, sustainable growth through AI-powered workflows and expert guidance.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-ui-grey font-medium border border-ui-veige rounded-lg p-4">
            <span>🌎</span>
            <p>We&apos;re a remote-first company — all we ask is 4 hours of overlap with San Francisco</p>
          </div>
          <Script
            src='https://www.workable.com/assets/embed.js'
            onLoad={initializeWorkable}
          />
          <div id='whr_embed_hook'></div>
        </div>
      </div>
    </main>
  );
}
