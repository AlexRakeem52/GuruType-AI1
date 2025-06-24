import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const discColors = {
  D: '#e74c3c',
  I: '#f1c40f',
  S: '#2ecc71',
  C: '#3498db',
};

const chartData = {
  labels: ['D', 'I', 'S', 'C'],
  datasets: [
    {
      label: 'Your DISC Breakdown',
      data: [25, 30, 25, 20], // Placeholder values
      backgroundColor: [discColors.D, discColors.I, discColors.S, discColors.C],
      borderColor: '#111',
      borderWidth: 2,
    },
  ],
};

const cardStyle = {
  backgroundColor: '#1a1a1a',
  borderRadius: '1rem',
  padding: '1.5rem',
  marginBottom: '1.5rem',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)',
};

const headerStyle = {
  fontSize: '1.75rem',
  fontWeight: 'bold',
  color: '#ffffff',
  marginBottom: '1rem',
  textAlign: 'center',
};

export default function IndividualDashboard() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#0d0d0d', color: '#fff', minHeight: '100vh' }}>
      <h1 style={headerStyle}>Welcome to Your Dashboard</h1>

      <div style={cardStyle}>
        <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Your Latest DISC Results</h2>
        <Pie data={chartData} />
        <p style={{ color: '#aaa', marginTop: '1rem' }}>Completed on: June 22, 2025</p>
      </div>

      <div style={cardStyle}>
        <h2 style={{ color: '#fff', marginBottom: '0.5rem' }}>AI Journal Summary</h2>
        <p style={{ color: '#ccc' }}>
          "Today you reflected on your strengths as a Conscientious leader and planned steps to improve team
          communication. Keep up the momentum!"
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={{ color: '#fff', marginBottom: '0.5rem' }}>Insight Usage</h2>
        <p style={{ color: '#ccc' }}>You've used <strong>4 of 15</strong> insights this week.</p>
      </div>
    </div>
  );
}
