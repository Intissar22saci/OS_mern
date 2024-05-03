"use client"
import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Header from '../Constants/Header'
import Footer from '../Constants/Footer'
import Image from 'next/image'
import rightArrow from '@/public/assets/rightArrow.svg'
import Link from 'next/link'
// import AddRemove from '../Helpers/AddRemove'

const InviteMember = () => {
  const [inputFields, setInputFields] = useState([{ firstName: '', email: '' }]);
  const [removeButtonShow, setRemoveButtonShow] = useState<boolean>(false);

  const handleAddFields = () => {
      // const values = [...inputFields];
      // values.push({ value: '' });
      // setInputFields(values);
      setInputFields([...inputFields, { firstName: '', email: '' }]);
    if (inputFields.length > 0 ) {
        setRemoveButtonShow(true)
    } 
    
}

  const handleRemoveFields = (indexToRemove: number) => {
    setInputFields(inputFields.filter((_, index) => index !== indexToRemove))
    };
    const handleChangeInputName = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
      const values = [...inputFields];
      values[index].firstName = event.target.value;
      setInputFields(values);
  };
    const handleChangeInputEmail = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
      const values = [...inputFields];
      values[index].email = event.target.value;
      setInputFields(values);
  };
  const data = {
    firstName: 'ali',
    email:'ali@gmail.com'
  }
      // Retrieve userId from session storage
      const userId = sessionStorage.getItem('userId') || '{}';
  const handleSubmit = async () => {
    try {
  
  
      // Iterate over inputFields and send invitation to each user
      for (const inputField of inputFields) {
        const { firstName, email } = inputField;
        
        const response = await fetch(`http://localhost:5000/api/invite/${userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ firstName, email }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to send invitation');
        }
  
        // Invitation sent successfully
      }
    } catch (error) {
      console.error('Error sending invitation:', error);
      // Handle error (display error message, etc.)
    }
  };
  return (
    <div className='w-[85%] md:max-w-container2 mx-auto'>
      <Header />
      <main>
      <div className="text-center mx-auto mt-[46px]">
        <p className="text-[#414A35] text-[16px] md:text-lg not-italic font-medium leading-[normal]">Let’s get growth sorted!</p>
        <h1 className="text-[#141803] text-center md:text-[40px] text-[28px] not-italic font-bold leading-[140%] mt-[10px]">OS works better<br />with your team.</h1>
        </div>
          {/* //* Get data From Users */}
          <div className='md:mt-[96px] mt-[56px]'>
          <div className="flex items-center justify-end gap-[10px] mb-[20px]">
              {/* Add Element */}
              <button onClick={handleAddFields} className='flex items-center gap-[5px] rounded py-[5px] px-[8px] bg-[#1e2124]' type="button"><IoMdAdd className='text-[#fff] text-sm not-italic font-normal leading-[normal]' /><span className='text-[#fff] text-sm not-italic font-normal leading-[normal]'>Add</span></button>
              {/* Remove Element */}
       
          </div>
           
          {
              inputFields.map((inputField, index) => (
                <div className="flex md:flex-row flex-col md:w-[600px] self-stretch mx-auto justify-center items-start gap-5 md:mt-[24px] mt-[24px]">
                {/* //!First name */}
                <div className="flex flex-col items-start gap-1.5 self-stretch ">
                  <span className="text-[#6A6A6A] text-sm not-italic font-normal leading-[normal]">First Name</span>
                  <input value={inputField.firstName} onChange={(event)=>handleChangeInputName(index, event)} type="text" placeholder='Enter first name' required className='flex md:w-[290px] items-center gap-2 self-stretch px-3 py-2.5 border border-[color:var(--brand-7,#D3D3D3)] rounded-md border-solid
    bg-white placeholder:text-[color:var(--brand-7,#BDBDBD)] placeholder:text-base placeholder:font-normal placeholder:leading-6 outline-none shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]' />
                </div>
                  {/* //!Email */}
                <div className="flex flex-col items-start gap-1.5 self-stretch relative">
                  <span className="text-[#6A6A6A] text-sm not-italic font-normal leading-[normal]">Email</span>
                  <input value={inputField.email} onChange={(event) =>handleChangeInputEmail(index,event)} type="email" placeholder='Email Address' required className='flex md:w-[290px] items-center gap-2 self-stretch px-3 py-2.5 border border-[color:var(--brand-7,#D3D3D3)] rounded-md border-solid
    bg-white placeholder:text-[color:var(--brand-7,#BDBDBD)] placeholder:text-base placeholder:font-normal placeholder:leading-6 outline-none shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]' />
                     {
          index  !== 0  &&  (
            <button onClick={()=>handleRemoveFields(index)} className='md:mt-0 mt-[10px] md:absolute top-[33px] right-[-100px] flex items-center gap-[5px] rounded py-[5px] px-[8px] bg-[#d6d8d7]' type="button"><RxCross1 className='text-[#1e2124] text-sm not-italic font-normal leading-[normal]' /><span className='text-[#1e2124] text-sm not-italic font-normal leading-[normal]'>Remove</span></button>
          )
              }
                </div>
                  </div>
              ))
              
          } 
              
          
    </div>
           {/* //! Two Buttons (Next & Skip) */}
           <div className="flex items-center justify-between mt-[50px] md:mb-[394px] mb-[180px]">
          <Link href='/onboarding/business-brief'><button className='flex items-center gap-x-[4px]'><span className='text-[color:var(--brand-70,rgba(30,33,36,0.70))] text-[14px] md:text-[16px] text-base not-italic font-semibold leading-6 font-onest'>Skip</span></button></Link>
          
          <Link href='/onboarding/invite-member'><button onClick={handleSubmit} type='submit' className='flex justify-center items-center gap-1 px-[18px] text-[14px] md:text-[16px] py-2.5 bg-[#1e2124] rounded'><span className='text-white text-base not-italic font-semibold leading-6'>Next Step</span><Image src={rightArrow} alt='Right-Arrow'/></button></Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default InviteMember