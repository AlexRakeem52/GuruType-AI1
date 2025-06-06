// pages/quiz.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const questions = [
  { text: "I prefer to take charge in group situations.", type: 'D' },
  { text: "I enjoy meeting new people and socializing.", type: 'I' },
  { text: "I value stability and avoid sudden changes.", type: 'S' },
  { text: "I pay attention to details and accuracy.", type: 'C' },
  { text: "I make decisions quickly and confidently.", type: 'D' },
  { text: "I like to encourage and motivate others.", type: 'I' },
  { text: "I remain calm and patient under pressure.", type: 'S' },
  { text: "I double-check my work for perfection.", type: 'C' },
  { text: "I challenge the status quo when needed.", type: 'D' },
  { text: "I enjoy being the center of attention.", type: 'I' },
  { text: "I strive to maintain harmony around me.", type: 'S' },
  { text: "I stick to rules and logical systems.", type: 'C' }
];

// DISC colors
const discColors = {
  D: '#ff4444',
  I: '#ffbb33',
  S: '#00C851',
  C: '#33b5e5'
};

export default function Quiz() {
  const router = useRouter();
  const [shuffled, setShuffled] = useState([]);
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({ D: 0, I: 0, S: 0, C: 0 });

  useEffect(() => {
    setShuffled(questions.sort(() => 0.5 - Math.random()));
  }, []);

  const handleAnswer = (agree) => {
    const type = shuffled[current].type;
    if (agree) {
      setScores((prev) => ({ ...prev, [type]: prev[type] + 1 }));
    }
    const next = current + 1;
    if (next < shuffled.length) {
      setCurrent(next);
    } else {
      router.push({
        pathname: '/results',
        query: scores
      });
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  if (shuffled.length === 0) return <p>Loading...</p>;

  const q = shuffled[current];

  return (
    <div style={{ padding: 30, backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ height: 10, backgroundColor: '#333', borderRadius: 5 }}>
          <div
            style={{
              width: `${((current + 1) / shuffled.length) * 100}%`,
              backgroundColor: discColors[q.type],
              height: '100%',
              borderRadius: 5
            }}
          />
        </div>
        <p style={{ marginTop: 10 }}>
          Question {current + 1} of {shuffled.length}
        </p>
      </div>

      <div
        style={{
          backgroundColor: '#222',
          padding: 24,
          borderRadius: 12,
          borderLeft: `6px solid ${discColors[q.type]}`,
          marginBottom: 20
        }}
      >
        <h2 style={{ fontSize: 22 }}>{q.text}</h2>
      </div>

      <div style={{ display: 'flex', gap: 15, flexWrap: 'wrap' }}>
        <button
          onClick={() => handleAnswer(true)}
          style={{
            padding: '12px 24px',
            backgroundColor: discColors[q.type],
            color: '#111',
            border: 'none',
            borderRadius: 8,
            fontWeight: 'bold',
            minWidth: 120
          }}
        >
          Agree 👍
        </button>

        <button
          onClick={() => handleAnswer(false)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#555',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            minWidth: 120
          }}
        >
          Disagree 👎
        </button>

        {current > 0 && (
          <button
            onClick={handleBack}
            style={{
              padding: '12px 24px',
              backgroundColor: '#888',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              minWidth: 120
            }}
          >
            ⬅ Back
          </button>
        )}
      </div>
    </div>
  );
}
