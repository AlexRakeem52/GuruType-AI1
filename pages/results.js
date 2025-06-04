import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const descriptions = {
  D: "Direct and decisive. You move fast, take charge, and focus on results.",
  I: "People-focused and energetic. You thrive on interaction and influence.",
  S: "Steady and dependable. You value consistency, support, and relationships.",
  C: "Precise and analytical. You seek accuracy, logic, and clear standards."
};

const pointers = {
  D: "You like control — but teams thrive when others lead, too.",
  I: "Your energy inspires — just watch for missed details.",
  S: "You create stability — but don’t avoid needed change.",
  C: "You think deep — just don’t get stuck in perfection."
};

export default function Results() {
  const router = useRouter();
  const { D = 0, I = 0, S = 0, C = 0 } = router.query;

  const scores = { D: Number(D), I: Number(I), S: Number(S), C: Number(C) };
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [topType, topScore] = sorted[0];

  const [coaching, setCoaching] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCoachingRequest = async () => {
    setLoading(true);
    setCoaching('');
    try {
      const response = await axios.post('/api/coach', {
        type: topType,
        scores
      });
      setCoaching(response.data.message);
    } catch (error) {
      console.error('Coaching API error:', error);
      setCoaching('⚠️ There was an error retrieving your coaching insight.');
    }
    setLoading(false);
  };

  const data = {
    labels: ['D', 'I', 'S', 'C'],
    datasets: [
      {
        label: 'Your DISC Style Breakdown',
        data: [scores.D, scores.I, scores.S, scores.C],
        backgroundColor: ['#ff4444', '#ffbb33', '#00C851', '#33b5e5']
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Your DISC Profile' }
    },
    scales: {
      y: { beginAtZero: true, max: 100 }
    }
  };

  return (
    <div style={{ padding: 30, backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
      <h1>Your DISC Style: {topType}</h1>
      <p>{descriptions[topType]}</p>
      <p style={{ fontStyle: 'italic' }}>{pointers[topType]}</p>

      <Bar data={data} options={options} style={{ marginTop: 30 }} />

      <div style={{ marginTop: 40 }}>
        <button
          onClick={handleCoachingRequest}
          style={{
            backgroundColor: '#fff',
            color: '#000',
            padding: '10px 20px',
            border: 'none',
            borderRadius: 6,
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          {loading ? 'Getting Insight...' : 'Get My Coaching Insights'}
        </button>

        {coaching && (
          <p style={{ marginTop: 20, fontSize: 16 }}>{coaching}</p>
        )}
      </div>

      <div style={{ marginTop: 50 }}>
        <h3>Want a full breakdown of your DISC style and coaching insights?</h3>
        <a
          href="https://gurutypeai.carrd.co"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: 10,
            padding: '10px 20px',
            backgroundColor: '#33b5e5',
            color: '#111',
            borderRadius: 6,
            fontWeight: 'bold',
            textDecoration: 'none'
          }}
        >
          Join the Waitlist
        </a>
      </div>
    </div>
  );
}
