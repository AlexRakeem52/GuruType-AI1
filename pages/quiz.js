import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '../public/logo.png';

const questions = [
  // Same 12 questions here...
  {
    text: 'How do you usually approach a new challenge?',
    options: [
      { text: 'Take charge and lead the way', type: 'D' },
      { text: 'Motivate others and build excitement', type: 'I' },
      { text: 'Collaborate and build trust', type: 'S' },
      { text: 'Analyze and plan carefully', type: 'C' }
    ]
  },
  //... continue with rest of your 12 questions
];

function shuffleOptions(options) {
  return [...options].sort(() => Math.random() - 0.5);
}

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [fade, setFade] = useState(true);
  const router = useRouter();

  const handleAnswer = (type) => {
    setFade(false);
    setTimeout(() => {
      const newAnswers = [...answers, type];
      if (currentQuestion + 1 < questions.length) {
        setAnswers(newAnswers);
        setCurrentQuestion(currentQuestion + 1);
        setFade(true);
      } else {
        const counts = newAnswers.reduce((acc, type) => {
          acc[type] = (acc[type] || 0) + 1;
          return acc;
        }, {});
        const topType = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
        router.push({
          pathname: '/results',
          query: {
            type: topType,
            scores: JSON.stringify(counts),
          },
        });
      }
    }, 300); // matches animation duration
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setFade(false);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setAnswers(answers.slice(0, -1));
        setFade(true);
      }, 300);
    }
  };

  const question = questions[currentQuestion];
  const shuffledOptions = shuffleOptions(question.options);
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#0d0d0d',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      transition: 'opacity 0.3s ease-in-out'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
        <Image src={Logo} alt="GuruType AI Logo" width={40} height={40} />
        <h1 style={{ marginLeft: '0.75rem', fontSize: '1.75rem' }}>GURUTYPE AI</h1>
      </div>

      {/* Progress Bar */}
      <div style={{
        backgroundColor: '#333',
        borderRadius: '6px',
        overflow: 'hidden',
        marginBottom: '2rem',
        height: '10px'
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: '#6C5CE7',
          transition: 'width 0.4s ease'
        }} />
      </div>

      {/* Question Box */}
      <div style={{
        backgroundColor: '#1c1c1e',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(255,255,255,0.1)',
        opacity: fade ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{question.text}</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {shuffledOptions.map((option, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>
              <button onClick={() => handleAnswer(option.type)} style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#6C5CE7',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                width: '100%',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                {option.text}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: '2rem' }}>
          <button onClick={handleBack} disabled={currentQuestion === 0} style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#555',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            marginRight: '1rem',
            cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer',
            opacity: currentQuestion === 0 ? 0.5 : 1
          }}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
