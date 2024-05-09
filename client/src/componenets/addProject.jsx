import { Dialog } from '@headlessui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useCreateProjectMutation } from '../redux/slices/projectApiSlice'
import { dateFormatter } from '../utils'
import Button from './button'
import ModalWrapper from './modalWrapper'
import SelectList from './selectList'
import Textbox from './textbox'

const LISTS = ["backlog", "in progress", "done"]

const AddProject = ({ open, setOpen, project }) => {
    const defaultValues = {
        title: project?.title || "",
        description: "",
        date: dateFormatter(project?.date || new Date())
    }

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues })
    const [stage, setStage] = useState(project?.stage?.toLowerCase() || LISTS[0]);

    const [createProject] = useCreateProjectMutation();
    const URLS = project?.assets ? [...task.assets] : []

    const submitHandler = async (data) => {
        try {
            const newData = {
                ...data,
                stage,
            }

            const res = project?._id ? await createProject(newData).unwrap() : []

            toast.success(res.message)

            setTimeout(() => {
                setOpen(false)
            }, 500)
        } catch (err) {
            console.log(err)
            toast.error(err?.data?.message || err.error)
        }
    }

    return (
        <ModalWrapper open={open} setOpen={setOpen}>
            <form onSubmit={handleSubmit(submitHandler)}>
                <Dialog.Title as='h2' className="text-base font-bold leading-6 text-gray-900 mb-4">
                    {project ? 'Update Project' : 'New Project'}
                </Dialog.Title>

                <div className='mt-2 flex flex-col gap-6'>
                    <Textbox
                        placeholder="Project Name"
                        type="text"
                        name="title"
                        label="Project Name"
                        className="w-full rounded"
                        register={register("title", { required: 'Title is required' })}
                        error={errors.title ? errors.title.message : ""}
                    />
                </div>

                <div className='mt-2 flex flex-col gap-6'>
                    <Textbox
                        placeholder="Describe the project"
                        type="text"
                        name="description"
                        label="Description"
                        className="w-full rounded p-2 row-span-3"
                        isTextArea={true}

                    />
                </div>

                <div className='flex gap-4 w-full'>
                        <Textbox
                            placeholder='Date'
                            type='date'
                            name='date'
                            label='Start Date'
                            className='w-full rounded'
                            register={register("date", { required: "Date is required" })}
                            error={errors.date ? errors.date.message : ""}
                        />
                </div>
                <div className='bg-gray-50 py-6 sm:flex sm:flex-row-reverse gap-4'>
                    <Button
                        label='Create Project'
                        type='submit'
                        className='bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto'
                    />
                    <Button
                        type='button'
                        className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
                        onClick={() => setOpen(false)}
                        label='Cancel'
                    />
                </div>
            </form>
        </ModalWrapper>
    )
}

export default AddProject