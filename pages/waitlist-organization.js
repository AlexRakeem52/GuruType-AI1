// pages/waitlist-organization.js

import { useState } from 'react';

export default function WaitlistOrganization() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#222] text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-6 bg-[#111] p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center">Organization Demo Access</h1>
        <p className="text-center text-sm text-gray-400">
          Join the waitlist to experience how GuruType AI transforms team performance and culture.
        </p>

        {!submitted ? (
          <form
            action="https://formspree.io/f/mnqknqkz"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-4"
          >
            <input
              type="text"
              name="orgContactName"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-700 focus:outline-none"
            />
            <input
              type="email"
              name="orgEmail"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-700 focus:outline-none"
            />
            <input
              type="text"
              name="organization"
              placeholder="Organization Name"
              required
              className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#6C5CE7] hover:bg-[#5a4ed4] transition text-white font-semibold py-3 px-6 rounded-lg"
            >
              Request Demo
            </button>
          </form>
        ) : (
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold text-green-400">You're all set!</h2>
            <p>Thanks for reaching out. A member of our team will follow up shortly with next steps.</p>
          </div>
        )}
      </div>
    </div>
  );
}
