// pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleSelect = (role) => {
    router.push(`/quiz?role=${role}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to GuruType AI</h1>
      <p style={styles.subtitle}>Discover your DISC style and unlock personalized coaching insights.</p>
      <p style={styles.question}>Are you an...</p>

      <div style={styles.buttons}>
        <button onClick={() => handleSelect('individual')} style={styles.button}>Individual</button>
        <button onClick={() => handleSelect('coach')} style={styles.button}>Coach</button>
        <button onClick={() => handleSelect('organization')} style={styles.button}>Organization</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#111',
    color: '#fff',
    minHeight: '100vh',
    padding: '2rem',
    textAlign: 'center'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem'
  },
  question: {
    fontSize: '1.5rem',
    marginBottom: '1.5rem'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#33b5e5',
    color: '#111',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '1rem'
  }
};
