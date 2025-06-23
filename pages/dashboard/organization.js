import { getSession } from 'next-auth/react';
import OrganizationDashboard from '../../components/OrganizationDashboard';

export default function OrgPage() {
  return <OrganizationDashboard />;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
