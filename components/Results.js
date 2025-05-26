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

import '../styles/globals.css'; // Correct relative path

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Results({ scores }) {
  const data = {
    labels: ['D', 'I', 'S', 'C'],
    datasets: [
      {
        label: 'Your DISC Scores',
        data: [scores.D, scores.I, scores.S, scores.C],
        backgroundColor: ['#f44336', '#ffeb3b', '#4caf50', '#2196f3'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
      },
    },
  };

  const topType = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];

  const summaries = {
    D: {
      title: 'Dominance (D)',
      summary: 'You are direct, competitive, and results-driven.',
    },
    I: {
      title: 'Influence (I)',
      summary: 'You are enthusiastic, outgoing, and people-oriented.',
    },
    S: {
      title: 'Steadiness (S)',
      summary: 'You are dependable, calm, and supportive.',
    },
    C: {
      title: 'Conscientiousness (C)',
      summary: 'You are analytical, detail-focused, and value accuracy.',
    },
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Your DISC Personality Results</h2>
      <Bar data={data} options={options} />
      <div style={{ marginTop: '2rem' }}>
        <h3>{summaries[topType].title}</h3>
        <p>{summaries[topType].summary}</p>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <p>Want deeper insights and AI coaching?</p>
        <a
          href="https://gurutypeai.com/waitlist"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '5px',
            textDecoration: 'none',
          }}
        >
          Join the Waitlist
        </a>
      </div>
    </div>
  );
}
