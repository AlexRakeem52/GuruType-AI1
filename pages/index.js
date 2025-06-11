import Image from 'next/image';
import { useEffect, useState } from 'react';
import Logo from '../public/logo.png';

export default function Home() {
  const [showUserTypePrompt, setShowUserTypePrompt] = useState(false);
  const coachSummaries = {
    D: 'Driven. Decisive. Demands results. Your go-to for leadership and bold moves.',
    I: 'Inspiring. Outgoing. Brings energy and connection into every interaction.',
    S: 'Supportive. Steady. Creates harmony and shows up with loyalty and calm.',
    C: 'Calculated. Precise. Brings order, structure, and thoughtfulness to the table.'
  };

  useEffect(() => {
    const fadeEls = document.querySelectorAll('.fade-in');
    fadeEls.forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      el.style.transition = `all 0.6s ease ${i * 0.2}s`;
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, 50);
    });
  }, []);

  const handleQuizClick = () => {
    setShowUserTypePrompt(true);
  };

  const handleUserTypeSelection = (type) => {
    if (type === 'individual') {
      window.location.href = '/quiz';
    } else {
      alert('We’re working on dashboards for coaches and organizations. Contact us for a demo!');
    }
  };

  return (
    <div style={{ backgroundColor: '#0d0d0d', color: '#fff', fontFamily: 'sans-serif' }}>
      {/* Nav */}
      <div style={{
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1c1c1e'
      }}>
        <Image src={Logo} alt="GuruType AI Logo" width={50} height={50} />
        <div>
          <a href="/signin" style={{
            marginRight: '1rem',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>Sign In</a>
          <a href="/signup" style={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>Create Account</a>
        </div>
      </div>

      {/* Hero */}
      <div className="fade-in" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <Image src={Logo} alt="GuruType AI Logo" width={100} height={100} />
        <h1 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Meet Your AI Coach Built Just for You</h1>
        <p style={{ fontSize: '1.2rem', margin: '1rem auto', maxWidth: '600px' }}>
          Unlock personalized growth insights through DISC-powered AI coaching — whether you're an individual, coach, or organization.
        </p>
        <a onClick={handleQuizClick} style={{
          padding: '1rem 2rem',
          backgroundColor: '#6C5CE7',
          color: '#fff',
          borderRadius: '10px',
          fontWeight: 'bold',
          fontSize: '1rem',
          textDecoration: 'none',
          marginTop: '1rem',
          display: 'inline-block',
          cursor: 'pointer'
        }}
          onMouseEnter={e => e.target.style.backgroundColor = '#7e6be9'}
          onMouseLeave={e => e.target.style.backgroundColor = '#6C5CE7'}>
          Take the Demo
        </a>
        {showUserTypePrompt && (
          <div style={{ marginTop: '2rem' }}>
            <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Who are you?</p>
            <button onClick={() => handleUserTypeSelection('individual')} style={promptButtonStyle}>Individual</button>
            <button onClick={() => handleUserTypeSelection('coach')} style={promptButtonStyle}>Coach</button>
            <button onClick={() => handleUserTypeSelection('org')} style={promptButtonStyle}>Organization</button>
          </div>
        )}
      </div>

      {/* Why DISC & AI */}
      <div className="fade-in" style={{ backgroundColor: '#111', padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Why DISC? Why an AI Coach?</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto 1rem' }}>
          DISC gives you a clear lens into personality behavior — how people lead, communicate, and make decisions. But insight without action is wasted.
        </p>
        <p style={{ maxWidth: '700px', margin: '0 auto 1rem' }}>
          Our AI coach bridges that gap. It takes your DISC type and delivers real-time feedback, tips, and personalized prompts based on how you’re wired.
        </p>
        <p style={{ maxWidth: '700px', margin: '0 auto' }}>
          This isn’t personality theory for theory’s sake. It’s behavioral intelligence turned into a smart advantage for leadership, collaboration, and growth.
        </p>
      </div>

      {/* Meet the Coaches */}
      <div className="fade-in" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Meet Your DISC Style Coaches</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          {['D', 'I', 'S', 'C'].map((type) => (
            <div key={type} style={{ maxWidth: '200px', textAlign: 'center' }}>
              <Image src={`/${{ D: 'fox', I: 'parrot', S: 'elephant', C: 'tiger' }[type]}.png`} alt={`${type} Coach`} width={120} height={120} />
              <h4 style={{ marginTop: '0.5rem' }}>{type} Style Coach</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{coachSummaries[type]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Waitlist CTA */}
      <div className="fade-in" style={{ padding: '3rem 2rem', textAlign: 'center', backgroundColor: '#1c1c1e' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Be the First to Know</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem' }}>Get early access to new coaching features and updates. Join the waitlist.</p>
        <form action="https://formspree.io/f/your-form-id" method="POST" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <input type="email" name="email" required placeholder="Your email" style={{
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            border: 'none',
            fontSize: '1rem',
            minWidth: '250px'
          }} />
          <button type="submit" style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#6C5CE7',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>Join Waitlist</button>
        </form>
      </div>
    </div>
  );
}

const promptButtonStyle = {
  margin: '0 0.5rem',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer'
};
