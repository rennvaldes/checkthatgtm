'use client';

import Link from 'next/link';
import { RESOURCES, heroIcons } from './data';
import React from 'react';

export default function Resources() {
  return (
    <main className='relative min-h-screen flex flex-col items-center py-24'>
      <div className="w-full max-w-7xl px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Resources</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((resource) => (
            <Link
              key={resource.id}
              href={`/resources/${resource.id}`}
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 h-full transition-transform duration-200 group-hover:-translate-y-1">
                <div className="mb-4">
                  {React.createElement(heroIcons[resource.icon], {
                    className: "h-8 w-8 text-gray-600"
                  })}
                </div>
                <h2 className="text-2xl font-semibold mb-3">{resource.title}</h2>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
