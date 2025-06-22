import { useState } from 'react';
import { useRouter } from 'next/router';

export default function WaitlistIndividual() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setSubmitted(true);
        router.push('/quiz'); // Redirect to demo quiz
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting form.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6">
      <div className="max-w-lg w-full bg-[#1a1a1a] p-8 rounded-xl shadow-lg border border-gray-700 text-center">
        <h1 className="text-3xl font-bold mb-4">Ready to Discover Your Style?</h1>
        <p className="text-gray-300 mb-6">
          Take the GuruType AI demo to explore your DISC personality breakdown and unlock your AI coaching path.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
            <input
              required
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-900 border border-gray-600 text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
            <input
              required
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-900 border border-gray-600 text-white"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded transition"
          >
            {submitting ? 'Submitting...' : 'Take Demo'}
          </button>
        </form>
      </div>
    </div>
  );
}
