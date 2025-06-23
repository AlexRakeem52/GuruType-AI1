import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { SupabaseClient } from '@supabase/supabase-js';

const supabase = new SupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // Make sure this is a service role key
);

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { email, name } = user;

      const { error } = await supabase
        .from('users')
        .upsert(
          {
            email,
            full_name: name || '',
            role: null,
            created_at: new Date().toISOString(),
          },
          { onConflict: ['email'] }
        );

      if (error) {
        console.error('Supabase insert error:', error);
        return false;
      }

      return true;
    },
    async session({ session, token }) {
      session.user.email = token.email;
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.email = user.email;
      return token;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};

export default NextAuth(authOptions);
