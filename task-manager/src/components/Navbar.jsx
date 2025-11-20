import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[var(--brand-1)] to-[var(--brand-2)] text-white p-4 rounded-md shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/20 font-bold">TM</div>
          <div className="text-lg font-semibold">TaskManager</div>
        </div>

        <div className="flex gap-4 items-center">
          <Link to="/" className="hover:underline">Dashboard</Link>
          <Link to="/tasks" className="hover:underline">Tasks</Link>
          <Link to="/tasks/new" className="bg-white text-[var(--brand-2)] px-3 py-1 rounded-md font-medium">Add Task</Link>
        </div>
      </div>
    </nav>
  );
}
