import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function validateTask(values) {
  const errors = {};
  if (!values.title || values.title.trim().length < 3)
    errors.title = "Title must be at least 3 characters";
  if (!values.dueDate) errors.dueDate = "Due date is required";
  return errors;
}

export default function TaskFormPage({ tasks, setTasks }) {
  const params = useParams();
  const navigate = useNavigate();
  const editing = Boolean(params.id);

  const existing = tasks.find((t) => t.id === params.id) || null;

  const { values, errors, handleChange, handleSubmit, reset, setValues } =
    useForm(
      { title: "", description: "", priority: "Medium", dueDate: "", completed: false },
      validateTask
    );

  useEffect(() => {
    if (editing && existing) setValues(existing);
  }, [editing, existing]);

  const onSave = (vals) => {
    if (editing) {
      setTasks(tasks.map((t) => (t.id === params.id ? { ...t, ...vals } : t)));
    } else {
      const newTask = { ...vals, id: uuidv4() };
      setTasks([newTask, ...tasks]);
    }
    navigate("/tasks");
  };

  return (
    <div className="bg-white/90 p-6 rounded-2xl shadow max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-[var(--brand-2)]">
        {editing ? "Edit Task" : "Create Task"}
      </h2>
      <form onSubmit={handleSubmit(onSave)} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Title</label>
          <input
            name="title"
            value={values.title}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded text-[var(--brand-1)]"
          />
          {errors.title && (
            <div className="text-red-600 text-sm mt-1">{errors.title}</div>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={values.description}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded"
            rows={4}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="text-sm font-medium">Priority</label>
            <select
              name="priority"
              value={values.priority}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Due date</label>
            <input
              type="date"
              name="dueDate"
              value={values.dueDate}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded"
            />
            {errors.dueDate && (
              <div className="text-red-600 text-sm mt-1">{errors.dueDate}</div>
            )}
          </div>

          <div className="flex items-end">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="completed"
                checked={values.completed}
                onChange={handleChange}
              />
              <span className="text-sm">Completed</span>
            </label>
          </div>
        </div>

        <div className="flex gap-2 justify-end">
          <button
            type="button"
            onClick={() => {
              reset();
              navigate("/tasks");
            }}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-[var(--brand-1)] text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
