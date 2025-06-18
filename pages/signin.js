// pages/signin.js
import { signIn, getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    getSession().then(session => {
      if (session) {
        router.push("/");
      }
    });
  }, [router]);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to bottom right, #0f172a, #1e293b)",
      color: "#fff",
      padding: "2rem",
      textAlign: "center",
    }}>
      <img
        src="/logo.png"
        alt="GuruType AI Logo"
        style={{ width: "100px", marginBottom: "1.5rem" }}
      />
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Welcome Back
      </h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "400px" }}>
        Sign in to access your DISC coaching and AI dashboard.
      </p>
      <button
        onClick={() => signIn("google")}
        style={{
          backgroundColor: "#4285F4",
          color: "#fff",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(66, 133, 244, 0.4)",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={e => (e.target.style.backgroundColor = "#3367D6")}
        onMouseOut={e => (e.target.style.backgroundColor = "#4285F4")}
      >
        Continue with Google
      </button>
    </div>
  );
}
