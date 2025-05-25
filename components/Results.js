import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import '../styles/globals.css'; // Corrected path

export default function Results({ scores }) {
  const data = {
    labels: ['D', 'I', 'S', 'C'],
    datasets: [
      {
        label: 'Your DISC Style Scores',
        data: [scores.D, scores.I, scores.S, scores.C],
        backgroundColor: ['#f44336', '#ffeb3b', '#4caf50', '#2196f3'],
        borderWidth: 1,
      },
    ],
  };

  const type = Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  const descriptions = {
    D: 'You are driven, direct, and results-oriented.',
    I: 'You are inspiring, sociable, and enthusiastic.',
    S: 'You are supportive, dependable, and loyal.',
    C: 'You are careful, detail-oriented, and analytical.',
  };

  const tips = {
    D: ['Lead with impact, but listen more.', 'Delegate and trust others.'],
    I: ['Channel your energy into clear goals.', 'Follow through on commitments.'],
    S: ['Speak up and assert your ideas.', 'Adapt to fast-changing environments.'],
    C: ['Avoid overanalyzing.', 'Embrace progress over perfection.'],
  };

  return (
    <div style={{ padding: '2rem', color: '#fff' }}>
      <h2>Your DISC Type: {type}</h2>
      <p>{descriptions[type]}</p>

      <h3>Quick Tips:</h3>
      <ul>
        {tips[type].map((tip, idx) => (
          <li key={idx}>{tip}</li>
        ))}
      </ul>

      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <Bar data={data} />
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>Want deeper insight and an AI-powered coaching experience?</p>
        <a
          href="https://your-waitlist-link.com"
          style={{
            background: '#2196f3',
            padding: '10px 20px',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          Join the Waitlist
        </a>
      </div>
    </div>
  );
}
