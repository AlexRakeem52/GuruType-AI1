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
    <div style={{ padding: 30, backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
      <h1>Your DISC Results</h1>
      <Bar data={data} options={options} />

      <div style={{ marginTop: 40 }}>
        <h2>Your Top Style: {topType}</h2>
        <p>{descriptions[topType]}</p>
        <p style={{ marginTop: 10, fontStyle: 'italic' }}>{pointers[topType]}</p>

        <div style={{ marginTop: 40 }}>
          <h3>Want your own AI coach built for your DISC style?</h3>
          <p>We’re building something powerful. Join the waitlist to be first in line.</p>
          <a
            href="https://gurutypeai.carrd.co" // Change this to your actual waitlist URL
            target="_blank"
            rel="noopener noreferrer"
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
