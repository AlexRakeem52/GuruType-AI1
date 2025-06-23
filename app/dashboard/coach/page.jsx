// pages/dashboard/coach.js

import React from 'react';
import { useRouter } from 'next/router';

export default function CoachDashboard() {
  const router = useRouter();

  return (
    <div style={{ display: 'flex', backgroundColor: '#0d0d0d', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#1a1a1a', padding: '2rem', minHeight: '100vh' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '2rem' }}>GURUTYPE AI</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="#" style={navLink}>Dashboard</a>
          <a href="#" style={navLink}>Client Results</a>
          <a href="#" style={navLink}>Team Analyzer</a>
          <a href="#" style={navLink}>Coaching Journal</a>
          <a href="#" style={navLink}>AI Content Engine</a>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '2rem' }}>Welcome back!</h1>
          <button style={button}>Create New Client</button>
        </div>
        <p style={{ marginTop: '0.5rem', color: '#bbb' }}>
          Let’s help you support and grow your clients.
        </p>

        {/* Client Results */}
        <div style={{ marginTop: '2rem', backgroundColor: '#1f1f1f', padding: '1.5rem', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Client Results</h2>
          <table style={{ width: '100%', color: '#fff' }}>
            <thead>
              <tr>
                <th style={tableHeader}>Client</th>
                <th style={tableHeader}>DISC Type</th>
                <th style={tableHeader}>Assessment Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['John Smith', 'D', 'Aug 20'],
                ['Lisa Brown', 'I', 'Jul 15'],
                ['Mark Wilson', 'S', 'Jun 30'],
                ['Sarah Lee', 'C', 'May 25'],
              ].map(([name, type, date], i) => (
                <tr key={i}>
                  <td style={tableCell}>{name}</td>
                  <td style={tableCell}>{type}</td>
                  <td style={tableCell}>{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
          <div style={panel}>
            <h3 style={panelTitle}>Client Insights</h3>
            <div style={{ height: '100px', background: '#333', borderRadius: '8px', marginTop: '1rem' }}></div>
          </div>

          <div style={panel}>
            <h3 style={panelTitle}>Analyze a Team</h3>
            <p style={panelText}>Upload a team roster or survey results and see team dynamics + DISC compatibility.</p>
            <button style={button}>Launch Tool</button>
          </div>

          <div style={panel}>
            <h3 style={panelTitle}>Coaching Journal</h3>
            <p style={panelText}>Guided journaling and AI prompts personalized to your clients.</p>
            <button style={button}>Add Entry</button>
          </div>

          <div style={panel}>
            <h3 style={panelTitle}>AI Content Engine</h3>
            <p style={panelText}>Generate content, emails, and docs tailored by DISC style and coaching goals.</p>
            <button style={button}>Try It</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const navLink = {
  color: '#bbb',
  textDecoration: 'none',
  fontWeight: 'bold',
  padding: '0.5rem 0',
};

const button = {
  backgroundColor: '#6C5CE7',
  border: 'none',
  padding: '0.7rem 1.5rem',
  color: '#fff',
  fontWeight: 'bold',
  borderRadius: '8px',
  cursor: 'pointer',
};

const panel = {
  backgroundColor: '#1f1f1f',
  padding: '1.5rem',
  borderRadius: '10px',
};

const panelTitle = {
  fontSize: '1.1rem',
  marginBottom: '0.5rem',
  color: '#fff',
};

const panelText = {
  fontSize: '0.9rem',
  color: '#ccc',
  marginBottom: '1rem',
};

const tableHeader = {
  textAlign: 'left',
  padding: '0.5rem 0',
  color: '#ccc',
  borderBottom: '1px solid #444',
};

const tableCell = {
  padding: '0.5rem 0',
  borderBottom: '1px solid #333',
};
