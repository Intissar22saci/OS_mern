import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io"
import { useParams } from 'react-router-dom'
import AddProject from '../componenets/addProject'
import BoardView from '../componenets/boardView'
import Button from '../componenets/button'
import TaskTitle from '../componenets/taskTitle'
import Title from '../componenets/title'
import { useGetAllProjectsQuery } from '../redux/slices/projectApiSlice'


const PROJECT_TYPE = {
  backlog: 'bg-gray-600',
  "in progress": 'bg-yellow-600',
  done: 'bg-green-600'
}

const Projects = () => {
  const params = useParams()

  const [selected, useSelected] = useState(0)
  const [open, setOpen] = useState(false)

  const status = params?.status || ""
  const { data } = useGetAllProjectsQuery({
    strQuery: status,
  })

  return (
    <div className='w-full'>
      <div className='flex items-center justify-between mb-4'>
        <Title title={status ? `${status} Projects` : "Projects"} />

        {
          !status && (
            <Button
              onClick={() => setOpen(true)}
              label="New Project"
              icon={<IoMdAdd className='text-lg' />}
              className="flex flex-row-reverse gap-1 items-center bg-blue-500 text-white rounded-md py-2 2xl:py-2.5"
            />
          )}
      </div>
      <div>
        {
          !status && (
            <div className='w-full flex flex-row justify-between gap-2 md:gap-x-12 py-4'>
              <TaskTitle label="Backlog" className={PROJECT_TYPE.backlog} />
              <TaskTitle label="In Progress" className={PROJECT_TYPE['in progress']} />
              <TaskTitle label="Done" className={PROJECT_TYPE.done} />
            </div>
          )}

        <BoardView projects={data?.projects} />

      </div>

      <AddProject open={open} setOpen={setOpen} />
    </div>
  )
}

export default Projects