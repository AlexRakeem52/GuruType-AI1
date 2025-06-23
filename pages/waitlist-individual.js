import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function WaitlistIndividual() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await supabase.from('users').insert([{ ...form, role: 'individual' }]);
      router.push('/quiz');
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#0d0d0d', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
        <h2 style={{ textAlign: 'center' }}>Ready to Discover Your Style?</h2>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <button type="submit" disabled={submitting} style={{ backgroundColor: '#6C5CE7', color: '#fff', padding: '0.75rem', borderRadius: '8px', border: 'none', fontWeight: 'bold' }}>
          {submitting ? 'Submitting...' : 'Take the Demo'}
        </button>
      </form>
    </div>
  );
}
