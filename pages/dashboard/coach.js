import { getSession } from 'next-auth/react';
import CoachDashboard from '../../components/CoachDashboard';

export default function CoachPage() {
  return <CoachDashboard />;
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
