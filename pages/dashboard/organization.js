import dynamic from 'next/dynamic';

const OrganizationDashboard = dynamic(() => import('../../components/OrganizationDashboard'), {
  ssr: false,
});

export default function OrganizationPage() {
  return <OrganizationDashboard />;
    }
