import React from 'react'
import Image from 'next/image'
import NavLogo from '@/public/assets/os logo.svg'
import SupportBTN from './SupportBTN'

const Header = () => {
  return (
    <div className="w-full md:pt-[32px] pt-[20px] pb-[16px]">
        <div className="flex justify-between items-center">
        <Image src={NavLogo} alt='Header-Logo' className='md:w-auto w-[90px]'/>
      <SupportBTN/>
      </div>
   </div>
  )
}

export default Header