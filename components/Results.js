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
  D: '/tiger.jpg',
  I: '/parrot.jpg',
  S: '/elephant.jpg',
  C: '/fox.jpg'
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

  const [coaching, setCoaching] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCoachingClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/coach', { type: topType });
      setCoaching(response.data.message);
    } catch (err) {
      console.error(err);
      setCoaching('There was an error retrieving your coaching insight.');
    }
    setLoading(false);
  };

  const chartData = {
    labels: types,
    datasets: [
      {
        label: 'DISC Scores',
        data: types.map((type) => scores[type]),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="results">
      <h2>Your DISC Style: {summaries[topType].title}</h2>
      <p>{summaries[topType].summary}</p>
      <img src={guruImages[topType]} alt={`${topType} Guru`} style={{ width: '200px' }} />
      <div style={{ marginTop: '2rem', width: '80%', maxWidth: '600px' }}>
        <Bar data={chartData} />
      </div>
      <button
        onClick={handleCoachingClick}
        disabled={loading}
        style={{ marginTop: '2rem', padding: '10px 20px' }}
      >
        {loading ? 'Generating...' : 'Get My Coaching Insights'}
      </button>
      {coaching && <p style={{ marginTop: '1rem' }}>{coaching}</p>}
    </div>
  );
}
