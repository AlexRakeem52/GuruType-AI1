import dynamic from 'next/dynamic';

const IndividualDashboard = dynamic(() => import('../../components/IndividualDashboard'), {
  ssr: false,
});

export default function IndividualPage() {
  return <IndividualDashboard />;
    }
