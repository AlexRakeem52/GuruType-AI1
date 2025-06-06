// pages/role.js
import { useRouter } from 'next/router';

export default function RolePage() {
  const router = useRouter();

  const handleSelect = (role) => {
    router.push(`/quiz?role=${role}`);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#111',
      color: '#fff',
      height: '100vh',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Who are you?</h1>
      <p style={{ marginBottom: '2rem' }}>Choose your role to get started with your personalized DISC demo:</p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
        maxWidth: '300px'
      }}>
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
  width: '100%'
};
