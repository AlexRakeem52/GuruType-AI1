// pages/signin.js
import { getSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    getSession().then(session => {
      if (session) router.push("/");
    });
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-indigo-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Welcome Back</h1>
        <p className="text-gray-600 mb-6">
          Sign in to access your DISC coaching and AI dashboard.
        </p>
        <button
          onClick={() => signIn("google")}
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg w-full"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
