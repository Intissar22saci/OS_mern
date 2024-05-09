import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io"
import { useParams } from 'react-router-dom'
import AddTask from '../componenets/addTask'
import BoardView from '../componenets/boardView'
import Button from '../componenets/button'
import TaskTitle from '../componenets/taskTitle'
import Title from '../componenets/title'
import { useGetAllTasksQuery } from '../redux/slices/taskApiSlice'


const TASK_TYPE = {
  backlog: 'bg-gray-600',
  todo: 'bg-blue-600',
  "in progress": 'bg-yellow-600',
  done: 'bg-green-600'
}

const Tasks = () => {
  const params = useParams()

  const [selected, useSelected] = useState(0)
  const [open, setOpen] = useState(false)

  const status = params?.status || ""
  const { data } = useGetAllTasksQuery({
    strQuery: status,
  })

  return (
    <div className='w-full'>
      <div className='flex items-center justify-between mb-4'>
        <Title title={status ? `${status} Tasks` : "Tasks"} />

        {
          !status && (
            <Button
              onClick={() => setOpen(true)}
              label="Create Task"
              icon={<IoMdAdd className='text-lg' />}
              className="flex flex-row-reverse gap-1 items-center bg-blue-500 text-white rounded-md py-2 2xl:py-2.5"
            />
          )}
      </div>
      <div>
        {
          !status && (
            <div className='w-full flex justify-between gap-4 md:gap-x-12 py-4'>
              <TaskTitle label="Backlog" className={TASK_TYPE.backlog} />
              <TaskTitle label="To Do" className={TASK_TYPE.todo} />
              <TaskTitle label="In Progress" className={TASK_TYPE['in progress']} />
              <TaskTitle label="Done" className={TASK_TYPE.done} />
            </div>
          )}

        <BoardView tasks={data?.tasks} />

      </div>

      <AddTask open={open} setOpen={setOpen} />
    </div>
  )
}

export default Tasks