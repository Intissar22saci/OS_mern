import clsx from 'clsx'
import React, { useState } from 'react'
import { BiMessageAltDetail } from "react-icons/bi"
import { FaList } from "react-icons/fa"
import { MdAttachFile, MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardDoubleArrowUp } from 'react-icons/md'
import TaskDialog from './taskDialog'
import { TASK_TYPE, formatDate } from "../utils"


const TaskCard = ({ task }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className='w-full h-fit bg-white shadow-md p-4 rounded'>

        <div className='w-full flex justify-between'>
            <div className='flex items-center gap-2'>
                <div className={clsx("w-4 h-4 rounded-full", TASK_TYPE[task.stage])}/>
                <h4 className='line-clamp-1 text-black'>{task?.title}</h4>  
            </div>
            <TaskDialog task={task} />
            </div>

            <span className='text-sm text-gray-600'>
                {formatDate(new Date(task?.date))}
            </span>

            <div className='w-full border-t border-gray-200 my-2' />
            <div className='flex items-center justify-between mb-2'>
                <div className='flex items-center gap-3'>
                    <div className='flex gap-1 items-center text-sm text-gray-600'>
                        <BiMessageAltDetail />
                        <span>{task?.activities?.length}</span>
                    </div>
                    <div className='flex gap-1 items-center text-sm text-gray-600'>
                        <MdAttachFile />
                        <span>{task?.activities?.length}</span>
                    </div>
                    <div className='flex gap-1 items-center text-sm text-gray-600'>
                        <FaList />
                        <span>{task?.activities?.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskCard