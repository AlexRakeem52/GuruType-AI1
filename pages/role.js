// pages/role.js
import { useRouter } from 'next/router';

export default function RolePage() {
  const router = useRouter();

  const handleSelect = (role) => {
    router.push(`/quiz?role=${role}`);
  };

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#111',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Who Are You?</h1>
      <p style={{ marginBottom: '2rem' }}>
        Choose your role to get started with your personalized DISC demo:
      </p>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={() => handleSelect('individual')}
          style={{
            backgroundColor: '#ff4444',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Individual
        </button>

        <button
          onClick={() => handleSelect('coach')}
          style={{
            backgroundColor: '#33b5e5',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Coach
        </button>

        <button
          onClick={() => handleSelect('organization')}
          style={{
            backgroundColor: '#00C851',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Organization
        </button>
      </div>
    </div>
  );
}
