import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignIn() {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Sign In to GuruType AI</h1>
        <p className="text-gray-600 mb-8">
          Unlock your full personality insights and meet your AI coach.
        </p>

        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
                onClick={() => signIn(provider.id, { callbackUrl: "/quiz" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
