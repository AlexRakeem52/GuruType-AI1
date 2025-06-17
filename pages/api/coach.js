import { useSession } from "next-auth/react";
import { useState } from "react";
import Head from "next/head";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

export default function CoachPage({ session }) {
  const { data: clientSession } = useSession();
  const [discType, setDiscType] = useState("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!discType || !question) {
      alert("Please enter your DISC type and a question.");
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/coach", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ discType, question }),
      });

      const data = await res.json();
      if (data.reply) {
        setResponse(data.reply);
      } else {
        setResponse("No response from AI.");
      }
    } catch (error) {
      setResponse("Error communicating with AI.");
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>GuruType AI Coach</title>
      </Head>
      <div className="min-h-screen bg-white px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome, {session?.user?.name || "Guru"}</h1>

        <div className="max-w-xl mx-auto">
          <label className="block mb-2 font-semibold">DISC Type:</label>
          <input
            className="w-full border border-gray-300 rounded p-2 mb-4"
            placeholder="e.g., Dominance, Influence, Steadiness, Conscientiousness"
            value={discType}
            onChange={(e) => setDiscType(e.target.value)}
          />

          <label className="block mb-2 font-semibold">Ask Your Question:</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2 mb-4"
            rows={4}
            placeholder="What's your biggest challenge right now?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Thinking..." : "Ask Your Coach"}
          </button>

          {response && (
            <div className="mt-6 bg-gray-100 p-4 rounded">
              <h3 className="font-semibold mb-2">Coach says:</h3>
              <p>{response}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// 🔐 Protect route with server-side session check
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
