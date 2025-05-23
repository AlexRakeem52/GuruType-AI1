import { useState } from 'react';
import Results from '../components/Results';

export default function Home() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({ D: 0, I: 0, S: 0, C: 0 });
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: 'How do you respond to challenges?',
      answers: [
        { text: 'Energetic and talkative', type: 'I' },
        { text: 'Direct and assertive', type: 'D' },
        { text: 'Calm and supportive', type: 'S' },
        { text: 'Analytical and precise', type: 'C' },
      ],
    },
    {
      question: 'What describes your communication style?',
      answers: [
        { text: 'Lively and persuasive', type: 'I' },
        { text: 'Straightforward and firm', type: 'D' },
        { text: 'Friendly and soft-spoken', type: 'S' },
        { text: 'Detailed and structured', type: 'C' },
      ],
    },
    {
      question: 'How do you make decisions?',
      answers: [
        { text: 'Quick and goal-driven', type: 'D' },
        { text: 'Based on feelings and harmony', type: 'S' },
        { text: 'Influenced by others and positivity', type: 'I' },
        { text: 'Logical and research-based', type: 'C' },
      ],
    },
    {
      question: 'How do you prefer to work?',
      answers: [
        { text: 'Independently with results', type: 'D' },
        { text: 'With team harmony', type: 'S' },
        { text: 'In a flexible, fun environment', type: 'I' },
        { text: 'With clear systems and rules', type: 'C' },
      ],
    },
    {
      question: 'What motivates you most?',
      answers: [
        { text: 'Achievement and winning', type: 'D' },
        { text: 'Security and trust', type: 'S' },
        { text: 'Recognition and popularity', type: 'I' },
        { text: 'Accuracy and quality', type: 'C' },
      ],
    },
  ];

  const handleAnswer = (type) => {
    const updatedScores = { ...scores, [type]: scores[type] + 1 };
    setScores(updatedScores);

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const discScores = [
    scores['D'] * 20,
    scores['I'] * 20,
    scores['S'] * 20,
    scores['C'] * 20,
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {!showResults ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Welcome to GuruType AI</h1>
          <p className="mb-4 text-lg">{questions[step].question}</p>
          <div className="space-y-2">
            {questions[step].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(answer.type)}
                className="bg-gray-800 px-6 py-2 rounded hover:bg-gray-700 transition"
              >
                {answer.text}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center max-w-md">
          <Results discScores={discScores} />
          <p className="mt-4 text-lg">
            Want a full breakdown of your DISC style and coaching insights?
          </p>
          <a
            href="#"
            className="mt-4 inline-block bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-500 transition"
          >
            Join the Waitlist
          </a>
        </div>
      )}
    </div>
  );
}
