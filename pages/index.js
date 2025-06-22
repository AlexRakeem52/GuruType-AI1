import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../public/logo.png';

export default function Home() {
  const coachSummaries = {
    D: 'Driven. Decisive. Demands results. Your go-to for leadership and bold moves.',
    I: 'Inspiring. Outgoing. Brings energy and connection into every interaction.',
    S: 'Supportive. Steady. Creates harmony and shows up with loyalty and calm.',
    C: 'Calculated. Precise. Brings order, structure, and thoughtfulness to the table.'
  };

  const coachImages = {
    D: '/tiger.png',
    I: '/parrot.png',
    S: '/elephant.png',
    C: '/fox.png'
  };

  const [showUserTypePrompt, setShowUserTypePrompt] = useState(false);

  const handleQuizClick = () => setShowUserTypePrompt(true);

  const handleUserTypeSelect = (type) => {
    window.location.href = `/waitlist-${type}`;
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

  return (
    <div style={{ backgroundColor: '#101d2c', color: '#fff', fontFamily: 'sans-serif' }}>
      {/* Nav Bar */}
      <div style={{
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1c1c1e'
      }}>
        <Image src={Logo} alt="GuruType AI Logo" width={50} height={50} />
        <div>
          <Link href="/signin"><a style={{ marginRight: '1rem', color: '#fff', fontWeight: 'bold' }}>Sign In</a></Link>
          <Link href="/signup"><a style={{ color: '#fff', fontWeight: 'bold' }}>Create Account</a></Link>
        </div>
      </div>

      {/* Hero */}
      <div className="fade-in" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <Image src={Logo} alt="GuruType AI Logo" width={100} height={100} />
        <h1 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Know Yourself. Lead Better.</h1>
        <p style={{ fontSize: '1.2rem', margin: '1rem auto', maxWidth: '700px', color: '#ccc' }}>
          Powered by DISC + AI. GuruType AI helps individuals, coaches, and organizations unlock peak performance through DISC-based insights and 24/7 AI coaching.
        </p>
        <div style={{ marginTop: '1rem' }}>
          <button onClick={handleQuizClick} style={buttonStyle}>Take the Demo Quiz</button>
          <Link href="/platform"><a style={{ ...buttonStyle, backgroundColor: 'transparent', border: '1px solid #fff', marginLeft: '1rem' }}>Explore the Platform</a></Link>
        </div>
        {showUserTypePrompt && (
          <div style={{ marginTop: '2rem' }}>
            <p>Who are you?</p>
            <button onClick={() => handleUserTypeSelect('individual')} style={buttonStyle}>Individual</button>
            <button onClick={() => handleUserTypeSelect('coach')} style={buttonStyle}>Coach</button>
            <button onClick={() => handleUserTypeSelect('organization')} style={buttonStyle}>Organization</button>
          </div>
        )}
      </div>

      {/* DISC Coaches */}
      <div className="fade-in" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Meet Your GuruType</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          {['D', 'I', 'S', 'C'].map(type => (
            <div key={type} style={{ maxWidth: '200px', textAlign: 'center' }}>
              <Image src={coachImages[type]} alt={`${type} Style Coach`} width={120} height={120} />
              <h4 style={{ marginTop: '0.5rem', color: '#ccc' }}>{type} Style Coach</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.4', color: '#aaa' }}>{coachSummaries[type]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DISC Stats */}
      <div className="fade-in" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Trusted Worldwide</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: '#ccc' }}>
          Over <span style={{ fontWeight: 'bold', color: '#fff' }}>1 million people</span> take a DISC assessment every year. GuruType AI brings this time-tested framework into the AI era — for individuals, coaches, and teams ready to grow.
        </p>
      </div>

      {/* Why GuruType */}
      <div className="fade-in" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Why GuruType AI?</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto', color: '#ccc' }}>
          Most platforms give you generic advice. GuruType AI gives you precision coaching based on who you really are. With DISC-backed insights and an AI coach that evolves with you, your growth becomes smarter, faster, and personal.
        </p>
      </div>

      {/* How It Works */}
      <div className="fade-in" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>How It Works</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: '#ccc', textAlign: 'left' }}>
          <ol style={{ lineHeight: '2', paddingLeft: '1.2rem' }}>
            <li>🧠 Take the DISC-based personality quiz</li>
            <li>📊 Review your unique results with AI-generated insights</li>
            <li>🤖 Chat with your personalized AI coach for feedback and goal-setting</li>
            <li>📈 Track your growth over time — both personally and professionally</li>
          </ol>
        </div>
      </div>

      {/* Built For */}
      <div className="fade-in" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Built For You</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', color: '#ccc' }}>
          <div style={{ maxWidth: '280px' }}>
            <h3 style={{ color: '#fff' }}>👤 Individuals</h3>
            <p>Understand your strengths. Set goals. Get AI support for growth in real life.</p>
          </div>
          <div style={{ maxWidth: '280px' }}>
            <h3 style={{ color: '#fff' }}>🎯 Coaches</h3>
            <p>Scale your coaching. Let AI assist with client insights, reflections, and progress.</p>
          </div>
          <div style={{ maxWidth: '280px' }}>
            <h3 style={{ color: '#fff' }}>🏢 Organizations</h3>
            <p>Improve team dynamics. Use dashboards and insights to build better workplaces.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="fade-in" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>You’ve seen generic. Now try personalized.</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem', color: '#ccc' }}>
          GuruType AI is built for people who want more than templated advice. If you're serious about growth, let's get started.
        </p>
        <button onClick={handleQuizClick} style={buttonStyle}>Get Started with Your AI Coach</button>
      </div>

      {/* Waitlist */}
      <div style={{
        backgroundColor: '#111',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Join the Waitlist</h2>
        <form action="https://formspree.io/f/mnqknqkz" method="POST" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <input type="email" name="email" placeholder="Your email" required style={{
            padding: '0.75rem',
            borderRadius: '8px',
            border: 'none',
            width: '250px'
          }} />
          <button type="submit" style={{
            backgroundColor: '#6C5CE7',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            color: '#fff',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer'
          }}>
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '1rem 2rem',
  backgroundColor: '#6C5CE7',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer'
};
