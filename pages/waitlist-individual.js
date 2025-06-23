'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';

export default function WaitlistIndividual() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Insert user into Supabase
      const { error: insertError } = await supabase.from('users').upsert([
        { email, full_name: name }
      ]);

      if (insertError) throw insertError;

      // Update the user's role to "individual"
      const { error: roleError } = await supabase
        .from('users')
        .update({ role: 'individual' })
        .eq('email', email);

      if (roleError) throw roleError;

      // Redirect to the demo quiz
      router.push(`/demo?email=${encodeURIComponent(email)}`);
    } catch (error) {
      console.error('Error submitting waitlist:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
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
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
        Ready to Discover Your Style?
      </h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1rem', maxWidth: '500px' }}>
        Take the GuruType AI demo to explore your DISC personality breakdown and unlock your AI coaching path.
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
        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#6C5CE7',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Submitting...' : 'Take the Demo Quiz'}
        </button>
      </form>
    </div>
  );
}
