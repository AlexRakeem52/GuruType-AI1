import { useSession } from 'next-auth/react';

export default function IndividualDashboard() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading your dashboard...</p>;
  if (!session) return <p>You must be signed in to view your dashboard.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome {session.user?.name || ''}</h1>
      <p>This is your personal GuruType AI coaching space.</p>

      <div style={{ marginTop: '2rem' }}>
        <h2>Your DISC Results</h2>
        <p>[Display chart, top traits, and breakdown]</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Your AI Coach</h2>
        <p>[Chat link, recent insights, and development goals]</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Self-Reflection Journal</h2>
        <p>[Entries, AI prompts, progress tracking]</p>
      </div>
    </div>
  );
}
