// pages/dashboard/individual.js
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function IndividualDashboard() {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    getSession().then(sess => {
      if (!sess) {
        router.push("/signin");
      } else {
        setSession(sess);
      }
    });
  }, [router]);

  if (!session) return null;

  return (
    <div style={{ fontFamily: "sans-serif", background: "#f5f5f5", minHeight: "100vh", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#333" }}>
        Welcome back, {session.user?.name || "Individual"}!
      </h1>
      <p style={{ fontSize: "1rem", marginBottom: "2rem", color: "#555" }}>
        Here's your personalized coaching dashboard powered by GuruType AI.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem"
      }}>
        <div style={cardStyle}>
          <h2 style={cardTitle}>Your DISC Type</h2>
          <p style={cardBody}>Review your assessment results and learn how to maximize your unique strengths.</p>
        </div>

        <div style={cardStyle}>
          <h2 style={cardTitle}>AI Coaching Insights</h2>
          <p style={cardBody}>Ask questions, set growth goals, and get AI-generated guidance tailored to your personality.</p>
        </div>

        <div style={cardStyle}>
          <h2 style={cardTitle}>Track Your Progress</h2>
          <p style={cardBody}>Visualize your development over time with a personalized reflection journal and insights graph.</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  borderRadius: "12px",
  padding: "1.5rem",
  boxShadow: "0 4px 8px rgba(0,0,0,0.06)"
};

const cardTitle = {
  fontSize: "1.25rem",
  marginBottom: "0.5rem",
  color: "#222"
};

const cardBody = {
  fontSize: "0.95rem",
  color: "#666"
};
