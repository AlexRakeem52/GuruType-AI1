// pages/role.js
import { useRouter } from 'next/router';

export default function RolePage() {
  const router = useRouter();

  const handleSelect = (role) => {
    router.push(`/quiz?role=${role}`);
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Who are you?</h1>
      <p style={{ marginBottom: '2rem' }}>Choose your role to get started with your personalized DISC demo:</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => handleSelect('individual')} style={btnStyle}>Individual</button>
        <button onClick={() => handleSelect('coach')} style={btnStyle}>Coach</button>
        <button onClick={() => handleSelect('organization')} style={btnStyle}>Organization</button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: '12px 24px',
  backgroundColor: '#33b5e5',
  color: '#111',
  border: 'none',
  borderRadius: 6,
  fontWeight: 'bold',
  cursor: 'pointer',
};
