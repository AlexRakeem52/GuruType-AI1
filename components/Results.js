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

export default function Results({ scores }) {
  if (!scores) {
    return <p>Loading results...</p>;
  }

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
      summary: 'You are sociable, persuasive, and optimistic.',
    },
    S: {
      title: 'Steadiness (S)',
      summary: 'You are calm, supportive, and patient.',
    },
    C: {
      title: 'Conscientiousness (C)',
      summary: 'You are analytical, detail-oriented, and precise.',
    },
  };

  const { title, summary } = summaries[topType];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your DISC Style: {title}</h2>
      <p>{summary}</p>
      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <Bar data={data} options={options} />
      </div>
      <p>Want to go deeper? Join the waitlist to unlock personalized coaching insights.</p>
      <a href="https://gurutypeai.com#waitlist" style={{
        display: 'inline-block',
        marginTop: '1rem',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#2196f3',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold'
      }}>
        Join the Waitlist
      </a>
    </div>
  );
}
