// pages/index.js import { useState } from 'react'; import { useRouter } from 'next/router'; import Head from 'next/head'; import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Home() { const router = useRouter(); const [formData, setFormData] = useState({ D: '', I: '', S: '', C: '' }); const [error, setError] = useState('');

const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

const handleSubmit = (e) => { e.preventDefault(); const scores = { D: parseInt(formData.D, 10), I: parseInt(formData.I, 10), S: parseInt(formData.S, 10), C: parseInt(formData.C, 10), };

if (Object.values(scores).some(isNaN)) {
  setError('Please enter a number for each DISC style.');
  return;
}

router.push({
  pathname: '/results',
  query: scores,
});

};

return ( <div style={{ padding: 30, backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}> <Head> <title>GuruType AI - DISC Quiz</title> </Head> <h1>Enter Your DISC Scores</h1> <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 20, maxWidth: 400 }}> {['D', 'I', 'S', 'C'].map((type) => ( <label key={type}> {type} Score: <input type="number" name={type} value={formData[type]} onChange={handleChange} style={{ padding: 10, fontSize: 16, width: '100%' }} /> </label> ))} {error && <p style={{ color: 'red' }}>{error}</p>} <button type="submit" style={{ padding: 12, backgroundColor: '#33b5e5', color: '#111', fontWeight: 'bold' }}> See My Results </button> </form> </div> ); }

