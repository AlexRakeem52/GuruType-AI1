// pages/signup.js
import { getSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();

  useEffect(() => {
    // Redirect authenticated users to the homepage or dashboard
    getSession().then(session => {
      if (session) {
        router.push("/");
      }
    });
  }, [router]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "2rem",
      background: "#f9f9f9",
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Create Your Account</h1>
      <p style={{ marginBottom: "2rem", maxWidth: "400px", textAlign: "center" }}>
        Sign up to unlock your personalized DISC coaching experience and get matched with your AI coach.
      </p>
      <button
        onClick={() => signIn("google")}
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          background: "#4285F4",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Sign up with Google
      </button>
    </div>
  );
}
