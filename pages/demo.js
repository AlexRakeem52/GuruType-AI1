// pages/demo.js
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DemoPage() {
  const router = useRouter();

  // Simulate auth check later based on form submission/session/etc
  useEffect(() => {
    const submitted = sessionStorage.getItem("waitlistSubmitted");
    if (!submitted) {
      router.push("/role"); // Block access unless waitlist form was submitted
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your GuruType AI Demo</h1>
      <p className="mb-8 text-lg max-w-xl text-center">
        You’re moments away from discovering your DISC personality type and meeting your AI coach. Let’s get started!
      </p>
      <button
        onClick={() => router.push("/quiz")}
        className="px-6 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition"
      >
        Start DISC Quiz
      </button>
    </div>
  );
}
