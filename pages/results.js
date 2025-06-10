1// pages/results.js import { useState } from 'react'; import { useRouter } from 'next/router'; import Image from 'next/image';

export default function ResultsPage() { const router = useRouter(); const { type, scores } = router.query; const [insight, setInsight] = useState(''); const [loading, setLoading] = useState(false); const [showForm, setShowForm] = useState(false);

const handleGetCoach = () => { setShowForm(true); };

const handleSubmit = async (e) => { e.preventDefault(); setLoading(true);

try {
  const res = await fetch('/api/coach', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, scores }),
  });

  const data = await res.json();
  if (res.ok) {
    setInsight(data.message);
  }
} catch (err) {
  // No error message shown to user
} finally {
  setLoading(false);
}

};

const getTopType = (type) => { switch (type) { case 'D': return 'You are a Driver – assertive, goal-oriented, and confident. You thrive in fast-paced environments and enjoy challenges. Your leadership style is direct, and you prefer to take control. While your determination is a strength, remember to slow down and listen more. Others admire your decisiveness. Stay open to collaboration to unlock even greater results.'; case 'I': return 'You are an Influencer – outgoing, enthusiastic, and inspiring. You shine in social settings and love building connections. Your energy draws people in, making you a natural motivator. Stay mindful of details and follow-through to match your enthusiasm with execution. Embrace structure when needed, and keep spreading positivity.'; case 'S': return 'You are a Supporter – patient, dependable, and team-focused. You bring calm and stability wherever you go. People trust you because of your consistency and empathy. While you may avoid confrontation, your voice matters. Speak up when it counts, and trust in your quiet strength. Balance routine with flexibility.'; case 'C': return 'You are a Challenger – detail-oriented, analytical, and precise. You value logic and data over guesswork. Your standards are high, and your work is thorough. Just remember, perfection isn’t always the goal—progress is. Don’t be afraid to share your findings, and allow space for emotion in decision-making too.'; default: return 'You have a balanced DISC profile. Your personality is a unique blend of strengths across all four types, making you adaptable and versatile. This balance allows you to flex your approach in different situations. Embrace your ability to connect with a wide range of people and tackle challenges from multiple angles.'; } };

return ( <div style={{ padding: '2rem', backgroundColor: '#0d0d0d', color: '#fff', minHeight: '100vh' }}> <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your DISC Results</h1> <p style={{ marginBottom: '1rem' }}><strong>Type:</strong> {type}</p> <p style={{ marginBottom: '2rem' }}>{getTopType(type)}</p>

{!showForm && (
    <button onClick={handleGetCoach} style={{ padding: '0.75rem 1.5rem', backgroundColor: '#6C5CE7', color: '#fff', border: 'none', borderRadius: '8px' }}>
      Get AI Coach</button>
  )}

  {showForm && (
    <form action="https://formspree.io/f/xqabpnnn" method="POST" onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
      <label style={{ display: 'block', marginBottom: '1rem' }}>
        Name:
        <input type="text" name="name" required style={{ marginLeft: '1rem', padding: '0.5rem' }} />
      </label>
      <label style={{ display: 'block', marginBottom: '1rem' }}>
        Email:
        <input type="email" name="email" required style={{ marginLeft: '1rem', padding: '0.5rem' }} />
      </label>
      <label style={{ display: 'block', marginBottom: '1rem' }}>
        Role:
        <select name="role" required style={{ marginLeft: '1rem', padding: '0.5rem' }}>
          <option value="individual">Individual</option>
          <option value="coach">Coach</option>
          <option value="organization">Organization</option>
        </select>
      </label>
      <button type="submit" style={{ padding: '0.75rem 1.5rem', backgroundColor: '#00b894', color: '#fff', border: 'none', borderRadius: '8px' }}>Submit</button>
    </form>
  )}

  {loading && <p style={{ marginTop: '1rem' }}>Generating your coaching insight...</p>}
  {insight && <p style={{ marginTop: '2rem', backgroundColor: '#222', padding: '1rem', borderRadius: '8px' }}>{insight}</p>}
</div>

); }

