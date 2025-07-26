"use client";

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function WorkshopPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Base destination URL
    const baseUrl = "https://lu.ma/ai-answers-workshop";
    
    // Get current query string
    const queryString = window.location.search;
    
    // Redirect to Luma with UTM parameters
    window.location.href = baseUrl + queryString;
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Redirecting to Workshop...</h1>
        <p className="text-gray-600">You're being redirected to the AI Answers Workshop</p>
        <p className="text-sm text-gray-500 mt-2">
          If you're not redirected automatically,{' '}
          <a 
            href="https://lu.ma/ai-answers-workshop" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
} 