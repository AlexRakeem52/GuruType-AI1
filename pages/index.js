// pages/index.js

import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Discover Your DISC Personality</h1>
      <p style={styles.subtitle}>
        Unlock personalized insights for individuals, coaches, and organizations. GuruType AI blends personality science with AI-driven coaching to help you grow faster and smarter.
      </p>
      <Link href="/role">
        <a style={styles.button}>Take the Demo</a>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#111',
    color: '#fff',
    minHeight: '100vh',
    padding: '80px 30px',
    textAlign: 'center'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px'
  },
  subtitle: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    margin: '0 auto 40px auto'
  },
  button: {
    padding: '15px 30px',
    fontSize: '1.1rem',
    backgroundColor: '#33b5e5',
    color: '#111',
    border: 'none',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};
