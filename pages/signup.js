import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState('');

  const handleSignup = async () => {
    if (!role) {
      alert('Please select a role before signing up.');
      return;
    }

    // Temporarily store role in sessionStorage before redirecting to Google Auth
    sessionStorage.setItem('selectedRole', role);

    // Begin Google sign-in process, redirect to post-login page
    await signIn('google', { callbackUrl: '/post-login' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Create Your GuruType AI Account</h1>
        
        <label className="block mb-2 text-lg">Select Your Role:</label>
        <select
          className="w-full border rounded px-4 py-2 mb-6"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">-- Choose one --</option>
          <option value="individual">Individual</option>
          <option value="coach">Coach</option>
          <option value="organization">Organization</option>
        </select>

        <button
          onClick={handleSignup}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Sign Up with Google
        </button>
      </div>
    </div>
  );
}
