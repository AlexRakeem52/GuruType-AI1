import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('../../components/OrganizationDashboard'), {
  ssr: false,
});

export default function OrganizationDashboardPage() {
  return <NoSSR />;
    }
