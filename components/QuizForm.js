import { useState } from "react";
import { useRouter } from "next/router";

export default function QuizForm() {
  const router = useRouter();

  const questions = [
    {
      question: "How do you respond to challenges?",
      answers: [
        { text: "Energetic and talkative", type: "I" },
        { text: "Direct and assertive", type: "D" },
        { text: "Calm and supportive", type: "S" },
        { text: "Analytical and precise", type: "C" }
      ]
    },
    {
      question: "What motivates you the most?",
      answers: [
        { text: "Recognition and social connection", type: "I" },
        { text: "Winning and achieving", type: "D" },
        { text: "Harmony and loyalty", type: "S" },
        { text: "Accuracy and order", type: "C" }
      ]
    },
    {
      question: "How do you handle decisions?",
      answers: [
        { text: "Go with my gut and talk it out", type: "I" },
        { text: "Take charge and decide quickly", type: "D" },
        { text: "Think of everyone involved", type: "S" },
        { text: "Research thoroughly before acting", type: "C" }
      ]
    },
    {
      question: "What's your leadership style?",
      answers: [
        { text: "Friendly and inspiring", type: "I" },
        { text: "Bold and direct", type: "D" },
        { text: "Supportive and consistent", type: "S" },
        { text: "Structured and logical", type: "C" }
      ]
    },
    {
      question: "How do you handle stress?",
      answers: [
        { text: "Talk it out and stay busy", type: "I" },
        { text: "Take control of the situation", type: "D" },
        { text: "Stay calm and steady", type: "S" },
        { text: "Withdraw to plan and reflect", type: "C" }
      ]
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ D: 0, I: 0, S: 0, C: 0 });

  const handleAnswerClick = (type) => {
    setScores(prevScores => {
      const updatedScores = {
        ...prevScores,
        [type]: prevScores[type] + 1
      };

      const next = currentQuestionIndex + 1;
      if (next < questions.length) {
        setCurrentQuestionIndex(next);
      } else {
        router.push({
          pathname: "/results",
          query: updatedScores
        });
      }

      return updatedScores;
    });
  };

  return (
    <div style={{ padding: 20, color: "#fff" }}>
      <h2>{questions[currentQuestionIndex].question}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
        {questions[currentQuestionIndex].answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(answer.type)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#222",
              color: "#fff",
              border: "1px solid #444",
              borderRadius: 6,
              cursor: "pointer"
            }}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
