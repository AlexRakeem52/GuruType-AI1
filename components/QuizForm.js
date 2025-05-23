import { useState } from 'react';

const questions = [
  {
    text: "How do you respond to challenges?",
    options: [
      { label: "Energetic and talkative", type: "I" },
      { label: "Direct and assertive", type: "D" },
      { label: "Calm and supportive", type: "S" },
      { label: "Analytical and precise", type: "C" }
    ]
  },
  {
    text: "How do others usually describe you?",
    options: [
      { label: "Thoughtful planner", type: "C" },
      { label: "Reliable friend", type: "S" },
      { label: "Bold leader", type: "D" },
      { label: "Social butterfly", type: "I" }
    ]
  },
  {
    text: "When working in a group, you are more likely to:",
    options: [
      { label: "Support and listen", type: "S" },
      { label: "Take charge", type: "D" },
      { label: "Motivate and encourage", type: "I" },
      { label: "Organize and analyze", type: "C" }
    ]
  },
  {
    text: "What motivates you most?",
    options: [
      { label: "Stability and harmony", type: "S" },
      { label: "Winning and achieving goals", type: "D" },
      { label: "Recognition and fun", type: "I" },
      { label: "Logic and correctness", type: "C" }
    ]
  },
  {
    text: "Which best describes your decision-making style?",
    options: [
      { label: "Fast and firm", type: "D" },
      { label: "Intuitive and enthusiastic", type: "I" },
      { label: "Careful and data-driven", type: "C" },
      { label: "Cautious and team-focused", type: "S" }
    ]
  }
];

export default function QuizForm({ onComplete }) {
  const [answers, setAnswers] = useState([]);
  const [step, setStep] = useState(0);

  function handleAnswer(type) {
    const updated = [...answers, type];
    setAnswers(updated);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      const result = getDISCResult(updated);
      onComplete(result);
    }
  }

  function getDISCResult(answers) {
    const counts = { D: 0, I: 0, S: 0, C: 0 };
    answers.forEach(a => counts[a]++);
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]; // return top type
  }

  const q = questions[step];

  return (
    <div style={{ marginTop: '40px' }}>
      <h2>{q.text}</h2>
      {q.options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(option.type)}
          style={{
            display: 'block',
            margin: '10px 0',
            padding: '10px 20px',
            backgroundColor: '#222',
            color: '#fff',
            border: '1px solid #555',
            borderRadius: '5px'
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
