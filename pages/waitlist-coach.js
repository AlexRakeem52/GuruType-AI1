// pages/waitlist-coach.js

import { useState } from 'react';

export default function WaitlistCoach() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d0d] to-[#1f1f1f] text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-6 bg-[#111] p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center">Coach Demo Access</h1>
        <p className="text-center text-sm text-gray-400">Sign up to explore the DISC coaching platform and white-label options.</p>

        {!submitted ? (
          <form
            action="https://formspree.io/f/mnqknqkz"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-4"
          >
            <input
              type="text"
              name="coachName"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-700 focus:outline-none"
            />
            <input
              type="email"
              name="coachEmail"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#6C5CE7] hover:bg-[#5a4ed4] transition text-white font-semibold py-3 px-6 rounded-lg"
            >
              Request Access
            </button>
          </form>
        ) : (
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold text-green-400">You're in!</h2>
            <p>Thanks, Coach. We’ll reach out with your personalized GuruType AI demo soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
