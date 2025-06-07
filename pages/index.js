import Link from 'next/link'; import Head from 'next/head';

export default function Home() { return ( <div style={{ backgroundColor: '#1e1b2e', color: '#f3f0ff', fontFamily: 'Segoe UI, Roboto, sans-serif', minHeight: '100vh', padding: '2rem' }}> <Head> <title>GuruType AI - DISC-Powered Coaching</title> <meta name="description" content="Personalized AI Coaching Powered by DISC" /> </Head>

<header style={{ textAlign: 'center', marginBottom: '2rem' }}>
    <img src="/logo.png" alt="GuruType AI Logo" style={{ height: '100px', margin: '0 auto' }} />
    <h1 style={{ fontSize: '2.5rem', color: '#66f' }}>
      Your Personalized AI Coach Based on DISC
    </h1>
    <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
      Get instant insights, custom coaching, and unlock your potential—whether you're an individual, a team leader, or an organization.
    </p>
    <Link href="/role">
      <button style={{ backgroundColor: '#66f', color: '#fff', padding: '0.75rem 2rem', fontSize: '1rem', borderRadius: '8px', border: 'none', cursor: 'pointer', marginTop: '1rem' }}>
        Take the Free Demo
      </button>
    </Link>
  </header>

  <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
    <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Meet Your AI Coaches</h2>
    <p style={{ marginBottom: '2rem' }}>
      Each coach represents a DISC style, delivering insights tailored to your personality.
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <img src="/tiger.png" alt="Tiger - D" style={{ height: '100px', borderRadius: '10px' }} />
        <p><strong>Dominance (Tiger)</strong></p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img src="/parrot.png" alt="Parrot - I" style={{ height: '100px', borderRadius: '10px' }} />
        <p><strong>Influence (Parrot)</strong></p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img src="/elephant.png" alt="Elephant - S" style={{ height: '100px', borderRadius: '10px' }} />
        <p><strong>Steadiness (Elephant)</strong></p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img src="/fox.png" alt="Fox - C" style={{ height: '100px', borderRadius: '10px' }} />
        <p><strong>Conscientiousness (Fox)</strong></p>
      </div>
    </div>
  </section>

  <section style={{ backgroundColor: '#292542', padding: '2rem', borderRadius: '10px', margin: '0 auto', maxWidth: '800px' }}>
    <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', textAlign: 'center' }}>Why GuruType AI?</h2>
    <ul style={{ listStyleType: '✅', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
      <li>Personalized AI coaching based on your DISC profile</li>
      <li>Insightful growth tips for individuals and teams</li>
      <li>Real-time DISC insights for hiring, leadership, and communication</li>
      <li>Custom dashboards for organizations and coaches</li>
      <li>Automated reports and guided next steps</li>
    </ul>
  </section>
</div>

); }

