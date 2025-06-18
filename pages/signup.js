// pages/signup.js
import { getSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Signup() {
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
      background: "radial-gradient(circle at 20% 30%, #0f172a, #1e293b 80%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Animated floating gradient circles */}
      <div style={{
        position: "absolute",
        top: "-100px",
        right: "-100px",
        width: "300px",
        height: "300px",
        background: "rgba(99, 102, 241, 0.3)",
        borderRadius: "50%",
        filter: "blur(120px)",
        animation: "floatUp 8s ease-in-out infinite alternate",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-100px",
        left: "-100px",
        width: "250px",
        height: "250px",
        background: "rgba(236, 72, 153, 0.2)",
        borderRadius: "50%",
        filter: "blur(100px)",
        animation: "floatDown 10s ease-in-out infinite alternate",
      }} />

      {/* Content */}
      <div style={{
        zIndex: 2,
        textAlign: "center",
        maxWidth: "500px",
        padding: "2rem",
        borderRadius: "16px",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}>
        <img
          src="/logo.png"
          alt="GuruType Logo"
          style={{ width: "80px", marginBottom: "1rem" }}
        />
        <h1 style={{ fontSize: "2.5rem", color: "#ffffff", marginBottom: "1rem" }}>
          Create Your Account
        </h1>
        <p style={{ color: "#cbd5e1", marginBottom: "2rem", fontSize: "1.05rem" }}>
          Step into the future of AI-powered DISC coaching. Your personalized growth journey starts here.
        </p>
        <button
          onClick={() => signIn("google")}
          style={{
            backgroundColor: "#10b981",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "10px",
            fontSize: "1.05rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(16, 185, 129, 0.4)",
            transition: "transform 0.2s ease",
          }}
          onMouseOver={e => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={e => (e.target.style.transform = "scale(1)")}
        >
          Sign up with Google
        </button>
      </div>

      <style jsx>{`
        @keyframes floatUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-40px);
          }
        }
        @keyframes floatDown {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(40px);
          }
        }
      `}</style>
    </div>
  );
}
