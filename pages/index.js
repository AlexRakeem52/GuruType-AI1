// pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleSelect = (role) => {
    // You can use this to route or store user role in query or localStorage
    router.push(`/results?role=${role}`);
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to GuruType AI</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2rem' }}>
        Discover how your personality shapes your leadership, communication, and success.
        Take our DISC-powered AI demo to get instant, personalized coaching insights.
      </p>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Who are you?</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <button
          onClick={() => handleSelect('individual')}
          style={buttonStyle}
        >
          I'm an Individual
        </button>
        <button
          onClick={() => handleSelect('coach')}
          style={buttonStyle}
        >
          I'm a Coach
        </button>
        <button
          onClick={() => handleSelect('organization')}
          style={buttonStyle}
        >
          I'm with an Organization
        </button>
      </div>

      <p style={{ marginTop: '3rem', fontSize: '1rem', color: '#aaa' }}>
        Already took the quiz? <a href="/results" style={{ color: '#33b5e5' }}>View your results</a>
      </p>
    </div>
  );
}

const buttonStyle = {
  padding: '1rem 1.5rem',
  backgroundColor: '#33b5e5',
  color: '#111',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '1rem',
};
