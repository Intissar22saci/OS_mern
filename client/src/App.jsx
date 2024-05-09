import { Route, Routes } from "react-router-dom"
import { Toaster } from "sonner"
import TaskDetails from "./pages/taskDetails"
import Tasks from "./pages/tasks"
import Projects from "./pages/projects"

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route>
          <Route path="/" element={<Tasks />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/done/:status" element={<Tasks />} />
          <Route path="/in-progress/:status" element={<Tasks />} />
          <Route path="/todo/:status" element={<Tasks />} />
          <Route path="/backlog/:status" element={<Tasks />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Route>
      </Routes>

      <Toaster richColors />
    </main>
  )
}

export default App
