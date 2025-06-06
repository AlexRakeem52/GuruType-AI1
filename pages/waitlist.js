import { useState } from 'react';

export default function Waitlist() {
  const [form, setForm] = useState({ name: '', email: '', role: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Waitlist Submission:', form); // Replace with actual submission logic
    setSubmitted(true);
  };

  return (
    <div style={{
      backgroundColor: '#111',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: 400, width: '100%' }}>
        <h1 style={{ marginBottom: '1rem' }}>Join the Waitlist</h1>
        {submitted ? (
          <p>Thanks for joining! We'll be in touch soon.</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">Select role</option>
              <option value="individual">Individual</option>
              <option value="coach">Coach</option>
              <option value="organization">Organization</option>
            </select>
            <button type="submit" style={buttonStyle}>Join Waitlist</button>
          </form>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '0.75rem',
  borderRadius: 6,
  border: 'none',
  fontSize: 16,
  outline: 'none'
};

const buttonStyle = {
  padding: '0.75rem',
  borderRadius: 6,
  border: 'none',
  backgroundColor: '#33b5e5',
  color: '#111',
  fontWeight: 'bold',
  fontSize: 16,
  cursor: 'pointer'
};
