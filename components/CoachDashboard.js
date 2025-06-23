import React from 'react';

export default function CoachDashboard() {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#0d0d0d', color: '#fff', fontFamily: 'sans-serif' }}>
      
      {/* Sidebar */}
      <aside style={{ width: '220px', backgroundColor: '#121212', padding: '2rem 1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>GURUTYPE AI</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="#" style={{ color: '#fff' }}>Dashboard</a>
          <a href="#" style={{ color: '#bbb' }}>Client Results</a>
          <a href="#" style={{ color: '#bbb' }}>Team Analyzer</a>
          <a href="#" style={{ color: '#bbb' }}>Coaching Journal</a>
          <a href="#" style={{ color: '#bbb' }}>AI Content Engine</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        {/* Welcome */}
        <section>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Welcome back!</h1>
          <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>Let’s help you support and grow your clients.</p>
          <button style={{ backgroundColor: '#6C5CE7', padding: '0.8rem 1.5rem', borderRadius: '10px', color: '#fff', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
            Create New Client
          </button>
        </section>

        {/* Grid Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          
          {/* Client Results Table */}
          <div style={{ backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Client Results</h3>
            <table style={{ width: '100%', fontSize: '0.9rem', color: '#eee' }}>
              <thead>
                <tr style={{ textAlign: 'left', color: '#aaa' }}>
                  <th>Client</th>
                  <th>DISC Type</th>
                  <th>Assessment Date</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>John Smith</td><td>D</td><td>Aug 20</td></tr>
                <tr><td>Lisa Brown</td><td>I</td><td>Jul 15</td></tr>
                <tr><td>Mark Wilson</td><td>S</td><td>Jun 30</td></tr>
                <tr><td>Sarah Lee</td><td>C</td><td>May 25</td></tr>
              </tbody>
            </table>
          </div>

          {/* Client Insights Chart Placeholder */}
          <div style={{ backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Client Insights</h3>
            <div style={{ height: '150px', backgroundColor: '#222', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
              [Chart Placeholder]
            </div>
          </div>

          {/* Analyze Team */}
          <div style={{ backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Analyze a Team</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Upload a team roster or survey results and see team dynamics + DISC compatibility.
            </p>
            <button style={{ backgroundColor: '#6C5CE7', padding: '0.6rem 1.2rem', borderRadius: '10px', color: '#fff', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
              Launch Tool
            </button>
          </div>

          {/* Coaching Journal */}
          <div style={{ backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Coaching Journal</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Guided journaling and AI prompts personalized to your clients.
            </p>
            <button style={{ backgroundColor: '#6C5CE7', padding: '0.6rem 1.2rem', borderRadius: '10px', color: '#fff', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
              Add Entry
            </button>
          </div>

        </div>
      </main>
    </div>
  );
            }
