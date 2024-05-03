import React from 'react'
import Header from '../Constants/Header'
import Footer from '../Constants/Footer'
import Calendly from '../Helpers/Calendly'
import Image from 'next/image'
import rightArrow from '@/public/assets/rightArrow.svg'
import Link from 'next/link'

const MeetTeam = () => {
  return (
    <div className="">
       <div className='w-[85%] md:max-w-container2 mx-auto'>
        <Header />
        <main>
      <div className="text-center mx-auto mt-[46px]">
        <p className="text-[#414A35] md:w-[450px]  mx-auto md:text-lg text-[16px] not-italic font-medium leading-[normal]">Schedule a free 30m discovery call with a team of design, development and marketing experts.</p>
        <h1 className="text-[#141803] text-center text-[28px] md:text-[40px] not-italic font-bold leading-[140%] mt-[10px]">Meet your future growth team.</h1>
        </div>
      </main>
        </div>
      <div className="flex justify-center overflow-hidden mt-[40px] md:mt-[60px] ">
      <Calendly/>
      </div>
      <div className='w-[85%] md:max-w-container2 mx-auto'>
         {/* //! Two Buttons */}
         <div className="flex items-center justify-between mt-[50px] md:mb-[83px] mb-[55px]">
          <Link href='/onboarding/invite-member'><button className='flex items-center gap-x-[4px]'><span className='text-[color:var(--brand-70,rgba(30,33,36,0.70))] text-[14px] md:text-[16px] text-base not-italic font-semibold leading-6 font-onest'>Skip</span></button></Link>
          
          <Link href='/onboarding/invite-member'><button type='submit' className='flex justify-center items-center gap-1 px-[18px] text-[14px] md:text-[16px] py-2.5 bg-[#1e2124] rounded'><span className='text-white text-base not-italic font-semibold leading-6'>Next Step</span><Image src={rightArrow} alt='Right-Arrow'/></button></Link>
        </div>
      <Footer/>
      </div>
   </div>
  )
}

export default MeetTeam