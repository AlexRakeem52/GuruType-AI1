import React from 'react';

const cardStyle = {
  backgroundColor: '#1a1a1a',
  borderRadius: '1rem',
  padding: '1.5rem',
  marginBottom: '1.5rem',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)',
  textAlign: 'center',
  flex: 1,
};

export default function OrganizationDashboard() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#0d0d0d', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
        Organization Overview
      </h1>

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={cardStyle}>
          <h2 style={{ color: '#f1c40f' }}>Total Users</h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>86</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: '#2ecc71' }}>Teams</h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>5 Active</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: '#3498db' }}>Avg. DISC Balance</h2>
          <p style={{ fontSize: '1rem' }}>D: 24%, I: 28%, S: 26%, C: 22%</p>
        </div>
      </div>

      <div style={{ ...cardStyle, marginTop: '2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Recent Activity</h2>
        <ul style={{ color: '#ccc' }}>
          <li>New team "Ops United" created by Coach Lisa.</li>
          <li>4 new members onboarded this week.</li>
          <li>AI insights generated for Team Phoenix.</li>
        </ul>
      </div>
    </div>
  );
}
