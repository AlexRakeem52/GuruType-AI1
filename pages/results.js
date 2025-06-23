import { useRouter } from 'next/router';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import { saveResultsToSupabase } from '../lib/supabase';

export default function Results() {
  const router = useRouter();
  const { type, scores, email, coachEmail } = router.query;
  const parsedScores = scores ? JSON.parse(scores) : {};
  const topType = type || 'D';

  useEffect(() => {
    if (email && topType && parsedScores) {
      saveResultsToSupabase({
        email,
        topType,
        scores: parsedScores,
        coachEmail: coachEmail || null,
      });
    }
  }, [email, topType, parsedScores, coachEmail]);

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
        backgroundColor: ['#e74c3c', '#f1c40f', '#2ecc71', '#3498db'], // D, I, S, C
        borderColor: '#111',
        borderWidth: 2,
      },
    ],
  };

  const discDescriptions = {
    D: "You're direct, driven, and determined. You lead naturally and thrive in competitive environments. Challenges excite you, and you often take control in uncertain situations. People look to you for direction, and you're comfortable making quick decisions. You prioritize results over process, and you get things done. Your assertiveness can push boundaries—but that’s where innovation happens. Just be mindful to slow down when needed and listen more than you talk.",
    I: "You're enthusiastic, inspiring, and magnetic. You light up a room and thrive on social energy. You’re a natural communicator who builds rapport quickly. Vision and positivity drive you—and you often influence others through stories and charm. You may struggle with structure or follow-through, but your creativity and optimism are contagious. When balanced with discipline, you're an unstoppable force.",
    S: "You're dependable, thoughtful, and grounded. People feel safe around you. You value harmony and loyalty and tend to avoid conflict. While you might not seek the spotlight, your consistency is your superpower. You’re often the glue holding relationships and teams together. With more self-assertion, you can step into bigger leadership roles without sacrificing your calm center.",
    C: "You're analytical, detail-driven, and highly focused. Precision matters to you. You like logic, data, and structure—and you thrive in environments where things can be optimized. While others chase energy, you chase excellence. You may hesitate in ambiguous situations, but once clear, your insight is unmatched. Just remember: not everything needs to be perfect to be powerful.",
  };

  const discColors = {
    D: '#e74c3c',
    I: '#f1c40f',
    S: '#2ecc71',
    C: '#3498db',
  };

  return (
    <div style={{ backgroundColor: '#0d0d0d', color: '#fff', minHeight: '100vh', padding: '2rem', fontFamily: 'sans-serif' }}>
      
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
        Your DISC Assessment Results
      </h1>

      {/* Section 1: Breakdown */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.25rem', textAlign: 'center', marginBottom: '1rem' }}>
          1. Your DISC Breakdown
        </h2>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <Pie data={chartData} options={{
            responsive: true,
            plugins: {
              legend: {
                labels: { color: '#fff' },
              },
            },
          }} />
        </div>
      </section>

      {/* Section 2: Top Style Summary */}
      <section style={{ marginBottom: '3rem', maxWidth: '700px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: discColors[topType] || '#fff' }}>
          2. Your Top Style: {topType}
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#ccc' }}>
          {discDescriptions[topType]}
        </p>
      </section>

      {/* Section 3: Call to Action */}
      <section style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
          3. Unlock Full Insights
        </h2>
        <p style={{ marginBottom: '1rem', fontSize: '1rem', color: '#bbb' }}>
          Ready to dive deeper? Sign up to unlock your full report and get matched with your personalized AI coach.
        </p>
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
          Unlock Your AI Coach
        </a>
      </section>
    </div>
  );
}
