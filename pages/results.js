import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
import Logo from '../public/logo.png';

const COLORS = {
  D: '#E74C3C',
  I: '#F1C40F',
  S: '#2ECC71',
  C: '#3498DB'
};

const TYPE_LABELS = {
  D: 'Dominance',
  I: 'Influence',
  S: 'Steadiness',
  C: 'Conscientiousness'
};

const TYPE_DESCRIPTIONS = {
  D: 'You’re a natural leader — decisive, bold, and results-oriented. You thrive in fast-paced environments and enjoy taking charge.',
  I: 'You’re enthusiastic and social — full of energy, optimism, and charm. You inspire others and love being around people.',
  S: 'You’re dependable and loyal — patient, calm, and supportive. You prioritize relationships and steady progress.',
  C: 'You’re analytical and precise — focused on quality, logic, and accuracy. You prefer structure and value thoughtful decisions.'
};

export default function Results() {
  const router = useRouter();
  const { type, scores } = router.query;
  const [chartData, setChartData] = useState([]);
  const [topType, setTopType] = useState(null);
  const [secondType, setSecondType] = useState(null);

  useEffect(() => {
    if (scores) {
      const parsed = JSON.parse(scores);
      const sorted = Object.entries(parsed).sort((a, b) => b[1] - a[1]);

      const top = sorted[0]?.[0];
      const second = sorted[1]?.[0];

      setTopType(top);
      setSecondType(second);

      const data = sorted.map(([key, value]) => ({
        name: TYPE_LABELS[key],
        value,
        type: key
      }));

      setChartData(data);
    }
  }, [scores]);

  if (!topType || !TYPE_DESCRIPTIONS[topType]) {
    return <p style={{ padding: '2rem', color: 'white' }}>Loading results...</p>;
  }

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#0d0d0d',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: 'sans-serif'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
        <Image src={Logo} alt="GuruType AI Logo" width={40} height={40} />
        <h1 style={{ marginLeft: '0.75rem', fontSize: '1.75rem' }}>GURUTYPE AI RESULTS</h1>
      </div>

      {/* Top Type Summary */}
      <div style={{
        backgroundColor: '#1c1c1e',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(255,255,255,0.1)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          Your dominant type: {TYPE_LABELS[topType]} ({topType})
        </h2>
        <p>{TYPE_DESCRIPTIONS[topType]}</p>
      </div>

      {/* Second Type Insight */}
      {secondType && TYPE_DESCRIPTIONS[secondType] && (
        <div style={{
          backgroundColor: '#2a2a2c',
          padding: '1.5rem',
          borderRadius: '10px',
          marginBottom: '2rem'
        }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
            You also scored high in {TYPE_LABELS[secondType]} ({secondType})
          </h3>
          <p>{TYPE_DESCRIPTIONS[secondType]}</p>
        </div>
      )}

      {/* Chart */}
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={({ name }) => name}
            >
              {chartData.map((entry) => (
                <Cell key={entry.type} fill={COLORS[entry.type]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* CTA */}
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <a href="https://gurutypeai.com" style={{
          padding: '1rem 2rem',
          backgroundColor: '#6C5CE7',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Join the Waitlist for Coaching Insights
        </a>
      </div>
    </div>
  );
}
