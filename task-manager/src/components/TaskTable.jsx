// TaskTable.jsx
export default function TaskTable({ tasks, onDelete, onEdit }) {
  return (
    <div className="bg-white/90 p-4 rounded-xl shadow">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Title</th>
            <th className="py-2">Priority</th>
            <th className="py-2">Due Date</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id} className="hover:bg-gray-50">
              <td className="py-2">
                {task.title}
                <div className="text-xs text-gray-500">{task.description}</div>
              </td>
              <td className="py-2">{task.priority}</td>
              <td className="py-2">{new Date(task.dueDate).toLocaleDateString('en-GB')}</td>
              <td className="py-2">
                {task.completed
                  ? <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">Completed</span>
                  : <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs">Pending</span>}
              </td>
              <td className="py-2 flex gap-2">
                <button
                  onClick={() => onEdit(task.id)}
                  className="px-2 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(task.id)}
                  className="px-2 py-1 border text-red-600 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {tasks.length === 0 && (
            <tr>
              <td colSpan={5} className="py-6 text-center text-gray-500">
                No tasks available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
