import Image from 'next/image'; import { useEffect, useState } from 'react'; import Logo from '../public/logo.png';

export default function Home() { const [showUserTypePrompt, setShowUserTypePrompt] = useState(false);

const coachSummaries = { D: 'Driven. Decisive. Demands results. Your go-to for leadership and bold moves.', I: 'Inspiring. Outgoing. Brings energy and connection into every interaction.', S: 'Supportive. Steady. Creates harmony and shows up with loyalty and calm.', C: 'Calculated. Precise. Brings order, structure, and thoughtfulness to the table.' };

useEffect(() => { const fadeEls = document.querySelectorAll('.fade-in'); fadeEls.forEach((el, i) => { el.style.opacity = 0; el.style.transform = 'translateY(30px)'; el.style.transition = all 0.6s ease ${i * 0.2}s; setTimeout(() => { el.style.opacity = 1; el.style.transform = 'translateY(0)'; }, 50); }); }, []);

const handleQuizClick = () => { setShowUserTypePrompt(true); };

return ( <div style={{ backgroundColor: '#0d0d0d', color: '#fff', fontFamily: 'sans-serif' }}> {/* Nav Bar */} <div style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1c1c1e' }}> <Image src={Logo} alt="GuruType AI Logo" width={50} height={50} /> <div> <a href="/signin" style={{ marginRight: '1rem', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Sign In</a> <a href="/signup" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Create Account</a> </div> </div>

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
    <button onClick={handleQuizClick} style={{ padding: '1rem 2rem', backgroundColor: '#6C5CE7', color: '#fff', borderRadius: '10px', fontWeight: 'bold', fontSize: '1rem', textDecoration: 'none', marginTop: '1rem', display: 'inline-block', transition: 'all 0.3s ease' }}
      onMouseEnter={e => e.target.style.backgroundColor = '#7e6be9'}
      onMouseLeave={e => e.target.style.backgroundColor = '#6C5CE7'}>
      Take the Demo
    </button>
    {showUserTypePrompt && (
      <div style={{ marginTop: '2rem' }}>
        <p>Who are you?</p>
        <a href="/quiz?user=individual" style={{ marginRight: '1rem', color: '#6C5CE7', textDecoration: 'underline' }}>Individual</a>
        <a href="/quiz?user=coach" style={{ marginRight: '1rem', color: '#6C5CE7', textDecoration: 'underline' }}>Coach</a>
        <a href="/quiz?user=organization" style={{ color: '#6C5CE7', textDecoration: 'underline' }}>Organization</a>
      </div>
    )}
  </div>

  {/* (Remaining sections unchanged for brevity — they remain as-is) */}

  {/* Waitlist Signup */}
  <div className="fade-in" style={{ backgroundColor: '#111', padding: '3rem 2rem', textAlign: 'center' }}>
    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Join the Waitlist</h2>
    <form action="https://formspree.io/f/your-form-id" method="POST" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <input type="email" name="email" required placeholder="Enter your email" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', marginBottom: '1rem', border: 'none' }} />
      <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#6C5CE7', color: '#fff', borderRadius: '6px', fontWeight: 'bold', border: 'none' }}>
        Join Now
      </button>
    </form>
  </div>
</div>

); }

