import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function PostLoginRedirect() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const processUser = async () => {
      if (!isClient || status !== 'authenticated' || !session?.user?.email) return;

      const email = session.user.email;

      // Step 1: Check if user already exists in Supabase
      const { data: userData } = await supabase
        .from('users')
        .select('role')
        .eq('email', email)
        .single();

      if (userData) {
        // Existing user — route based on saved role
        const role = userData.role;
        if (role === 'individual') router.replace('/dashboard/individual');
        else if (role === 'coach') router.replace('/dashboard/coach');
        else if (role === 'organization') router.replace('/dashboard/organization');
        else router.replace('/');
      } else {
        // New user — insert with role from sessionStorage
        const selectedRole = sessionStorage.getItem('selectedRole');
        if (!selectedRole) {
          alert('Error: No role found. Please sign up again.');
          router.replace('/signup');
          return;
        }

        const { error: insertError } = await supabase
          .from('users')
          .insert([{ email, role: selectedRole }]);

        if (insertError) {
          console.error('Supabase insert error:', insertError);
          alert('Signup failed. Please try again.');
          router.replace('/signup');
          return;
        }

        // Route based on selected role
        if (selectedRole === 'individual') router.replace('/dashboard/individual');
        else if (selectedRole === 'coach') router.replace('/dashboard/coach');
        else if (selectedRole === 'organization') router.replace('/dashboard/organization');
      }
    };

    processUser();
  }, [isClient, status, session, router]);

  return <p className="p-8 text-center">Redirecting to your dashboard...</p>;
}
