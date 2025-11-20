import { Link } from "react-router-dom";

export default function Dashboard({ tasks = [] }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;
  const high = tasks.filter((t) => t.priority === "High").length;
  const today = new Date().toLocaleDateString('en-GB'); // DD/MM/YYYY format

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold">Welcome back 👋</h2>
          <p className="opacity-90 text-lg">Have a productive day! <span className="font-semibold">{today}</span></p>
        </div>
        <div className="text-right">
          <p className="text-sm opacity-80">Total Tasks</p>
          <p className="text-4xl font-extrabold">{total}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow border-l-8 border-green-500">
          <p className="text-sm text-gray-600">Completed</p>
          <p className="text-3xl font-bold text-green-600">{completed}</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-8 border-yellow-500">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-3xl font-bold text-yellow-600">{pending}</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow border-l-8 border-red-500">
          <p className="text-sm text-gray-600">High Priority</p>
          <p className="text-3xl font-bold text-red-600">{high}</p>
        </div>
      </div>

      <div className="bg-white/90 p-6 rounded-2xl shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Quick actions</h3>
          <Link to="/tasks/new" className="px-3 py-1 rounded bg-[var(--brand-2)] text-white">Create task</Link>
        </div>
        <p className="text-sm text-gray-600">Access the Tasks page to manage all tasks.</p>
      </div>
    </div>
  );
}
