import { useState, useMemo } from 'react'
import TaskTable from '../components/TaskTable'
import Pagination from '../components/Pagination'

export default function TasksPage({ tasks, setTasks, navigate }) {
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('') // <-- search state
  const perPage = 3

  // filter tasks based on search
  const filteredTasks = useMemo(() => {
    if (!searchQuery) return tasks
    return tasks.filter(task =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [tasks, searchQuery])

  const totalPages = Math.ceil(filteredTasks.length / perPage)
  const pagedTasks = useMemo(
    () => filteredTasks.slice((page - 1) * perPage, page * perPage),
    [filteredTasks, page]
  )

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id))
  const editTask = (id) => navigate(`/tasks/edit/${id}`)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => { setSearchQuery(e.target.value); setPage(1) }}
          className="border px-3 py-2 rounded w-full md:w-1/3"
        />
      </div>

      <TaskTable tasks={pagedTasks} onDelete={deleteTask} onEdit={editTask} />

      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  )
}
