import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { submitQuizResult } from '../lib/api/submitResults';

export default function Results() {
  const sessionHook = useSession();
  const session = sessionHook?.data;
  const status = sessionHook?.status;
  const router = useRouter();
  const { type, scores } = router.query;

  const parsedScores = scores ? JSON.parse(scores) : {};
  const topType = type || 'D';

  const chartData = {
    labels: ['Dominance', 'Influence', 'Steadiness', 'Conscientiousness'],
    datasets: [
      {
        data: [
          parsedScores.D || 0,
          parsedScores.I || 0,
          parsedScores.S || 0,
          parsedScores.C || 0,
        ],
        backgroundColor: ['#e74c3c', '#f1c40f', '#2ecc71', '#3498db'],
        borderColor: '#111',
        borderWidth: 2,
      },
    ],
  };

  const discDescriptions = {
    D: `You're direct, driven, and determined. You lead naturally and thrive in competitive environments. Challenges excite you, and you often take control in uncertain situations. People look to you for direction, and you're comfortable making quick decisions. You prioritize results over process, and you get things done. Your assertiveness can push boundaries—but that’s where innovation happens. You're often seen as a visionary, willing to take risks others won't. Your leadership style is bold, your expectations are high, and your drive is relentless. Be mindful not to bulldoze others—great leaders elevate everyone. When you pause to listen and collaborate, you become unstoppable. Your hunger to win, when paired with empathy, inspires loyalty and trust. Own your dominance—but wield it with wisdom.`,

    I: `You're enthusiastic, magnetic, and expressive. You naturally draw people in with charm, energy, and optimism. You thrive in social settings, love telling stories, and often lead with emotion. Influence is your superpower—others follow your vibe, not just your words. You enjoy being the spark in a room, turning mundane into memorable. While details and discipline may bore you, your creativity, speed, and people skills create rapid momentum. You thrive on affirmation, and your positivity often lifts teams. Just be careful not to overpromise or get distracted chasing the next exciting thing. When you combine your emotional intelligence with structure, you become a force of influence and impact. Your leadership shines brightest when you stay grounded and focused. Keep lighting up rooms—just bring a plan with you.`,

    S: `You're steady, thoughtful, and reliable. People feel safe and supported in your presence. You value loyalty, stability, and harmony. While you may avoid conflict, you're often the emotional anchor in teams and relationships. You don't seek the spotlight, but you're the one holding the foundation together. Consistency, patience, and empathy are your quiet superpowers. You're the listener when everyone else is speaking. Your calm demeanor diffuses tension, and your presence brings peace. At times, you may hesitate to assert yourself or take risks—but your leadership is no less powerful. When you trust your voice and take bold steps, people follow with faith. You're not flashy—but you're vital. Keep being the strength behind the scenes—just don’t be afraid to step into the center when it's time.`,

    C: `You're detail-driven, logical, and intentional. You seek excellence and precision in everything you do. Rules, data, and systems make you feel confident and capable. You’re often the person catching what everyone else missed. While others push forward, you pause, analyze, and optimize. This makes you incredibly valuable in complex environments. Your high standards push people to do better—though you may sometimes come across as overly critical. Emotions aren’t your first language, but your loyalty runs deep. You question assumptions, challenge vague ideas, and demand clarity. You build trust through integrity, not charisma. While spontaneity may be a stretch, your preparation gives teams stability. Perfectionism can slow you down—progress over precision is a growth edge. You're the architect, the analyst, the one who makes excellence real. Let your systems serve, not stifle—and you'll thrive.`,
  };

  const discColors = {
    D: '#e74c3c',
    I: '#f1c40f',
    S: '#2ecc71',
    C: '#3498db',
  };

  useEffect(() => {
    const saveResult = async () => {
      if (status !== 'authenticated' || !session?.user?.email) return;
      const email = session.user.email;
      await submitQuizResult(email, topType, parsedScores);
    };

    saveResult();
  }, [status, session]);

  return (
    <div
      style={{
        backgroundColor: '#0d0d0d',
        color: '#fff',
        minHeight: '100vh',
        padding: '2rem',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
        Your DISC Assessment Results
      </h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1rem' }}>
        Here's how your personality breaks down based on your answers:
      </p>

      {/* Chart */}
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Pie
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                labels: { color: '#fff' },
              },
            },
          }}
        />
      </div>

      {/* Description */}
      <div style={{ marginTop: '3rem', maxWidth: '700px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            color: discColors[topType] || '#fff',
          }}
        >
          Your Top Style: {topType} – {chartData.labels[['D', 'I', 'S', 'C'].indexOf(topType)]}
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#ccc' }}>
          {discDescriptions[topType]}
        </p>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a
          href="/signup"
          style={{
            backgroundColor: '#6C5CE7',
            padding: '1rem 2rem',
            borderRadius: '10px',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1rem',
            textDecoration: 'none',
            display: 'inline-block',
            maxWidth: '90%',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Unlock your full report and get your AI coach
        </a>
      </div>
    </div>
  );
}

// 👇 Prevents static pre-render crash
export const dynamic = 'force-dynamic';
