import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const guruImages = {
  D: '/tiger.jpg',
  I: '/parrot.jpg',
  S: '/elephant.jpg',
  C: '/fox.jpg',
};

const summaries = {
  D: {
    title: 'Dominance (D)',
    summary:
      'You are decisive, assertive, and goal-driven. You thrive on overcoming challenges and leading the charge toward results.',
  },
  I: {
    title: 'Influence (I)',
    summary:
      'You are outgoing, enthusiastic, and a natural motivator. You bring energy to groups and inspire others with your optimism.',
  },
  S: {
    title: 'Steadiness (S)',
    summary:
      'You are dependable, cooperative, and loyal. You create harmony, offer support, and value consistency in relationships and environments.',
  },
  C: {
    title: 'Conscientiousness (C)',
    summary:
      'You are analytical, precise, and detail-oriented. You strive for accuracy, structure, and high standards in all that you do.',
  },
};

export default function Results({ discScores }) {
  const types = ['D', 'I', 'S', 'C'];
  const scores = {
    D: discScores[0],
    I: discScores[1],
    S: discScores[2],
    C: discScores[3],
  };

  const [coachingAdvice, setCoachingAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const topType = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];

  useEffect(() => {
    const fetchAdvice = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/coach', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            discType: topType,
            discSummary: summaries[topType].summary,
          }),
        });

        const data = await response.json();
        setCoachingAdvice(data.advice || 'No advice available at the moment.');
      } catch (error) {
        console.error(error);
        setCoachingAdvice('There was an error getting your advice.');
      }
      setLoading(false);
    };

    fetchAdvice();
  }, [topType]);

  const data = types.map((type) => ({
    type,
    score: scores[type],
  }));

  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Your DISC Style Results</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="type" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="score" fill="#60a5fa" />
        </BarChart>
      </ResponsiveContainer>

      <div className="text-center mt-6">
        <img
          src={guruImages[topType]}
          alt={topType}
          className="w-32 h-32 mx-auto mb-4 rounded-full border-2 border-white"
        />
        <h3 className="text-lg font-bold">{summaries[topType].title}</h3>
        <p className="mb-4">{summaries[topType].summary}</p>
        {loading ? (
          <p className="italic text-sm text-gray-400">Loading AI coaching advice...</p>
        ) : (
          <p className="italic text-sm text-gray-200">{coachingAdvice}</p>
        )}
        <a
          href="#"
          className="mt-6 inline-block bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-500 transition"
        >
          Join the Waitlist
        </a>
      </div>
    </div>
  );
}
