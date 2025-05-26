import React from 'react'; import { Bar } from 'react-chartjs-2'; import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const guruImages = { D: '/tiger.jpg', // Dominance I: '/parrot.jpg', // Influence S: '/elephant.jpg', // Steadiness C: '/fox.jpg', // Conscientiousness };

const summaries = { D: { title: 'Dominance (D)', summary: 'You are decisive, assertive, and goal-driven. You thrive on overcoming challenges and leading the charge toward results.', }, I: { title: 'Influence (I)', summary: 'You are outgoing, enthusiastic, and a natural motivator. You bring energy to groups and inspire others with your optimism.', }, S: { title: 'Steadiness (S)', summary: 'You are dependable, cooperative, and loyal. You create harmony, offer support, and value consistency in relationships and environments.', }, C: { title: 'Conscientiousness (C)', summary: 'You are analytical, precise, and detail-oriented. You strive for accuracy, structure, and high standards in all that you do.', }, };

export default function Results({ discScores }) { const types = ['D', 'I', 'S', 'C']; const scores = { D: discScores[0], I: discScores[1], S: discScores[2], C: discScores[3], };

const data = { labels: types, datasets: [ { label: 'Your DISC Scores',

