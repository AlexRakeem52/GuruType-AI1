// pages/signup.js
import { getSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();

  useEffect(() => {
    getSession().then(session => {
      if (session) router.push("/");
    });
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-indigo-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Create Your Account</h1>
        <p className="text-gray-600 mb-6">
          Sign up to unlock your personalized DISC coaching experience and get matched with your AI coach.
        </p>
        <button
          onClick={() => signIn("google")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg w-full"
        >
          Sign up with Google
        </button>
      </div>
    </div>
  );
}
