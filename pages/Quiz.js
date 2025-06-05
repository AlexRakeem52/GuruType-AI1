// pages/quiz.js
import { useState } from 'react';
import { useRouter } from 'next/router';

const questions = [
  {
    prompt: "In a team setting, you are most likely to:",
    options: {
      D: "Take charge and set direction",
      I: "Motivate and inspire others",
      S: "Support and cooperate",
      C: "Ensure everything is done correctly"
    }
  },
  {
    prompt: "When facing a challenge, your instinct is to:",
    options: {
      D: "Conquer it head-on",
      I: "Talk through it with others",
      S: "Stay calm and patient",
      C: "Analyze all the details first"
    }
  },
  {
    prompt: "You prefer work that is:",
    options: {
      D: "Fast-paced and results-driven",
      I: "Social and engaging",
      S: "Stable and predictable",
      C: "Structured and detailed"
    }
  },
  {
    prompt: "In conversation, you tend to:",
    options: {
      D: "Get to the point quickly",
      I: "Tell stories and joke around",
      S: "Listen more than talk",
      C: "Be precise and careful with words"
    }
  },
  // Add more questions as needed (you can go up to 12 total)
];

export default function QuizPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({ D: 0, I: 0, S: 0, C: 0 });

  const handleAnswer = (type) => {
    setScores(prev => ({ ...prev, [type]: prev[type] + 1 }));
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      // Go to results with query parameters
      router.push({
        pathname: '/results',
        query: scores
      });
    }
  };

  const q = questions[current];

  return (
    <div style={{ padding: 20 }}>
      <h1>DISC Quiz</h1>
      <h3>{q.prompt}</h3>
      <div>
        {Object.entries(q.options).map(([key, text]) => (
          <button
            key={key}
            onClick={() => handleAnswer(key)}
            style={{
              margin: 10,
              padding: 12,
              backgroundColor: '#f0f0f0',
              border: '1px solid #ccc',
              borderRadius: 6,
              cursor: 'pointer'
            }}
          >
            {text}
          </button>
        ))}
      </div>
      <p>Question {current + 1} of {questions.length}</p>
    </div>
  );
}
