import { useState } from 'react';
import QuizForm from '../components/QuizForm';

export default function Home() {
  const [result, setResult] = useState(null);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', color: 'white', backgroundColor: '#111', minHeight: '100vh' }}>
      <h1>Welcome to GuruType AI</h1>
      <p>Take the quick DISC quiz to discover your type.</p>

      {result ? (
        <div style={{ marginTop: '40px' }}>
          <h2>Your DISC Type: {result}</h2>
          <p>We'll soon add your custom AI coaching insight here.</p>
        </div>
      ) : (
        <QuizForm onComplete={(type) => setResult(type)} />
      )}
    </div>
  );
}
