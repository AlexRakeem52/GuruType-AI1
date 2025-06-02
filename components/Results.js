import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const guruImages = {
  D: '/tiger.jpg',      // Dominance
  I: '/parrot.jpg',     // Influence
  S: '/elephant.jpg',   // Steadiness
  C: '/fox.jpg',        // Conscientiousness
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
  const types = ['D', 'I', 'S', 'C'];
  const scores = {
    D: discScores[0],
    I: discScores[1],
    S: discScores[2],
    C: discScores[3],
  };

  const topType = types.reduce((a, b) => (scores[a] > scores[b] ? a : b));

  const chartData = {
    labels: ['Dominance', 'Influence', 'Steadiness', 'Conscientiousness'],
    datasets: [
      {
        label: 'Your DISC Style',
        data: discScores,
        backgroundColor: ['#f87171', '#60a5fa', '#34d399', '#facc15'],
      },
    ],
  };

  return (
    <div className="bg-black text-white p-6 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Your Results</h2>
      <Bar data={chartData} />
      <div className="mt-6">
        <img
          src={guruImages[topType]}
          alt={topType}
          className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg"
        />
        <h3 className="text-xl font-semibold mt-4">{summaries[topType].title}</h3>
        <p className="mt-2 text-sm text-gray-300">{summaries[topType].summary}</p>
      </div>
      <a
        href="#"
        className="mt-6 inline-block bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-500 transition"
      >
        Join the Waitlist
      </a>
    </div>
  );
}
