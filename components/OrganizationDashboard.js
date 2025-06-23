import React from 'react';

export default function OrganizationDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Organization Insights</h1>

      <section className="bg-gray-900 rounded-lg p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-2">Team Summary</h2>
        <p className="text-gray-300">Overview of DISC styles across departments and teams.</p>
        <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold">
          View Team Stats
        </button>
      </section>

      <section className="bg-gray-900 rounded-lg p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-2">Compatibility Matrix</h2>
        <p className="text-gray-300">Analyze team compatibility and friction points using DISC data.</p>
        <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold">
          Launch Analyzer
        </button>
      </section>

      <section className="bg-gray-900 rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-2">Coaching Reports</h2>
        <p className="text-gray-300">Access PDF-ready reports and coaching plans for managers.</p>
        <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold">
          Generate Reports
        </button>
      </section>
    </div>
  );
}
