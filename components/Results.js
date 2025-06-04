import React, { useEffect, useState } from 'react'; import axios from 'axios'; import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js'; import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const guruImages = { D: '/tiger.jpg', I: '/parrot.jpg', S: '/elephant.jpg', C: '/fox.jpg', };

const summaries = { D: { title: 'Dominance (D)', summary: 'You are decisive, assertive, and goal-driven. You thrive on overcoming challenges and leading the charge toward results.', }, I: { title: 'Influence (I)', summary: 'You are outgoing, enthusiastic, and a natural motivator. You bring energy to groups and inspire others with your optimism.', }, S: { title: 'Steadiness (S)', summary: 'You are dependable, cooperative, and loyal. You create harmony, offer support, and value consistency in relationships and environments.', }, C: { title: 'Conscientiousness (C)', summary: 'You are analytical, precise, and detail-oriented. You strive for accuracy, structure, and high standards in all that you do.', }, };

export default function Results({ discScores }) { const [aiAdvice, setAiAdvice] = useState(''); const [loading, setLoading] = useState(false);

const scores = { D: discScores[0], I: discScores[1], S: discScores[2], C: discScores[3], };

const topType = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]; const { title, summary } = summaries[topType]; const guruImage = guruImages[topType];

const data = { labels: ['D', 'I', 'S', 'C'], datasets: [ { label: 'Your DISC Scores', data: discScores, backgroundColor: '#66b2ff', }, ], };

const options = { responsive: true, scales: { y: { beginAtZero: true, max: 100, }, }, };

const fetchCoachingAdvice = async () => { setLoading(true); try { const response = await axios.post('/api/coach', { type: topType, scores, }); setAiAdvice(response.data.advice); } catch (error) { setAiAdvice('There was an error getting your advice.'); } setLoading(false); };

return ( <div className="min-h-screen bg-black text-white p-4 text-center"> <h1 className="text-2xl font-bold mb-4">Your DISC Style Results</h1> <Bar data={data} options={options} />

<div className="mt-6">
    <img
      src={guruImage}
      alt={topType}
      className="mx-auto mb-4 max-w-xs rounded"
    />
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="mb-4">{summary}</p>

    <button
      onClick={fetchCoachingAdvice}
      className="bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-500 transition mb-4"
      disabled={loading}
    >
      {loading ? 'Loading advice...' : 'Get My Coaching Insights'}
    </button>

    {aiAdvice && <p className="mt-4 text-lg italic">{aiAdvice}</p>}
  </div>

  <div className="mt-6">
    <p className="text-lg">Want a full breakdown of your DISC style and coaching insights?</p>
    <a
      href="#"
      className="mt-2 inline-block text-blue-400 hover:underline"
    >
      Join the Waitlist
    </a>
  </div>
</div>

); }

