import Image from 'next/image'; import { useRouter } from 'next/router';

export default function HomePage() { const router = useRouter();

const handleStartDemo = () => { router.push('/role'); };

return ( <div style={{ backgroundColor: '#111', color: '#fff', fontFamily: 'sans-serif', padding: '2rem' }}> {/* Hero Section */} <section style={{ textAlign: 'center', marginBottom: '4rem' }}> <Image src="/gurutype-logo.png" alt="GuruType AI Logo" width={160} height={160} /> <h1 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Meet Your Personalized AI Coach</h1> <p style={{ maxWidth: '700px', margin: '1rem auto', fontSize: '1.1rem' }}> GuruType AI delivers DISC-powered coaching tailored to your personality. Whether you’re an individual, coach, or team leader—get real-time insights, guidance, and growth paths from your own AI guru. </p> <button onClick={handleStartDemo} style={{ marginTop: '1.5rem', padding: '0.75rem 1.5rem', backgroundColor: '#6e00ff', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '1rem', cursor: 'pointer', }} > Take the Free Demo </button> </section>

{/* Features */}
  <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', textAlign: 'center', marginBottom: '4rem' }}>
    <div>
      <h3 style={{ color: '#ff4444' }}>Individuals</h3>
      <p>Understand your core behavior style and unlock daily guidance from your AI coach—designed just for you.</p>
    </div>
    <div>
      <h3 style={{ color: '#00C851' }}>Coaches</h3>
      <p>Level up your sessions with data-driven insights, custom dashboards, and white-label AI support.</p>
    </div>
    <div>
      <h3 style={{ color: '#33b5e5' }}>Organizations</h3>
      <p>Boost team performance with DISC analytics, talent development tools, and scalable coaching flows.</p>
    </div>
  </section>

  {/* Meet the Coaches */}
  <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
    <h2>Meet Your AI Coaching Avatars</h2>
    <p>Each coach is styled to your DISC profile. Who will you get?</p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
      <div>
        <Image src="/fox.png" alt="Fox Coach" width={160} height={160} />
        <p>Fox (C-Type)</p>
      </div>
      <div>
        <Image src="/elephant.png" alt="Elephant Coach" width={160} height={160} />
        <p>Elephant (S-Type)</p>
      </div>
      <div>
        <Image src="/parrot.png" alt="Parrot Coach" width={160} height={160} />
        <p>Parrot (I-Type)</p>
      </div>
      <div>
        <Image src="/tiger.png" alt="Tiger Coach" width={160} height={160} />
        <p>Tiger (D-Type)</p>
      </div>
    </div>
  </section>

  {/* Final CTA */}
  <section style={{ textAlign: 'center', padding: '2rem 0', backgroundColor: '#1c1c1c', borderRadius: '12px' }}>
    <h2 style={{ marginBottom: '0.5rem' }}>Start Your Journey with GuruType AI</h2>
    <p>Take the quiz. Discover your style. Unlock your AI coach.</p>
    <button
      onClick={handleStartDemo}
      style={{
        marginTop: '1rem',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#6e00ff',
        border: 'none',
        borderRadius: '8px',
        color: '#fff',
        fontSize: '1rem',
        cursor: 'pointer',
      }}
    >
      Take the Free Demo
    </button>
  </section>
</div>

); }

