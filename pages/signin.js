// pages/signin.js
import { signIn, getSession } from "next-auth/react";
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
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "3rem",
          borderRadius: "1.5rem",
          maxWidth: "420px",
          width: "100%",
          boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", color: "#111827" }}>
          Welcome Back
        </h1>
        <p style={{ color: "#4B5563", marginBottom: "2rem" }}>
          Sign in to access your DISC coaching and AI dashboard.
        </p>

        <button
          onClick={() => signIn("google")}
          style={{
            backgroundColor: "#4285F4",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "0.5rem",
            fontWeight: "600",
            fontSize: "1rem",
            cursor: "pointer",
            width: "100%",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
          }}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
