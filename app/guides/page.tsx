'use client';

import Link from 'next/link';
import { GUIDES } from './data';
import React from 'react';

export default function GuidesPage() {
  return (
    <main className='relative min-h-screen flex flex-col items-center pt-48 pb-24'>
      <div className="w-full max-w-7xl px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Guides</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((guide) => (
            <Link
              key={guide.id}
              href={`/guides/${guide.id}`}
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 h-full transition-transform duration-200 group-hover:-translate-y-1">
                <h2 className="text-2xl font-semibold mb-3">{guide.title}</h2>
                <p className="text-gray-600">{guide.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 