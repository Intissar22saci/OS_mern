import React, { useState } from 'react'
import clsx from 'clsx'
import moment from 'moment'
import { FaBug, FaTasks, FaThumbsUp, FaUser } from 'react-icons/fa'
import { GrInProgress } from 'react-icons/gr'
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp, MdOutlineDoneAll, MdOutlineMessage, MdTaskAlt } from 'react-icons/md'
import { RxActivityLog } from 'react-icons/rx'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import Tasks from './tasks'
import { PRIOTITYSTYELS, TASK_TYPE } from "../utils"
import { useGetSingleTaskQuery } from '../redux/slices/taskApiSlice'
import Button from '../componenets/button'

const assets = [
  "https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2534523/pexels-photo-2534523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/804049/pexels-photo-804049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
]

const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
}

const bgColor = {
  high: "bg-red-200",
  medium: "bg-yellow-200",
  low: "bg-blue-200",
}

const TASKTYPEICON = {
  commented: (
    <div className='w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white'>
      <MdOutlineMessage />,
    </div>
  ),
  started: (
    <div className='w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white'>
      <FaThumbsUp size={20} />
    </div>
  ),
  assigned: (
    <div className='w-6 h-6 flex items-center justify-center rounded-full bg-gray-500 text-white'>
      <FaUser size={14} />
    </div>
  ),
  bug: (
    <div className='text-red-600'>
      <FaBug size={24} />
    </div>
  ),
  completed: (
    <div className='w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white'>
      <MdOutlineDoneAll size={24} />
    </div>
  ),
  "in progress": (
    <div className='w-8 h-8 flex items-center justify-center rounded-full bg-violet-600 text-white'>
      <GrInProgress size={16} />
    </div>
  ),
}

const act_types = [
  "Started",
  "Completed",
  "In Progress",
  "Commented",
  "Bug",
  "Assigned",
]

const TaskDetails = () => {
  const { id } = useParams()
  const {data, isLoading, error} = useGetSingleTaskQuery(id)
  const [selected, setSelected] = useState(act_types)
  const task = data?.task

  const [text, setText] = useState('')
  const handleSubmit = async () => {}

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='w-full flex flex-col gap-3 mb-4 overflow-y-hidden'>
      <h1 className='text-2xt text-gray-600 font-bold'>{task?.title}</h1>

      <div className='w-full flex flex-col md:flex-row gap-5 2xl:gap-8 bg-white shadow-md p-8 overflow-y-auto'>
        {/* left side */}
        <div className='w-full md:w-1/2 space-y-8'>
          <div className='flex items-center gap-5'>
            <div className={clsx(
              "flex gap-1 items-center text-base font-semibold px-3 py-1 rounded-full",
              PRIOTITYSTYELS[task?.priority],
              bgColor[task?.priority]
            )}>
              <span className='text-lg'>{ICONS[task?.priority]}</span>
              <span className='uppercase'>{task?.priority} Priority</span>
            </div>

            <div className={clsx("flex items-center gap-2")}>
              <div className={clsx("w-4 h-4 rounded-full", TASK_TYPE[task.stage])} />
              <span className='text-black uppercase'>{task?.stage}</span>
            </div>
          </div>
          <p className='text-gray-500'>
            Created At: {new Date(task?.date).toDateString()}
          </p>



          <div className='space-y-4 py-6'>
            <p className='text-gray-500 font-semibold text-sm'>
              SUB-TASKS
            </p>
            <div className='space-y-8'>
              {task?.subTasks?.map((el, index) => (
                <div key={index} className='flex gap-3'>
                  <div className='w-10 h-10 flex items-center justify-center rounded-full bg-violet-50-200'>
                    <MdTaskAlt className='text-violet-600' size={26} />
                  </div>

                  <div className='space-y-1'>
                    <div className='flex gap-2 items-center'>
                      <span className='text-sm text-gray-500'>
                        {new Date(el?.date).toDateString()}
                      </span>

                      <span className='px-2 py-0.5 text-center text-sm rounded-full bg-violet-100 text-violet-700 font-semibold'>
                        {el?.tag}
                      </span>
                    </div>

                    <p className='text-gray-700'>{el?.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right side */}
        <div className='w-full md:w-1/3'>
          <h4 className='text-gray-600 font-semibold text-lg mb-5'>Add Activity</h4>
          <div className='w-full flex flex-wrap gap-5'>
            {act_types.map((item, index) => (
              <div key={item} className='flex gap-2 items-center'>
                <input
                  type='checkbox'
                  className='w-4 h-4'
                  checked={selected === item ? true : false}
                  onChange={(e) => setSelected(item)} />
                <p>{item}</p>
              </div>
            ))}

            <textarea
              rows={10}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='Type ......'
              className='bg-white w-full mt-10 border border-gray-300 outline-none p-4 rounded-md focus:ring-2 ring-blue-500'></textarea>

            <Button
              type='button'
              label='Submit'
              onClick={handleSubmit}
              className='bg-blue-600 text-white rounded' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskDetails