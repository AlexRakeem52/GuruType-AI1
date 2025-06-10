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

const TYPE_SYNOPSIS = {
  D: `You are a natural force of action. You face challenges head-on and don’t wait for permission to lead. Your confidence often influences those around you to move forward with bold decisions. You're competitive, results-driven, and demand progress. While you may overlook details in the pursuit of goals, your ability to inspire momentum is unmatched. Others look to you when it's time to take control. In high-pressure situations, you're the one who takes charge and keeps going.`,
  I: `You bring energy into every space you enter. Your enthusiasm, creativity, and charisma naturally attract others. You communicate with flair and easily win hearts with your optimism. People often see you as the spark in group dynamics. You love big-picture thinking, and you're most engaged when ideas are flowing freely. Though structure may slow you down, your passion makes you a powerful catalyst for movement. Your strength lies in influence, connection, and inspiration.`,
  S: `You are grounded and dependable. Others trust you because you provide consistency, empathy, and calm under pressure. You're not one to seek the spotlight, but your loyalty and stability are what hold teams together. You prefer harmony and tend to avoid unnecessary conflict. Patience is your superpower, and people appreciate your supportive nature. You thrive in structured environments where your thoughtful contributions are valued. Quiet strength defines you.`,
  C: `You have a mind that thrives on analysis and precision. Logic and accuracy are your foundation, and you’re often the one double-checking the details others miss. You are calm, rational, and methodical in your decision-making. Integrity and competence matter deeply to you. You're less concerned with speed and more with doing things the right way. Though you may appear reserved, your standards push everything — and everyone — to excellence. Your insight makes you indispensable.`
};

export default function Results() {
  const router = useRouter();
  const { type, scores } = router.query;
  const [chartData, setChartData] = useState([]);
  const [topType, setTopType] = useState(null);
  const [secondType, setSecondType] = useState(null);
  const [summary, setSummary] = useState('');

  useEffect(() => {
    if (scores) {
      const parsed = JSON.parse(scores);
      const sorted = Object.entries(parsed).sort((a, b) => b[1] - a[1]);

      const top = sorted[0]?.[0];
      const second = sorted[1]?.[0];
      const topScore = sorted[0]?.[1];
      const total = Object.values(parsed).reduce((sum, v) => sum + v, 0);

      setTopType(top);
      setSecondType(second);

      const data = sorted.map(([key, value]) => ({
        name: TYPE_LABELS[key],
        value,
        type: key
      }));
      setChartData(data);

      // Handcrafted logic for overall summary
      if (topScore / total >= 0.5) {
        setSummary(`Your personality is strongly aligned with ${TYPE_LABELS[top]} — this trait clearly shapes how you lead, communicate, and respond to the world around you.`);
      } else if (parsed[top] === parsed[second]) {
        setSummary(`You exhibit a blend of ${TYPE_LABELS[top]} and ${TYPE_LABELS[second]}, making you highly adaptable depending on the situation.`);
      } else if (Object.values(parsed).every(val => val === parsed[top])) {
        setSummary(`You have a balanced personality profile, showing equal tendencies across all four DISC traits — a true chameleon who can adjust to almost any team or task.`);
      } else {
        setSummary(`While your dominant style is ${TYPE_LABELS[top]}, you show noticeable strengths in other areas as well — making you versatile and multidimensional.`);
      }
    }
  }, [scores]);

  if (!topType || !TYPE_SYNOPSIS[topType]) {
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

      {/* Top Type Full Summary */}
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
        <p style={{ lineHeight: '1.6' }}>{TYPE_SYNOPSIS[topType]}</p>
      </div>

      {/* Overall Personality Insight */}
      <div style={{
        backgroundColor: '#2a2a2c',
        padding: '1.5rem',
        borderRadius: '10px',
        marginBottom: '2rem'
      }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
          Your overall personality profile:
        </h3>
        <p>{summary}</p>
      </div>

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
        <a href="/signup" style={{
          padding: '1rem 2rem',
          backgroundColor: '#6C5CE7',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Unlock your full report and get your AI coach
        </a>
      </div>
    </div>
  );
}
