 import { useState } from 'react';

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      text: "Which best describes your instinct in a group setting?",
      options: [
        { label: "Take charge immediately", value: "D" },
        { label: "Get others excited and involved", value: "I" },
        { label: "Observe and wait for harmony", value: "S" },
        { label: "Analyze and plan before acting", value: "C" },
      ]
    },
    // Add more questions here (50 total from pool of 152 eventually)
  ];

  const handleOptionClick = (value) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Submit logic here
      alert("Assessment complete. Submitting answers...");
    }
  };

  return (
    <div style={{
      backgroundColor: '#0d0d0d',
      minHeight: '100vh',
      padding: '3rem',
      color: '#fff',
      fontFamily: 'Segoe UI, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Logo */}
      <img src="/logo.png" alt="GuruType Logo" style={{ width: 160, marginBottom: '2rem' }} />

      {/* Card */}
      <div style={{
        background: '#1c1c1c',
        borderRadius: '16px',
        padding: '2rem',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
      }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', color: '#6C5CE7' }}>
          Question {currentQuestion + 1} of {questions.length}
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
          {questions[currentQuestion].text}
        </p>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {questions[currentQuestion].options.map((opt, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(opt.value)}
              style={{
                backgroundColor: '#2a2a2a',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                border: '1px solid #444',
                color: '#fff',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out'
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#6C5CE7'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#2a2a2a'}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
