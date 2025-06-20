// pages/dashboard/organization.js
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function OrganizationDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="text-white p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-8 font-sans">
      <header className="flex justify-between items-center mb-10 border-b border-gray-700 pb-4">
        <h1 className="text-3xl font-bold">Organization Dashboard</h1>
        <p className="text-gray-400">Welcome, {session?.user?.name || "Org Admin"}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Team Overview */}
        <div className="bg-[#1c1c1e] rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Team Overview</h2>
          <p className="text-sm text-gray-400 mb-4">Summary of DISC profiles across your team</p>
          <ul className="space-y-2">
            <li>D (Dominance): 5 members</li>
            <li>I (Influence): 8 members</li>
            <li>S (Steadiness): 4 members</li>
            <li>C (Conscientiousness): 6 members</li>
          </ul>
        </div>

        {/* Activity Feed */}
        <div className="bg-[#1c1c1e] rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Activity Feed</h2>
          <p className="text-sm text-gray-400 mb-4">Recent coaching activity and DISC completions</p>
          <ul className="text-sm space-y-2">
            <li>✅ Sarah completed her DISC quiz</li>
            <li>📈 New team insights generated</li>
            <li>🧠 Weekly coaching session summary posted</li>
          </ul>
        </div>

        {/* Team Coaching Access */}
        <div className="bg-[#1c1c1e] rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Team Coaching</h2>
          <p className="text-sm text-gray-400 mb-4">Enable or disable team access to AI coaches</p>
          <button className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold">
            Manage Access
          </button>
        </div>

        {/* Invitations */}
        <div className="bg-[#1c1c1e] rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Invite Members</h2>
          <p className="text-sm text-gray-400 mb-4">Add teammates to your organization dashboard</p>
          <input
            type="email"
            placeholder="Teammate email"
            className="w-full p-2 mb-2 rounded-md text-black"
          />
          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold">
            Send Invite
          </button>
        </div>

        {/* Insights Reports */}
        <div className="bg-[#1c1c1e] rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Download Reports</h2>
          <p className="text-sm text-gray-400 mb-4">PDF reports of DISC team insights</p>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">
            Export PDF
          </button>
        </div>

        {/* Settings */}
        <div className="bg-[#1c1c1e] rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p className="text-sm text-gray-400 mb-4">Control display preferences and security</p>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg font-semibold">
            Open Settings
          </button>
        </div>
      </div>
    </div>
  );
}
