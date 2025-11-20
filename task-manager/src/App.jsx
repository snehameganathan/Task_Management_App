import { Routes, Route, useNavigate } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { SAMPLE_TASKS } from "./data/sampleTasks";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("tm_tasks", SAMPLE_TASKS);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Dashboard tasks={tasks} />} />
          <Route path="/dashboard" element={<Dashboard tasks={tasks} />} />
          <Route
            path="/tasks"
            element={
              <TasksPage
                tasks={tasks}
                setTasks={setTasks}
                navigate={navigate}
              />
            }
          />
          <Route
            path="/tasks/new"
            element={<TaskFormPage tasks={tasks} setTasks={setTasks} />}
          />
          <Route
            path="/tasks/edit/:id"
            element={<TaskFormPage tasks={tasks} setTasks={setTasks} />}
          />
        </Routes>
      </main>
    </div>
  );
}
