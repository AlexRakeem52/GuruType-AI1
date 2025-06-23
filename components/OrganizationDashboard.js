import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { supabase } from '@/lib/supabase';

export default function OrganizationDashboard() {
  const { data: session } = useSession();
  const [quizResults, setQuizResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!session?.user?.email) return;

      const { data, error } = await supabase
        .from('quiz_results')
        .select('*');

      if (error) {
        console.error('Error fetching organization results:', error);
      } else {
        setQuizResults(data);
      }
    };

    fetchResults();
  }, [session]);

  return (
    <div style={{
      backgroundColor: '#0f0f0f',
      color: '#fff',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{
        fontSize: '2rem',
        marginBottom: '1rem',
        borderBottom: '2px solid #6C5CE7',
        paddingBottom: '0.5rem'
      }}>
        🏢 Organization Dashboard
      </h1>

      {quizResults.length === 0 ? (
        <p style={{ color: '#aaa' }}>No results found yet across your organization.</p>
      ) : (
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '1rem'
        }}>
          <thead>
            <tr>
              <th style={thStyle}>Client Email</th>
              <th style={thStyle}>Top DISC Type</th>
              <th style={thStyle}>Coach Email</th>
              <th style={thStyle}>Date</th>
            </tr>
          </thead>
          <tbody>
            {quizResults.map((result) => (
              <tr key={result.id}>
                <td style={tdStyle}>{result.email}</td>
                <td style={tdStyle}>{result.top_type}</td>
                <td style={tdStyle}>{result.coach_email || '-'}</td>
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
