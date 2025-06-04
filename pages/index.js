import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /results after setting dummy query params for demo/testing
    router.push({
      pathname: '/results',
      query: { D: 4, I: 3, S: 2, C: 1 },
    });
  }, []);

  return (
    <div style={{ padding: 50 }}>
      <h1>Welcome to GuruType AI</h1>
      <p>Redirecting you to your DISC results...</p>
    </div>
  );
}
