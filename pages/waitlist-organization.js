'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function WaitlistOrganization() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from('users').upsert([
      { email, full_name: name, role: 'organization' }
    ]);

    if (error) {
      console.error(error);
      alert('Something went wrong.');
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div style={{
      backgroundColor: '#0d0d0d',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '2rem',
      fontFamily: 'sans-serif'
    }}>
      {submitted ? (
        <h2>Thank you! Someone from our team will reach out shortly.</h2>
      ) : (
        <>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
            Lead an Organization?
          </h1>
          <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1rem', maxWidth: '500px' }}>
            Join the waitlist to access our team dashboard, DISC compatibility tools, and enterprise-ready AI insights.
          </p>
          <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1rem',
                borderRadius: '8px',
                border: '1px solid #444',
                backgroundColor: '#1a1a1a',
                color: '#fff'
              }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '1rem',
                borderRadius: '8px',
                border: '1px solid #444',
                backgroundColor: '#1a1a1a',
                color: '#fff'
              }}
            />
            <button type="submit" style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#6C5CE7',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Join Organization Waitlist
            </button>
          </form>
        </>
      )}
    </div>
  );
}
