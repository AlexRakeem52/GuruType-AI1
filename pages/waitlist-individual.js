// pages/waitlist-individual.js

import { useState } from 'react';

export default function WaitlistIndividual() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d0d] to-[#1f1f1f] text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-6 bg-[#111] p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center">Join the Demo Waitlist</h1>
        <p className="text-center text-sm text-gray-400">Enter your details to unlock your personalized DISC demo experience.</p>

        {!submitted ? (
          <form
            action="https://formspree.io/f/mnqknqkz"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-700 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#6C5CE7] hover:bg-[#5a4ed4] transition text-white font-semibold py-3 px-6 rounded-lg"
            >
              Join the Waitlist
            </button>
          </form>
        ) : (
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold text-green-400">You're on the list!</h2>
            <p>We’ll be in touch soon with your demo access. Get ready to meet your AI Coach.</p>
          </div>
        )}
      </div>
    </div>
  );
}
