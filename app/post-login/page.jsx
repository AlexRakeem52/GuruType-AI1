'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { supabase } from '../../lib/supabase';

export default function PostLoginPage() {
  const sessionHook = useSession();
  const session = sessionHook?.data;
  const status = sessionHook?.status;
  const router = useRouter();

  useEffect(() => {
    const processUser = async () => {
      if (status !== 'authenticated' || !session?.user?.email) return;

      const email = session.user.email;

      const { data: userData } = await supabase
        .from('users')
        .select('role')
        .eq('email', email)
        .single();

      if (userData) {
        const role = userData.role;
        if (role === 'individual') router.replace('/dashboard/individual');
        else if (role === 'coach') router.replace('/dashboard/coach');
        else if (role === 'organization') router.replace('/dashboard/organization');
        else router.replace('/');
      } else {
        const selectedRole = sessionStorage.getItem('selectedRole');
        if (!selectedRole) {
          alert('No role found. Please sign up again.');
          router.replace('/signup');
          return;
        }

        const { error: insertError } = await supabase.from('users').insert([{ email, role: selectedRole }]);

        if (insertError) {
          console.error('Insert error:', insertError);
          alert('Signup failed. Please try again.');
          router.replace('/signup');
          return;
        }

        if (selectedRole === 'individual') router.replace('/dashboard/individual');
        else if (selectedRole === 'coach') router.replace('/dashboard/coach');
        else if (selectedRole === 'organization') router.replace('/dashboard/organization');
      }
    };

    processUser();
  }, [status, session, router]);

  return <p className="p-8 text-center">Redirecting to your dashboard...</p>;
}
