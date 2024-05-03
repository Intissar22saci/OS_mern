import React from 'react'
import Image from 'next/image'
import msgIcon from '@/public/assets/msgIcon.svg'
const SupportBTN = () => {
  return (
      <div>
          <button className='flex justify-center items-end gap-1 md:px-[18px] md:py-2.5 md:rounded border border-[color:var(--Brand,#1E2124)] border-solid bg-white px-[9px] py-[5px] rounded-[4px] xl:rounded text-[color:var(--Brand,#1E2124)] text-base not-italic font-semibold leading-6'>
            Support<Image src={msgIcon} alt='Header-Logo' />
          </button>
          

    </div>
  )
}

export default SupportBTN