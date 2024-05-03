"use client"
import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const AddRemove = () => {
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

  return (
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
  )
}

export default AddRemove