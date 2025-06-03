// components/Results.js

import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
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
  D: '/tiger.jpg',      // Dominance
  I: '/parrot.jpg',     // Influence
  S: '/elephant.jpg',   // Steadiness
  C: '/fox.jpg',        // Conscientiousness
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

  const topType = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const { title, summary } = summaries[topType];
  const guruImage = guruImages[topType];

  const data = {
    labels: types,
    datasets: [
      {
        label: 'DISC Scores',
        data: types.map(type => scores[type]),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const [insights, setInsights] = useState('');
  const [loading, setLoading] = useState(false);

  const getCoachingInsights = async () => {
    try {
      setLoading(true);
      const res = await axios.post('/api/coach', { topType });
      setInsights(res.data.message);
    } catch (err) {
      setInsights('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
      <h1>Your DISC Results</h1>
      <Bar data={data} options={options} />
      <h2 style={{ marginTop: '2rem' }}>{title}</h2>
      <p>{summary}</p>
      <img src={guruImage} alt={`${title} Guru`} style={{ width: '200px', marginTop: '1rem' }} />
      <button
        onClick={getCoachingInsights}
        style={{
          marginTop: '2rem',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '8px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
        }}
      >
        {loading ? 'Loading...' : 'Get My Coaching Insights'}
      </button>
      {insights && <p style={{ marginTop: '1rem' }}>{insights}</p>}
    </div>
  );
}
