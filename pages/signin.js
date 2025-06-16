// pages/signin.js
import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignIn() {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    getProviders().then((prov) => setProviders(prov));
  }, []);

  if (!providers) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Sign In to GuruType AI</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}
