import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import '@/styles/globals.css';

export default function Results({ scores }) {
  const data = {
    labels: ['D', 'I', 'S', 'C'],
    datasets: [
      {
        label: 'Your DISC Style Scores',
        data: [scores.D, scores.I, scores.S, scores.C],
        backgroundColor: ['#f44336', '#ffeb3b', '#4caf50', '#2196f3'],
        borderWidth: 1,
      },
    ],
  };

  const maxScore = Math.max(scores.D, scores.I, scores.S, scores.C);
  const primaryType = Object.keys(scores).find(
    (key) => scores[key] === maxScore
  );

  const typeDescriptions = {
    D: {
      title: 'Dominance (D)',
      text: 'You thrive on results and challenges. You’re assertive, goal-oriented, and take charge in any situation.',
      color: '#f44336',
    },
    I: {
      title: 'Influence (I)',
      text: 'You inspire and energize others. You excel at communication, persuasion, and building relationships.',
      color: '#ffeb3b',
    },
    S: {
      title: 'Steadiness (S)',
      text: 'You bring calm, support, and consistency. You’re patient, empathetic, and a dependable team member.',
      color: '#4caf50',
    },
    C: {
      title: 'Conscientiousness (C)',
      text: 'You analyze and strive for precision. You value structure, accuracy, and doing things the right way.',
      color: '#2196f3',
    },
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">Your DISC Results</h1>
      <div className="bg-gray-900 p-4 rounded-xl shadow-md mb-4 w-full max-w-xl">
        <h2 className="text-xl font-semibold mb-1" style={{ color: typeDescriptions[primaryType].color }}>
          Your Primary Style: {typeDescriptions[primaryType].title}
        </h2>
        <p className="text-sm text-gray-300">
          {typeDescriptions[primaryType].text}
        </p>
      </div>

      <div className="bg-gray-900 p-4 rounded-xl shadow-md mb-6 w-full max-w-xl">
        <Bar data={data} />
      </div>

      <div className="grid gap-4 w-full max-w-xl">
        {Object.entries(typeDescriptions).map(([key, value]) => (
          <div
            key={key}
            className="bg-gray-800 p-4 rounded-lg border border-gray-700"
          >
            <h3 className="font-bold" style={{ color: value.color }}>
              {value.title}
            </h3>
            <p className="text-sm text-gray-300">{value.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400 mb-2">
          Want to dive deeper with your AI-powered DISC profile?
        </p>
        <a
          href="https://gurutype.ai/waitlist"
          className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200"
        >
          Join the Waitlist
        </a>
      </div>
    </div>
  );
}
