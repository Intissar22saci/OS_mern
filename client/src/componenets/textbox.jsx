import clsx from 'clsx'
import React from 'react'

const Textbox = React.forwardRef(({
    type, placeholder, label, className, register, name, error }, ref) => {

    return (
        <div className='w-full flex flex-col gap-1'>
            {label && <label htmlFor={name} className='text-slat-800'>{label}</label>}
            <div>
                <input 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                ref={ref} 
                {...register} 
                aria-invalid={error ? true : false} 
                className={clsx("bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300", className)} />
            </div>
            {error && <span className='text-xs text-[#f6494fe] mt-0.5'>{error}</span>}

        </div>
    )

})

export default Textbox