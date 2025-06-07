// pages/index.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Home() {
  const [showRoleSelector, setShowRoleSelector] = useState(false);
  const router = useRouter();

  const handleRoleSelect = (role) => {
    router.push(`/quiz?role=${role}`);
  };

  return (
    <div style={{ backgroundColor: '#0d1117', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Hero Section */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <Image src="/logo.png" alt="GuruType AI Logo" width={150} height={150} />
        <h1 style={{ fontSize: '2.5rem', margin: '1rem 0', color: '#33b5e5' }}>Your Personalized AI Coach Based on DISC</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: 600, margin: '0 auto' }}>
          Get instant insights, custom coaching, and unlock your potential—whether you're an individual, a team leader, or an organization.
        </p>
        <button
          onClick={() => setShowRoleSelector(true)}
          style={{
            marginTop: '2rem',
            padding: '1rem 2rem',
            fontSize: '1rem',
            backgroundColor: '#33b5e5',
            color: '#000',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Take the Free Demo
        </button>
      </section>

      {/* Role Selector Modal */}
      {showRoleSelector && (
        <div style={{ backgroundColor: '#111', padding: '2rem', textAlign: 'center' }}>
          <h2>Who Are You?</h2>
          <p>Select your role to begin the personalized DISC demo</p>
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {['individual', 'coach', 'organization'].map((role) => (
              <button
                key={role}
                onClick={() => handleRoleSelect(role)}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#33b5e5',
                  color: '#000',
                  border: 'none',
                  borderRadius: 6,
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Meet the Coaches */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2>Meet Your AI Coaches</h2>
        <p style={{ maxWidth: 600, margin: '0 auto 2rem' }}>
          Each coach represents a DISC style, delivering insights tailored to your personality.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <Image src="/tiger.png" alt="Tiger - D" width={100} height={100} />
            <p>Dominance (Tiger)</p>
          </div>
          <div>
            <Image src="/parrot.png" alt="Parrot - I" width={100} height={100} />
            <p>Influence (Parrot)</p>
          </div>
          <div>
            <Image src="/elephant.png" alt="Elephant - S" width={100} height={100} />
            <p>Steadiness (Elephant)</p>
          </div>
          <div>
            <Image src="/fox.png" alt="Fox - C" width={100} height={100} />
            <p>Conscientiousness (Fox)</p>
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#1a1a1a', textAlign: 'center' }}>
        <h2>Why GuruType AI?</h2>
        <div style={{ maxWidth: 800, margin: '2rem auto', textAlign: 'left' }}>
          <ul style={{ lineHeight: '2' }}>
            <li>✅ Personalized AI coaching based on your DISC profile</li>
            <li>✅ Insightful growth tips for individuals and teams</li>
            <li>✅ Real-time DISC insights for hiring, leadership, and communication</li>
            <li>✅ Custom dashboards for organizations and coaches</li>
            <li>✅ Automated reports and guided next steps</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
