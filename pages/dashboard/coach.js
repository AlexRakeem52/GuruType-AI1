import dynamic from 'next/dynamic';

const CoachDashboard = dynamic(() => import('../../components/CoachDashboard'), {
  ssr: false,
});

export default function CoachPage() {
  return <CoachDashboard />;
    }
