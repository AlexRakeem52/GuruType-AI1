import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const guruImages = {
  D: '/tiger.jpg',       // Dominance
  I: '/parrot.jpg',      // Influence
  S: '/elephant.jpg',    // Steadiness
  C: '/fox.jpg',         // Conscientiousness
};

const summaries = {
  D: {
    title: 'Dominance (D)',
    summary: 'You are decisive, assertive, and goal-driven. You thrive on overcoming challenges and leading the charge toward results.',
  },
  I: {
    title: 'Influence (I)',
    summary: 'You are outgoing, enthusiastic, and a natural motivator. You bring energy to groups and inspire others with your optimism.',
  },
  S: {
    title: 'Steadiness (S)',
    summary: 'You are dependable, cooperative, and loyal. You create harmony, offer support, and value consistency in relationships and environments.',
  },
  C: {
    title: 'Conscientiousness (C)',
    summary: 'You are analytical, precise, and detail-oriented. You strive for accuracy, structure, and high standards in all that you do.',
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
  const data = {
    labels: types,
    datasets: [
      {
        label: 'Your DISC Scores',
        data: [scores.D, scores.I, scores.S, scores.C],
        backgroundColor: ['#f44336', '#ffeb3b', '#4caf50', '#2196f3'],
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="flex flex-col items-center text-white">
      <div className="w-full max-w-md">
        <Bar data={data} options={options} />
      </div>

      <div className="mt-6 text-center">
        <img
          src={guruImages[topType]}
          alt={`${topType} Guru`}
          className="mx-auto w-40 h-40 object-contain rounded-full border-4 border-white mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{summaries[topType].title}</h2>
        <p className="mb-4">{summaries[topType].summary}</p>
        <a
          href="#"
          className="inline-block bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-500 transition"
        >
          Join the Waitlist
        </a>
      </div>
    </div>
  );
}
