import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  const router = useRouter();

  const handleDemoClick = () => {
    router.push('/role');
  };

  return (
    <>
      <Head>
        <title>GuruType AI - Personalized DISC Coaching</title>
        <meta name="description" content="Get AI-powered DISC coaching tailored to your personality. Ideal for individuals, coaches, and organizations." />
      </Head>

      <main style={{ backgroundColor: '#0e0e0e', color: '#fff', fontFamily: 'sans-serif', padding: '2rem' }}>
        {/* Hero Section */}
        <section style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <Image src="/GuruTypeLogo.png" alt="GuruType AI Logo" width={180} height={60} />
          <h1 style={{ fontSize: '2.5rem', margin: '1.5rem 0' }}>Meet Your Personalized AI Coach</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
            GuruType AI delivers intelligent coaching based on your DISC personality style. Whether you're an individual looking to grow, a coach scaling your impact, or an organization building better teams — we’ve built something for you.
          </p>
          <button onClick={handleDemoClick} style={{ padding: '1rem 2rem', fontSize: '1rem', backgroundColor: '#33b5e5', color: '#000', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            Take the Free Demo
          </button>
        </section>

        {/* Value Props Section */}
        <section style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', maxWidth: '1000px', margin: '4rem auto' }}>
          <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '10px' }}>
            <h3>✨ Personalized AI Coaching</h3>
            <p>Each user gets tailored coaching based on their DISC type. No two journeys are alike.</p>
          </div>
          <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '10px' }}>
            <h3>📊 Team & Org Dashboards</h3>
            <p>For leaders and HR teams — view collective insights, trends, and growth paths by DISC profile.</p>
          </div>
          <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '10px' }}>
            <h3>📚 Growth Plans & Reports</h3>
            <p>We don’t just assess. GuruType builds a real plan for your growth, delivered by your AI coach.</p>
          </div>
        </section>

        {/* Meet the Avatars */}
        <section style={{ textAlign: 'center', marginTop: '5rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Meet Your Guru Avatars</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            <div>
              <Image src="/TigerGuru.png" alt="Tiger Guru" width={120} height={120} />
              <p style={{ marginTop: '0.5rem' }}><strong>Tiger</strong> (D Style)</p>
            </div>
            <div>
              <Image src="/ParrotGuru.png" alt="Parrot Guru" width={120} height={120} />
              <p style={{ marginTop: '0.5rem' }}><strong>Parrot</strong> (I Style)</p>
            </div>
            <div>
              <Image src="/ElephantGuru.png" alt="Elephant Guru" width={120} height={120} />
              <p style={{ marginTop: '0.5rem' }}><strong>Elephant</strong> (S Style)</p>
            </div>
            <div>
              <Image src="/FoxGuru.png" alt="Fox Guru" width={120} height={120} />
              <p style={{ marginTop: '0.5rem' }}><strong>Fox</strong> (C Style)</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ textAlign: 'center', marginTop: '6rem', paddingBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Ready to see your DISC Coach in action?</h2>
          <button onClick={handleDemoClick} style={{ padding: '1rem 2rem', fontSize: '1rem', backgroundColor: '#33b5e5', color: '#000', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            Start Your Free Demo
          </button>
        </section>
      </main>
    </>
  );
}
