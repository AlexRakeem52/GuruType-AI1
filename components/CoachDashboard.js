import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { supabase } from '../lib/supabase';

export default function CoachDashboard() {
  const { data: session } = useSession();
  const [quizResults, setQuizResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!session?.user?.email) return;

      const { data, error } = await supabase
        .from('quiz_results')
        .select('*')
        .eq('coach_email', session.user.email);

      if (error) {
        console.error('Error fetching coach quiz results:', error);
      } else {
        setQuizResults(data);
      }
    };

    fetchResults();
  }, [session]);

  return (
    <div style={{ backgroundColor: '#0f0f0f', color: '#fff', padding: '2rem', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🧠 My Client Quiz Results</h1>
      {quizResults.length === 0 ? (
        <p>No results yet.</p>
      ) : (
        <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={thStyle}>Client Email</th>
              <th style={thStyle}>Top DISC Type</th>
              <th style={thStyle}>Submitted</th>
            </tr>
          </thead>
          <tbody>
            {quizResults.map(result => (
              <tr key={result.id}>
                <td style={tdStyle}>{result.email}</td>
                <td style={tdStyle}>{result.top_type}</td>
                <td style={tdStyle}>{new Date(result.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const thStyle = {
  textAlign: 'left',
  padding: '0.75rem',
  borderBottom: '1px solid #444',
  color: '#ccc'
};

const tdStyle = {
  padding: '0.75rem',
  borderBottom: '1px solid #333',
  color: '#eee'
};
