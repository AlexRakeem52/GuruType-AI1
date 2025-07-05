import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import GuruTypeLogo from '../public/logo.png'; // Make sure this path matches your project

// Import your full question bank
import fullQuestionBank from '../lib/fullQuestionBank'; // Should be an array of 152 questions with D/I/S/C mapping

export default function AssessmentPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    const shuffled = [...fullQuestionBank].sort(() => 0.5 - Math.random()).slice(0, 50);
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswer = (style) => {
    setSelectedAnswers([...selectedAnswers, style]);
    if (currentQuestionIndex < 49) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const scores = { D: 0, I: 0, S: 0, C: 0 };
      selectedAnswers.concat(style).forEach((s) => scores[s]++);
      const highest = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
      router.push({
        pathname: '/results',
        query: {
          type: highest,
          scores: JSON.stringify(scores),
        },
      });
    }
  };

  const current = shuffledQuestions[currentQuestionIndex];

  return (
    <div style={{ backgroundColor: '#0d0d0d', color: '#fff', minHeight: '100vh', padding: '2rem', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Image src={GuruTypeLogo} alt="GuruType AI Logo" width={120} height={120} />
      </div>

      <div style={{ maxWidth: '800px', width: '100%', backgroundColor: '#1e1e1e', padding: '2rem', borderRadius: '12px', boxShadow: '0 0 20px rgba(108, 92, 231, 0.2)' }}>
        <h1 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '1.5rem' }}>DISC Assessment – Question {currentQuestionIndex + 1} of 50</h1>

        {current && (
          <>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>{current.question}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              {current.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt.style)}
                  style={{
                    backgroundColor: '#2c2c2c',
                    color: '#fff',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid #444',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#6C5CE7')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2c2c2c')}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
