// pages/dashboard/organization.js
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function OrganizationDashboard() {
  const { data: session, status } = useSession();

  useEffect(() => {
    document.title = "Organization Dashboard | GuruType AI";
  }, []);

  if (status === "loading") {
    return <div style={styles.loading}>Loading...</div>;
  }

  if (!session) {
    return (
      <div style={styles.accessDenied}>
        <h2>Access Denied</h2>
        <p>Please sign in to view your organization dashboard.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome, {session.user.name}</h1>
      <p style={styles.subtext}>This is your organization dashboard where you can:</p>
      <ul style={styles.list}>
        <li>📊 Monitor DISC assessments across departments</li>
        <li>👥 Manage user licenses and invite team members</li>
        <li>📁 Download team coaching reports</li>
        <li>📈 View personality trends and compatibility insights</li>
        <li>🛠️ Customize AI coach settings for company culture</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#0d0d0d",
    color: "#fff",
    minHeight: "100vh",
    padding: "2rem",
    fontFamily: "sans-serif",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  subtext: {
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
  },
  list: {
    fontSize: "1rem",
    lineHeight: "1.8",
    paddingLeft: "1rem",
  },
  loading: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    backgroundColor: "#0d0d0d",
  },
  accessDenied: {
    minHeight: "100vh",
    backgroundColor: "#0d0d0d",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
};
