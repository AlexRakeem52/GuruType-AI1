import React from 'react'; import { Bar } from 'react-chartjs-2'; import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const guruImages = { D: '/tiger.jpg',      // Dominance I: '/parrot.jpg',     // Influence S: '/elephant.jpg',   // Steadiness C: '/fox.jpg',        // Conscientiousness };

const summaries = { D: { title: 'Dominance (D)', summary: 'You are decisive, assertive, and goal-driven. You thrive on overcoming challenges and leading the charge toward results.', }, I: { title: 'Influence (I)', summary: 'You are outgoing, enthusiastic, and a natural motivator. You bring energy to groups and inspire others with your optimism.', }, S: { title: 'Steadiness (S)', summary: 'You are dependable, cooperative, and loyal. You create harmony, offer support, and value consistency in relationships and environments.', }, C: { title: 'Conscientiousness (C)', summary: 'You are analytical, precise, and detail-oriented. You strive for accuracy, structure, and high standards in all that you do.', }, };

export default function Results({ discScores }) { const types = ['D', 'I', 'S', 'C']; const scores = { D: discScores[0], I: discScores[1], S: discScores[2], C: discScores[3], };

const topType = types.reduce((a, b) => (scores[a] > scores[b] ? a : b)); const { title, summary } = summaries[topType]; const image = guruImages[topType];

const chartData = { labels: ['D', 'I', 'S', 'C'], datasets: [ { label: 'Your DISC Style Breakdown', data: discScores, backgroundColor: ['#f87171', '#60a5fa', '#34d399', '#fbbf24'], borderRadius: 6, }, ], };

const chartOptions = { responsive: true, plugins: { legend: { display: false }, title: { display: false }, }, scales: { y: { beginAtZero: true, max: 100 }, }, };

return ( <div className="text-white p-6 max-w-2xl mx-auto"> <h2 className="text-2xl font-bold mb-4">Your Primary Style: {title}</h2> <img src={image} alt={topType + ' Guru'} className="w-40 h-40 mx-auto rounded-full border-4 border-white shadow mb-4" /> <p className="text-lg text-center mb-6">{summary}</p>

<div className="bg-white p-4 rounded-xl mb-6">
    <Bar data={chartData} options={chartOptions} />
  </div>

  <p className="text-center text-lg mb-4">
    Want a full breakdown of your DISC style and AI-powered coaching?
  </p>
  <a
    href="#"
    className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition"
  >
    Join the Waitlist
  </a>
</div>

); }
