// pages/quiz.js
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Quiz() {
  const router = useRouter();
  const { role } = router.query;
  const [scores, setScores] = useState({ D: 0, I: 0, S: 0, C: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = new URLSearchParams({
      D: scores.D,
      I: scores.I,
      S: scores.S,
      C: scores.C,
      role: role || 'individual',
    }).toString();
    router.push(`/results?${query}`);
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
      <h1>Take the DISC Quiz</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
        {['D', 'I', 'S', 'C'].map((letter) => (
          <label key={letter}>
            {letter} Score:
            <input
              type="number"
              min="0"
              max="5"
              value={scores[letter]}
              onChange={(e) => setScores({ ...scores, [letter]: Number(e.target.value) })}
              style={{ marginLeft: 10 }}
              required
            />
          </label>
        ))}
        <button type="submit" style={buttonStyle}>See My Results</button>
      </form>
    </div>
  );
}

const buttonStyle = {
  padding: '12px 24px',
  backgroundColor: '#33b5e5',
  color: '#111',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '1rem',
};
