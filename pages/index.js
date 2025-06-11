import Image from 'next/image'; import { useState } from 'react'; import Logo from '../public/logo.png'; import Link from 'next/link';

export default function Home() { const [userType, setUserType] = useState(''); const coachSummaries = { D: 'Driven. Decisive. Demands results. Your go-to for leadership and bold moves.', I: 'Inspiring. Outgoing. Brings energy and connection into every interaction.', S: 'Supportive. Steady. Creates harmony and shows up with loyalty and calm.', C: 'Calculated. Precise. Brings order, structure, and thoughtfulness to the table.' };

return ( <div style={{ backgroundColor: '#0d0d0d', color: '#fff', fontFamily: 'sans-serif' }}> {/* Nav Bar */} <div style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1c1c1e' }}> <Image src={Logo} alt="GuruType AI Logo" width={50} height={50} /> <div> <Link href="/signin" style={{ marginRight: '1rem', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Sign In</Link> <Link href="/signup" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Create Account</Link> </div> </div>

{/* Hero Section */}
  <div className="fade-in" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Meet Your AI Coach Built Just for You</h1>
    <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Unlock personalized growth insights through DISC-powered AI coaching — whether you're an individual, coach, or organization.</p>

    {!userType ? (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '0 auto' }}>
        <p style={{ fontWeight: 'bold' }}>Who are you?</p>
        <button onClick={() => setUserType('business')} style={{ padding: '1rem', backgroundColor: '#3498DB', color: '#fff', border: 'none', borderRadius: '8px' }}>A Business or Team Leader</button>
        <button onClick={() => setUserType('individual')} style={{ padding: '1rem', backgroundColor: '#2ECC71', color: '#fff', border: 'none', borderRadius: '8px' }}>An Individual</button>
        <button onClick={() => setUserType('coach')} style={{ padding: '1rem', backgroundColor: '#9B59B6', color: '#fff', border: 'none', borderRadius: '8px' }}>A Coach</button>
      </div>
    ) : (
      <Link href="/quiz" style={{ padding: '1rem 2rem', backgroundColor: '#E67E22', color: '#fff', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>Take the Quiz</Link>
    )}
  </div>

  {/* DISC Coaches Section */}
  <div className="fade-in" style={{ padding: '2rem' }}>
    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Meet Your DISC Style Coaches</h2>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <Image src="/fox.png" alt="D Style Coach" width={120} height={120} />
        <p style={{ marginTop: '0.5rem' }}>D Style Coach</p>
        <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{coachSummaries.D}</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Image src="/parrot.png" alt="I Style Coach" width={120} height={120} />
        <p style={{ marginTop: '0.5rem' }}>I Style Coach</p>
        <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{coachSummaries.I}</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Image src="/elephant.png" alt="S Style Coach" width={120} height={120} />
        <p style={{ marginTop: '0.5rem' }}>S Style Coach</p>
        <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{coachSummaries.S}</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Image src="/tiger.png" alt="C Style Coach" width={120} height={120} />
        <p style={{ marginTop: '0.5rem' }}>C Style Coach</p>
        <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{coachSummaries.C}</p>
      </div>
    </div>
  </div>

  {/* Waitlist Section */}
  <div className="fade-in" style={{ backgroundColor: '#1c1c1e', padding: '3rem 2rem', textAlign: 'center', marginTop: '4rem' }}>
    <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Be the First to Access the Full Experience</h2>
    <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>Join the waitlist to get early access to our AI-powered coaching tools, premium DISC insights, and exclusive upgrades.</p>
    <form action="https://formspree.io/f/mnqeeyod" method="POST" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input type="email" name="email" placeholder="Your email" required style={{ padding: '0.75rem', width: '300px', marginBottom: '1rem', borderRadius: '6px', border: '1px solid #555' }} />
      <button type="submit" style={{ padding: '0.75rem 2rem', backgroundColor: '#6C5CE7', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>Join Waitlist</button>
    </form>
  </div>
</div>

); }

