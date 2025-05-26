import React from 'react'; import { Bar } from 'react-chartjs-2'; import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Results({ discScores }) { const labels = ['D', 'I', 'S', 'C'];

const data = { labels, datasets: [ { label: 'Your DISC Scores', data: discScores, backgroundColor: ['#f44336', '#ffeb3b', '#4caf50', '#2196f3'], borderWidth: 1, }, ], };

const options = { responsive: true, scales: { y: { beginAtZero: true, max: 100, }, }, };

const topIndex = discScores.indexOf(Math.max(...discScores)); const topType = labels[topIndex];

const summaries = { D: { title: 'Dominance (D)', summary: 'You are direct, competitive, and results-driven.', }, I: { title: 'Influence (I)', summary: 'You are outgoing, persuasive, and energetic.', }, S: { title: 'Steadiness (S)', summary: 'You are calm, loyal, and a great team player.', }, C: { title: 'Conscientiousness (C)', summary: 'You are analytical, precise, and quality-focused.', }, };

const { title, summary } = summaries[topType];

return ( <div className="text-center text-white"> <h2 className="text-2xl font-bold mb-4">Your DISC Result: {title}</h2> <p className="mb-4">{summary}</p> <div className="mb-6"> <Bar data={data} options={options} /> </div> <p className="text-lg mb-2"> Want a full breakdown of your DISC style and coaching insights? </p> <a
href="#"
className="inline-block bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-500 transition"
> Join the Waitlist </a> </div> ); }

