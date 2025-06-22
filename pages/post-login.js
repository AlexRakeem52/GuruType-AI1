import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PostLoginRedirect() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem('userRole');

    if (role === 'individual') {
      router.replace('/dashboard/individual');
    } else if (role === 'coach') {
      router.replace('/dashboard/coach');
    } else if (role === 'organization') {
      router.replace('/dashboard/organization');
    } else {
      router.replace('/'); // fallback
    }
  }, [router]);

  return <p className="p-8 text-center">Redirecting to your dashboard...</p>;
}
