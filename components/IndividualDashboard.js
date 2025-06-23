import React from 'react';

export default function IndividualDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>

      <section className="bg-gray-900 rounded-lg p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-2">Your DISC Profile</h2>
        <p className="text-gray-300">See your DISC results and track your growth over time.</p>
        <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold">
          View Results
        </button>
      </section>

      <section className="bg-gray-900 rounded-lg p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-2">AI Coaching</h2>
        <p className="text-gray-300">Unlock your AI coach for DISC-based guidance.</p>
        <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold">
          Launch AI Coach
        </button>
      </section>

      <section className="bg-gray-900 rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-2">Self-Coaching Journal</h2>
        <p className="text-gray-300">Record reflections and track habits based on your DISC style.</p>
        <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold">
          Start Journaling
        </button>
      </section>
    </div>
  );
}
