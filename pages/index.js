import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>GuruType AI – Personalized AI Coaching</title>
      </Head>

      <main style={{ backgroundColor: '#0f0f0f', color: '#ffffff', padding: '2rem', fontFamily: 'sans-serif' }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Image src="/logo.png" alt="GuruType AI Logo" width={180} height={60} />
        </div>

        {/* Hero */}
        <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Meet Your AI Coach Built Just for You</h1>
          <p style={{ maxWidth: '600px', margin: '1rem auto', fontSize: '1.2rem', color: '#cccccc' }}>
            Unlock personalized growth insights through DISC-powered AI coaching – whether you're an individual,
            coach, or organization.
          </p>
          <Link href="/role">
            <a style={{
              marginTop: '1.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#33b5e5',
              color: '#111',
              fontWeight: 'bold',
              borderRadius: '6px',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              Take the Demo
            </a>
          </Link>
        </section>

        {/* Meet the AI Coaches */}
        <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Meet Your DISC Style Coaches</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Image src="/coach-d.png" alt="D Style Coach" width={120} height={120} />
            <Image src="/coach-i.png" alt="I Style Coach" width={120} height={120} />
            <Image src="/coach-s.png" alt="S Style Coach" width={120} height={120} />
            <Image src="/coach-c.png" alt="C Style Coach" width={120} height={120} />
          </div>
        </section>

        {/* Features */}
        <section style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Why GuruType AI?</h2>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', color: '#cccccc' }}>
            <li>✅ AI-powered coaching tailored to your DISC personality</li>
            <li>✅ Personalized growth plans for individuals</li>
            <li>✅ Team dashboards & insights for coaches and orgs</li>
            <li>✅ Actionable reports, visual breakdowns, and development tracking</li>
          </ul>
        </section>

        {/* Waitlist Signup */}
        <section style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#1c1c1c', padding: '2rem', borderRadius: '8px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Join the Waitlist</h2>
          <form action="https://formspree.io/f/xqabpnnn" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label>
              Name:
              <input type="text" name="name" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px' }} />
            </label>
            <label>
              Email:
              <input type="email" name="email" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px' }} />
            </label>
            <label>
              Role:
              <select name="role" required style={{ width: '100%', padding: '0.5rem', borderRadius: '4px' }}>
                <option value="">Select your role</option>
                <option value="individual">Individual</option>
                <option value="coach">Coach</option>
                <option value="organization">Organization</option>
              </select>
            </label>
            <button type="submit" style={{
              backgroundColor: '#33b5e5',
              color: '#111',
              fontWeight: 'bold',
              padding: '0.75rem',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
