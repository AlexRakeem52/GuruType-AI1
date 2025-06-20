import { useSession } from 'next-auth/react';

export default function CoachDashboard() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading dashboard...</p>;
  if (!session) return <p>You must be signed in to view this dashboard.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome Coach {session.user?.name || ''}</h1>
      <p>This is your dedicated coaching portal.</p>

      <div style={{ marginTop: '2rem' }}>
        <h2>Client Assessments</h2>
        <p>[List and manage DISC results, assign AI coaches, track growth]</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>White-label Settings</h2>
        <p>[Customize your branding, reports, and client experience]</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Revenue & Usage</h2>
        <p>[Track usage metrics, billing, and performance]</p>
      </div>
    </div>
  );
}
