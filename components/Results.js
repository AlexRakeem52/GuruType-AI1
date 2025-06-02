import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const guruImages = {
  D: '/tiger.jpg',        // Dominance
  I: '/parrot.jpg',       // Influence
  S: '/elephant.jpg',     // Steadiness
  C: '/fox.jpg',          // Conscientiousness
};

const summaries = {
  D: {
    title: 'Dominance (D)',
    summary:
      'You are decisive, assertive, and goal-driven. You thrive on overcoming challenges and leading the charge toward results.',
  },
  I: {
    title: 'Influence (I)',
    summary:
      'You are outgoing, enthusiastic, and a natural motivator. You bring energy to groups and inspire others with your optimism.',
  },
  S: {
    title: 'Steadiness (S)',
    summary:
      'You are dependable, cooperative, and loyal. You create harmony, offer support, and value consistency in relationships and environments.',
  },
  C: {
    title: 'Conscientiousness (C)',
    summary:
      'You are analytical, precise, and detail-oriented. You strive for accuracy, structure, and high standards in all that you do.',
  },
};

export default function Results({ discScores }) {
  const [topType, setTopType] = useState(null);
  const [aiResponse, setAiResponse] = useState('');
  const types = ['D', 'I', 'S', 'C'];

  useEffect(() => {
    const scores = {
      D: discScores[0],
      I: discScores[1],
      S: discScores[2],
      C: discScores[3],
    };
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const isTie = sorted[0][1] === sorted[1][1];
    setTopType(isTie ? null : sorted[0][0]);

    if (!isTie) {
      fetch('/api/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topType: sorted[0][0] }),
      })
        .then(res => res.json())
        .then(data => setAiResponse(data.message))
        .catch(() => setAiResponse('Something went wrong. Please try again.'));
    }
  }, [discScores]);

  const data = {
    labels: ['Dominance', 'Influence', 'Steadiness', 'Conscientiousness'],
    datasets: [
      {
        label: 'DISC Results',
        data: discScores,
        backgroundColor: ['#f87171', '#60a5fa', '#34d399', '#fbbf24'],
      },
    ],
  };

  return (
    <div className="text-center text-white max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your DISC Breakdown</h2>
      <Bar data={data} options={{ responsive: true, plugins: { legend: { display: false } } }} />

      {topType ? (
        <>
          <img
            src={guruImages[topType]}
            alt={summaries[topType].title}
            className="w-32 h-32 mx-auto mt-6 rounded-full border-4 border-white"
          />
          <h3 className="text-xl font-semibold mt-4">{summaries[topType].title}</h3>
          <p className="mt-2 text-lg">{summaries[topType].summary}</p>

          {aiResponse && (
            <div className="mt-4 p-4 bg-gray-800 rounded">
              <p className="font-semibold text-blue-400">AI Coaching Insight:</p>
              <p className="mt-2">{aiResponse}</p>
            </div>
          )}
        </>
      ) : (
        <p className="mt-4 text-lg">
          You have a balanced profile across multiple DISC styles. Want a deeper breakdown? Join our waitlist!
        </p>
      )}

      <a
        href="#"
        className="mt-6 inline-block bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-500 transition"
      >
        Join the Waitlist
      </a>
    </div>
  );
}
