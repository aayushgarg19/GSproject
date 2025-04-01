'use client';

import { Suspense } from 'react';
import MessageComponent from './components/MessageComponent';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to Our Full Stack App
          </h1>
          <div className="bg-gray-50 p-6 rounded-md">
            <Suspense fallback={<p className="text-xl text-gray-700">Loading...</p>}>
              <MessageComponent />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}
