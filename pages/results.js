import { Bar } from 'react-chartjs-2';
import { useRouter } from 'next/router';
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

const insights = {
  D: `You are a driven, results-oriented individual who values speed, action, and decisiveness. You excel when leading projects, setting ambitious goals, and cutting through distractions. Others admire your strength and courage, even if they sometimes feel overwhelmed by your intensity. You thrive in competitive environments and enjoy tackling challenges head-on. However, it’s important to slow down occasionally to listen to others’ input. Team members may have valuable insights that align with your vision. You're at your best when balancing confidence with collaboration. Growth comes from recognizing that control isn’t always power—sometimes it's influence. Stay mindful of being overly direct or dismissive. When you harness your drive with empathy, you're unstoppable.`,
  I: `You are charismatic, energetic, and socially driven—your presence lights up any room. You bring creativity, enthusiasm, and emotional intelligence to every interaction. People naturally gravitate toward your optimistic energy. Your communication style makes others feel seen and heard, which is a gift. At times, your spontaneity can lead to missed details or unkept commitments. Focusing your energy and planning ahead will amplify your impact. You're most fulfilled when inspiring others, whether through storytelling, leadership, or collaboration. Balance your need for variety with follow-through. You can achieve great things by grounding your ideas in action. Stay intentional with your time, and your natural influence will change lives.`,
  S: `You are supportive, patient, and thoughtful—someone who brings calm and dependability to every space. People trust you because of your loyalty and consistent follow-through. You value stability, harmony, and authentic connection. You listen deeply and take the time to consider everyone’s needs. Change and conflict may feel uncomfortable, but your voice matters in every room. Leaning into discomfort can spark powerful growth. You’re often the backbone of teams and families, providing a steady force in the background. Make sure your own needs don’t get lost while caring for others. Stand firm in your ideas—you have wisdom worth sharing. When you balance kindness with confidence, you become a true grounding presence.`,
  C: `You are analytical, detail-oriented, and highly principled. Accuracy, structure, and high standards guide your decision-making. You’re at your best when solving problems, creating systems, or refining processes. People look to you for thoughtful, well-reasoned insights. At times, your quest for perfection may lead to overthinking or hesitation. Progress often beats perfection—done is better than perfect. You thrive when you have time, space, and clarity. Learning to embrace ambiguity will stretch you into new levels of leadership. When you balance logic with trust in others, your excellence becomes transformative. You elevate everything you touch with your precision and integrity.`
};

export default function Results() {
  const router = useRouter();
  const { D, I, S, C } = router.query;

  const scores = {
    D: parseInt(D) || 0,
    I: parseInt(I) || 0,
    S: parseInt(S) || 0,
    C: parseInt(C) || 0
  };

  const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a);
  const [topType] = sorted[0];

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
      y: { beginAtZero: true, max: 5 }
    }
  };

  return (
    <div style={{
      padding: 30,
      backgroundColor: '#111',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: 20 }}>Your DISC Results</h1>

      <div style={{ maxWidth: 600, width: '100%' }}>
        <Bar data={data} options={options} />
      </div>

      <div style={{ marginTop: 40, textAlign: 'center', maxWidth: 700 }}>
        <h2 style={{ fontSize: '1.5rem' }}>Top Style: {topType}</h2>
        <p style={{ marginTop: 20, lineHeight: 1.7 }}>{insights[topType]}</p>

        <div style={{ marginTop: 40 }}>
          <h3 style={{ fontSize: '1.2rem' }}>Want your own AI coach built for your DISC style?</h3>
          <p style={{ marginTop: 10 }}>We’re building something powerful. Join the waitlist to be first in line.</p>
          <a
            href="/waitlist"
            style={{
              display: 'inline-block',
              marginTop: 20,
              padding: '12px 24px',
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
    </div>
  );
}
