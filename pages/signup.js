import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState('');

  const handleSignup = async () => {
    if (!role) return alert('Please select a role.');

    // Save role to localStorage (temporary for MVP)
    localStorage.setItem('userRole', role);

    // Redirect to sign-in flow (Google OAuth)
    await signIn('google', { callbackUrl: `/post-login` });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Create Your GuruType AI Account</h1>
      <div className="space-y-4">
        <label className="block text-lg">Select Your Role:</label>
        <select
          className="border p-2 rounded"
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
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Sign Up with Google
        </button>
      </div>
    </div>
  );
}
