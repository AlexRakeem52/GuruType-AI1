import React from 'react';
import Link from 'next/link';

export default function CoachDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <nav className="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
        <h1 className="text-xl font-bold">GURUTYPE AI</h1>
        <div className="space-x-6">
          <Link href="#">Dashboard</Link>
          <Link href="#">My Clients</Link>
          <Link href="#">Content</Link>
          <Link href="#">Career Navigator</Link>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-1/5 space-y-4 pr-6 border-r border-gray-800">
          <div className="font-semibold">Dashboard</div>
          <div>Client Results</div>
          <div>Team Analyzer</div>
          <div>Coaching Journal</div>
          <div>AI Content Engine</div>
        </aside>

        <main className="flex-1 px-8">
          <h2 className="text-2xl font-semibold mb-2">Welcome back!</h2>
          <p className="text-gray-400 mb-6">Let’s help you support and grow your clients.</p>
          <button className="bg-indigo-500 px-4 py-2 rounded text-white font-semibold mb-8">
            Create New Client
          </button>

          <section className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded">
              <h3 className="font-semibold mb-3">Client Results</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-400">
                    <th>Client</th>
                    <th>DISC Type</th>
                    <th>Assessment Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-800">
                    <td>John Smith</td>
                    <td>D</td>
                    <td>Aug 20</td>
                  </tr>
                  <tr className="border-t border-gray-800">
                    <td>Lisa Brown</td>
                    <td>I</td>
                    <td>Jul 15</td>
                  </tr>
                  <tr className="border-t border-gray-800">
                    <td>Mark Wilson</td>
                    <td>S</td>
                    <td>Jun 30</td>
                  </tr>
                  <tr className="border-t border-gray-800">
                    <td>Sarah Lee</td>
                    <td>C</td>
                    <td>May 25</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-900 p-4 rounded">
              <h3 className="font-semibold mb-3">Client Insights</h3>
              <div className="text-center text-sm text-gray-500">[Insert graph or insight summary here]</div>
            </div>

            <div className="bg-gray-900 p-4 rounded">
              <h3 className="font-semibold mb-3">Analyze a Team</h3>
              <p className="text-sm text-gray-400 mb-3">
                Upload a team roster or survey results and see team dynamics + DISC compatibility.
              </p>
              <button className="bg-indigo-600 px-4 py-2 rounded text-white">Launch Tool</button>
            </div>

            <div className="bg-gray-900 p-4 rounded">
              <h3 className="font-semibold mb-3">Coaching Journal</h3>
              <p className="text-sm text-gray-400 mb-3">
                Guided journaling and AI prompts personalized to your clients.
              </p>
              <button className="bg-indigo-600 px-4 py-2 rounded text-white">Add Entry</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
