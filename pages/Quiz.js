// pages/quiz.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Quiz() {
  const router = useRouter();
  const { role } = router.query;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (role) {
      setLoaded(true);
    }
  }, [role]);

  if (!loaded) return <p style={styles.loading}>Loading...</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome, {capitalize(role)}!</h1>
      <p style={styles.description}>
        Take our quick DISC assessment to discover your unique personality style and coaching insights.
      </p>

      <button style={styles.button} onClick={() => router.push('/results')}>
        Start the Demo Quiz
      </button>
    </div>
  );
}

const capitalize = (word) => word?.charAt(0).toUpperCase() + word?.slice(1);

const styles = {
  container: {
    backgroundColor: '#111',
    color: '#fff',
    minHeight: '100vh',
    padding: '2rem',
    textAlign: 'center'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem'
  },
  description: {
    fontSize: '1.1rem',
    marginBottom: '2rem'
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
  },
  loading: {
    textAlign: 'center',
    marginTop: '2rem',
    color: '#fff'
  }
};
