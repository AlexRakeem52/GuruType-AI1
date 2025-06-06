// pages/role.js import { useRouter } from 'next/router';

export default function RolePage() { const router = useRouter();

const handleSelect = (role) => { router.push(/quiz?role=${role}); };

return ( <div style={{ padding: '2rem', backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}> <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Who are you?</h1> <p style={{ marginBottom: '2rem' }}> Choose your role to get started with your personalized DISC demo: </p>

<button onClick={() => handleSelect('individual')} style={buttonStyle}>
    I’m an Individual
  </button>
  <button onClick={() => handleSelect('coach')} style={buttonStyle}>
    I’m a Coach
  </button>
  <button onClick={() => handleSelect('organization')} style={buttonStyle}>
    I represent an Organization
  </button>
</div>

); }

const buttonStyle = { margin: '0.5rem', padding: '1rem 2rem', backgroundColor: '#33b5e5', color: '#111', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };

