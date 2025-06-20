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
    if (type === 'individual') {
      window.location.href = '/waitlist-individual';
    } else if (type === 'coach') {
      window.location.href = '/waitlist-coach';
    } else if (type === 'organization') {
      window.location.href = '/waitlist-organization';
    }
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
    <div style={{ backgroundColor: '#0d0d0d', color: '#fff', fontFamily: 'sans-serif' }}>
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

      {/* Hero Section */}
      <div className="fade-in" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <Image src={Logo} alt="GuruType AI Logo" width={100} height={100} />
        <h1 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Meet Your AI Coach Built Just for You</h1>
        <p style={{ fontSize: '1.2rem', margin: '1rem auto', maxWidth: '600px' }}>
          Unlock personalized growth insights through DISC-powered AI coaching — whether you're an individual, coach, or organization.
        </p>
        <p style={{ fontSize: '1rem', margin: '1rem auto', maxWidth: '700px' }}>
          GuruType AI helps leaders lead smarter, individuals grow stronger, and teams work better — all through an AI engine that understands how people operate.
        </p>
        <button onClick={handleQuizClick} style={{
          padding: '1rem 2rem',
          backgroundColor: '#6C5CE7',
          color: '#fff',
          borderRadius: '10px',
          fontWeight: 'bold',
          fontSize: '1rem',
          marginTop: '1rem',
          border: 'none',
          cursor: 'pointer'
        }}>
          Take the Demo
        </button>

        {showUserTypePrompt && (
          <div style={{ marginTop: '2rem' }}>
            <p>Who are you?</p>
            <button onClick={() => handleUserTypeSelect('individual')} style={{ marginRight: '1rem' }}>Individual</button>
            <button onClick={() => handleUserTypeSelect('coach')} style={{ marginRight: '1rem' }}>Coach</button>
            <button onClick={() => handleUserTypeSelect('organization')}>Organization</button>
          </div>
        )}
      </div>

      {/* DISC Coaches */}
      <div className="fade-in" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Meet Your DISC Style Coaches</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
          Each of our AI coaches is modeled after the unique strengths of the DISC styles — designed to help you lead, connect, support, or strategize better in real-world situations.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          {['D', 'I', 'S', 'C'].map(type => (
            <div key={type} style={{ maxWidth: '200px', textAlign: 'center' }}>
              <Image src={coachImages[type]} alt={`${type} Style Coach`} width={120} height={120} />
              <h4 style={{ marginTop: '0.5rem' }}>{type} Style Coach</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{coachSummaries[type]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="fade-in" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>You’ve seen generic. Now try personalized.</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem' }}>
          GuruType AI is built for people who want more than templated advice. If you're serious about growth, let's get started.
        </p>
        <button onClick={handleQuizClick} style={{
          padding: '1rem 2rem',
          backgroundColor: '#6C5CE7',
          color: '#fff',
          borderRadius: '10px',
          fontWeight: 'bold',
          fontSize: '1rem',
          border: 'none',
          cursor: 'pointer'
        }}>
          Get Started with Your AI Coach
        </button>
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
