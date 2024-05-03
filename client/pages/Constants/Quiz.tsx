"use client"
import React, { useState } from 'react'

// export default function Quiz() {
//     const [button1, setButton1] = React.useState<boolean>(false)
//     const [button2, setButton2] = React.useState<boolean>(false)
//     const [button3, setButton3] = React.useState<boolean>(false)
   
//     const handleClicKEvent1 = () => {
//         setButton1(true)
//         setButton2(false)
//         setButton3(false)
//     }
//     const handleClicKEvent2 = () => {
//         setButton2(true)
//         setButton1(false)
//         setButton3(false)
//     }
//     const handleClicKEvent3 = () => {
//         setButton3(true)
//         setButton2(false)
//         setButton1(false)
//     }
//     const handleRadioButton1 = () => {
//         setButton1(!button1)
//     }
//     const handleRadioButton2 = () => {
//         setButton1(!button2)
//     }
//     const handleRadioButton3 = () => {
//         setButton1(!button3)
//     }
//   return (
//       <div>
//           <ul className="mt-[12px] flex flex-col gap-y-[15px]">
//           <li onClick={handleClicKEvent1}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButton1} className={button1 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{button1 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={button1 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >Software-as-a-Service (SaaS)
//                         </span></label>
//             </li>
//           <li onClick={handleClicKEvent2}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButton2} className={button2 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{button2 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={button2 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >E-Commerce
//                         </span></label>
//             </li>
//           <li onClick={handleClicKEvent3}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButton3} className={button3 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{button3 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={button3 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >Other (Describe it)
//                         </span></label>
//             </li>
           
//         </ul>
//     </div>
//   )
// }


// export default function Quiz() {
   
//   return (
//       <div>
//           <form action="">
//           <ul className="mt-[12px] flex flex-col gap-y-[15px]">
//           <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio"  value="Software-as-a-Service (SaaS)" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.70))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >Software-as-a-Service (SaaS)</span></label>
//             </li>
//           <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio"  value="E-commerce" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.70))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >E-Commerce</span></label>
//             </li>
//           <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="other" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.70))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >Other (Describe it) </span></label>
//                   </li>
                
                  
         
           
//         </ul>
//           </form>
//     </div>
//   )
// }

interface QuizProps {}

export default function Quiz(props: QuizProps) {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [otherDescription, setOtherDescription] = useState<string>('');

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSelectedOption(value);
        if (value !== 'other') {
            setOtherDescription('');
        }
    };

    const handleOtherDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOtherDescription(event.target.value);
    };

    return (
        <div>
            <form action="">
                <ul className="mt-[12px] flex flex-col gap-y-[15px]">
                    <li>
                        <label className='flex items-center gap-2.5'>
                            <input
                                className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]'
                                type="radio"
                                value="Software-as-a-Service (SaaS)"
                                checked={selectedOption === "Software-as-a-Service (SaaS)"}
                                onChange={handleOptionChange}
                            />
                            <span className='text-[color:var(--brand-50,rgba(30,33,36,0.70))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'>
                                Software-as-a-Service (SaaS)
                            </span>
                        </label>
                    </li>
                    <li>
                        <label className='flex items-center gap-2.5'>
                            <input
                                className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]'
                                type="radio"
                                value="E-commerce"
                                checked={selectedOption === "E-commerce"}
                                onChange={handleOptionChange}
                            />
                            <span className='text-[color:var(--brand-50,rgba(30,33,36,0.70))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'>
                                E-Commerce
                            </span>
                        </label>
                    </li>
                    <li>
                        <label className='flex items-center gap-2.5'>
                            <input
                                className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]'
                                type="radio"
                                value="other"
                                checked={selectedOption === "other"}
                                onChange={handleOptionChange}
                            />
                            <span className='text-[color:var(--brand-50,rgba(30,33,36,0.70))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'>
                                Other (Describe it)
                            </span>
                        </label>
                        {selectedOption === 'other' && (
                            <input
                                className='mt-[15px] flex md:w-[300px] items-center gap-2 self-stretch px-3 py-1.5 border border-[color:var(--brand-7,#B9BFC5)] font-medium rounded-md border-solid text-[color:var(--brand-50,rgba(30,33,36,0.50))]
                                bg-white placeholder:text-[color:var(--brand-7,#B9BFC5)] placeholder:text-base placeholder:font-normal placeholder:leading-6 outline-none'
                                type="text"
                                placeholder="Describe it"
                                value={otherDescription}
                                onChange={handleOtherDescriptionChange}
                            />
                        )}
                    </li>
                </ul>
            </form>
        </div>
    );
}



// export function Quiz2() {
//     const [quizBtn1, setQuizBtn1] = React.useState<boolean>(false)
//     const [quizBtn2, setQuizBtn2] = React.useState<boolean>(false)
//     const [quizBtn3, setQuizBtn3] = React.useState<boolean>(false)
//     const [quizBtn4, setQuizBtn4] = React.useState<boolean>(false)
//     const [quizBtn5, setQuizBtn5] = React.useState<boolean>(false)
//     const [quizBtn6, setQuizBtn6] = React.useState<boolean>(false)
//     const [quizBtn7, setQuizBtn7] = React.useState<boolean>(false)
//     const [quizBtn8, setQuizBtn8] = React.useState<boolean>(false)
//     const [quizBtn9, setQuizBtn9] = React.useState<boolean>(false)
//     const [quizBtn10, setQuizBtn10] = React.useState<boolean>(false)
//     const [button1, setButton1] = React.useState<boolean>(false)
//     const [button2, setButton2] = React.useState<boolean>(false)
//     const [show1, setShow1] = React.useState<boolean>(false)
//     const [show2, setShow2] = React.useState<boolean>(false)
//     const handleClicKEvent1 = () => {
//         setButton1(true)
//         setShow1(true)
//         setButton2(false)
//         setShow2(false)
//         setQuizBtn1(false)
//         setQuizBtn2(false)
//         setQuizBtn3(false)
//         setQuizBtn4(false)
//         setQuizBtn5(false)
//         setQuizBtn6(false)
//         setQuizBtn7(false)
//         setQuizBtn8(false)
//         setQuizBtn9(false)
//         setQuizBtn10(false)
//     }
//     const handleClicKEvent2 = () => {
//         setButton2(true)
//         setShow2(true)
//         setButton1(false)
//         setShow1(false)
//         setQuizBtn1(false)
//         setQuizBtn2(false)
//         setQuizBtn3(false)
//         setQuizBtn4(false)
//         setQuizBtn5(false)
//         setQuizBtn6(false)
//         setQuizBtn7(false)
//         setQuizBtn8(false)
//         setQuizBtn9(false)
//         setQuizBtn10(false)
//     }
   
//     const handleRadioButton1 = () => {
//         setButton1(!button1)
//     }
//     const handleRadioButton2 = () => {
//         setButton1(!button1)
//     }
//     // ! Here we find all quiz
//     const handleClicKQuiz1 = () => {
//         setQuizBtn1(true)
//         setQuizBtn2(false)
//         setQuizBtn3(false)
//         setQuizBtn4(false)
//         setQuizBtn10(false)
//     }
//     const handleRadioButtonQuiz1 = () => {
//         setQuizBtn1(!quizBtn1)
        
//     }
//     const handleClicKQuiz2 = () => {
//         setQuizBtn2(true)
//         setQuizBtn1(false)
//         setQuizBtn3(false)
//         setQuizBtn4(false)
//         setQuizBtn10(false)
//     }
//     const handleRadioButtonQuiz2 = () => {
//         setQuizBtn2(!quizBtn2)
//     }
//     const handleClicKQuiz3 = () => {
//         setQuizBtn3(true)
//         setQuizBtn2(false)
//         setQuizBtn1(false)
//         setQuizBtn4(false)
//         setQuizBtn10(false)
//     }
//     const handleRadioButtonQuiz3 = () => {
//         setQuizBtn3(!quizBtn3)
//     }
//     const handleClicKQuiz4 = () => {
//         setQuizBtn4(true)
//         setQuizBtn2(false)
//         setQuizBtn3(false)
//         setQuizBtn1(false)
//         setQuizBtn10(false)
//     }
//     const handleRadioButtonQuiz4 = () => {
//         setQuizBtn4(!quizBtn4)
//     }
//     const handleClicKQuiz5 = () => {
//         setQuizBtn5(true)
//         setQuizBtn6(false)
//         setQuizBtn7(false)
//         setQuizBtn8(false)
//         setQuizBtn9(false)
        
//     }
//     const handleRadioButtonQuiz5 = () => {
//         setQuizBtn5(!quizBtn5)
//     }
//     const handleClicKQuiz6 = () => {
//         setQuizBtn6(true)
//         setQuizBtn5(false)
//         setQuizBtn7(false)
//         setQuizBtn8(false)
//         setQuizBtn9(false)
        
//     }
//     const handleRadioButtonQuiz6 = () => {
//         setQuizBtn6(!quizBtn6)
//     }
//     const handleClicKQuiz7 = () => {
//         setQuizBtn7(true)
//         setQuizBtn6(false)
//         setQuizBtn5(false)
//         setQuizBtn8(false)
//         setQuizBtn9(false)
        
//     }
//     const handleRadioButtonQuiz7 = () => {
//         setQuizBtn7(!quizBtn7)
//     }
//     const handleClicKQuiz8 = () => {
//         setQuizBtn8(true)
//         setQuizBtn6(false)
//         setQuizBtn7(false)
//         setQuizBtn5(false)
//         setQuizBtn9(false)
        
//     }
//     const handleRadioButtonQuiz8 = () => {
//         setQuizBtn8(!quizBtn8)
//     }
//     const handleClicKQuiz9 = () => {
//         setQuizBtn9(true)
//         setQuizBtn6(false)
//         setQuizBtn7(false)
//         setQuizBtn5(false)
//         setQuizBtn8(false)
        
//     }
//     const handleRadioButtonQuiz9 = () => {
//         setQuizBtn9(!quizBtn9)
//     }
//     const handleClicKQuiz10 = () => {
//         setQuizBtn10(true)
//         setQuizBtn1(false)
//         setQuizBtn2(false)
//         setQuizBtn3(false)
//         setQuizBtn4(false)
        
        
//     }
//     const handleRadioButtonQuiz10 = () => {
//         setQuizBtn10(!quizBtn10)
//     }
//     return (
//         <div className="">
//             <ul className="mt-[20px] flex flex-col gap-y-[15px]">
//             <li onClick={handleClicKEvent1}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButton1} className={button1 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{button1 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={button1 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >Revenue growth
//                         </span></label>
//             </li>
//             <li onClick={handleClicKEvent2}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButton2} className={button2 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{button2 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={button2 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >User Base Growth
//                         </span></label>
//             </li>
           
           
//             </ul>
//             {/* //! Revenue  Growth */}
//             {
//                 show1 &&
// <div className="">
//             <div className="mt-[30px]">
//         <h4 className='self-stretch text-[color:var(--brand-8,#3A4046)] text-base not-italic font-medium leading-[normal] font-onest'>As per your chosen goal, what is your current yearly revenue in USD?</h4>
//                             <ul className="mt-[12px] flex flex-col gap-y-[15px]">
//                             <li onClick={handleClicKQuiz1}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz1} className={quizBtn1 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn1 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn1 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >0 - 100K USD
//                         </span></label>
//             </li>
//                             <li onClick={handleClicKQuiz2}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz2} className={quizBtn2 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn2 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn2 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >100K - 1M USD
//                         </span></label>
//             </li>
//                             <li onClick={handleClicKQuiz3}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz3} className={quizBtn3 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn3 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn3 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >1M - 10M USD
//                         </span></label>
//             </li>
//                             <li onClick={handleClicKQuiz4}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz4} className={quizBtn4 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn4 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn4 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >Other (Describe it)
//                         </span></label>
//             </li>
           
//         </ul>
//         </div>
//             <div className="mt-[30px]">
//         <h4 className='self-stretch text-[color:var(--brand-8,#3A4046)] text-base not-italic font-medium leading-[normal] font-onest'>In the next 12 months, what’s your growth target in USD?</h4>
//         <ul className="mt-[12px] flex flex-col gap-y-[15px]">
//         <li onClick={handleClicKQuiz5}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz5} className={quizBtn5 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn5 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn5 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >100K - 250K USD
//                         </span></label>
//             </li>
//         <li onClick={handleClicKQuiz6}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz6} className={quizBtn6 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn6 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn6 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >250K - 1M USD
//                         </span></label>
//             </li>
//         <li onClick={handleClicKQuiz7}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz7} className={quizBtn7 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn7 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn7 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >1M - 10M USD
//                         </span></label>
//             </li>
//         <li onClick={handleClicKQuiz8}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz8} className={quizBtn8 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn8 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn8 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >Other (Describe it)
//                         </span></label>
//             </li>
            
           
//         </ul>
//         </div>
//            </div>
//             }
//             {/* //! User Growth Base */}
//             {
//                 show2 &&
// <div className="">
//             <div className="mt-[30px]">
//         <h4 className='self-stretch text-[color:var(--brand-8,#3A4046)] text-base not-italic font-medium leading-[normal] font-onest'>As per your chosen goal, what is the size of your current user base?</h4>
//         <ul className="mt-[12px] flex flex-col gap-y-[15px]">
//         <li onClick={handleClicKQuiz5}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz5} className={quizBtn5 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn5 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn5 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >0 - 10K
//                         </span></label>
//             </li>
//         <li onClick={handleClicKQuiz6}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz6} className={quizBtn6 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn6 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn6 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >10K - 50K
//                         </span></label>
//             </li>
//         <li onClick={handleClicKQuiz7}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz7} className={quizBtn7 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn7 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn7 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >50K - 100K
//                         </span></label>
//             </li>
//         <li onClick={handleClicKQuiz8}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz8} className={quizBtn8 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn8 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn8 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >100K - 200K
//                         </span></label>
//             </li>
//         <li onClick={handleClicKQuiz9}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz9} className={quizBtn9 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn9 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn9 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >Other
//                         </span></label>
//             </li>
            
           
//         </ul>
//         </div>
//             <div className="mt-[30px]">
//         <h4 className='self-stretch text-[color:var(--brand-8,#3A4046)] text-base not-italic font-medium leading-[normal] font-onest'>In the next 12 months, what’s your growth target in total user base?</h4>
       
//                              <ul className="mt-[12px] flex flex-col gap-y-[15px]">
//                             <li onClick={handleClicKQuiz1}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz1} className={quizBtn1 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn1 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn1 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >10K - 50K
//                         </span></label>
//             </li>
//                             <li onClick={handleClicKQuiz2}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz2} className={quizBtn2 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn2 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn2 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >50K - 100K
//                         </span></label>
//             </li>
//                             <li onClick={handleClicKQuiz3}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz3} className={quizBtn3 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn3 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn3 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >100K - 200K
//                         </span></label>
//             </li>
//                             <li onClick={handleClicKQuiz4}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz4} className={quizBtn4 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn4 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn4 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >200K - 300K
//                         </span></label>
//             </li>
//                             <li onClick={handleClicKQuiz10}>
//                     <label className='flex items-center gap-2.5'>
//                         <div onClick={handleRadioButtonQuiz10} className={quizBtn10 == true ? 'flex w-4 h-4 justify-center items-center p-[3px] border border-[color:var(--brand-70,rgba(30,33,36,0.70))] rounded-[20px] border-solid' : 'w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid  rounded-[20px]'}>{quizBtn10 && (
//                             <div className='w-2.5 h-2.5 shrink-0 rounded-[20px] bg-[#1e2124]'></div>
//                         )}</div>
//                         <span className={quizBtn10 ? 'text-[color:var(--brand-50,#1e2124)] text-right text-sm not-italic font-medium leading-[normal]' : 'text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal]'}
//                         >Other
//                         </span></label>
//             </li>
           
//         </ul>
//         </div>
//            </div>
//             }
            
//         </div>
//     )
// }







// !Chage quiz




// export function Quiz2() {

//     const [show1, setShow1] = React.useState<boolean>(false)
//     const [show2, setShow2] = React.useState<boolean>(false)
//     const handleClicKEvent1 = () => {
//         setShow1(true)
//         setShow2(false)
     
//     }
//     const handleClicKEvent2 = () => {
//         setShow2(true)
//         setShow1(false)
//     }
   

//     // ! Here we find all quiz

//     return (
//         <div className="">
            
//             <form action="">
//             <ul className="mt-[20px] flex flex-col gap-y-[15px]">
//             <li onClick={handleClicKEvent1}>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="revenue growth" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >Revenue growth</span></label>
//             </li>
//             <li onClick={handleClicKEvent2}>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="user base growth" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >User Base Growth</span></label >
//             </li>
         
//         </ul>
//           </form>
            
//             {/* //! Revenue  Growth */}
//             {
//                 show1 &&
// <div className="">
//             <div className="mt-[30px]">
//         <h4 className='self-stretch text-[color:var(--brand-8,#3A4046)] text-base not-italic font-medium leading-
//         [normal] font-onest'>As per your chosen goal, what is your current yearly revenue in USD?</h4>
//                             <form action="">
//                                <ul className="mt-[12px] flex flex-col gap-y-[15px]">
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="A" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >0 - 100K USD</span></label>
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="B" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >100K - 1M USD</span></label >
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="C" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >1M - 10M USD</span ></label>
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="D" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >Other (Describe it) </span ></label>
//             </li>
//         </ul>
//         </form>
//         </div>
//             <div className="mt-[30px]">
//         <h4 className='self-stretch text-[color:var(--brand-8,#3A4046)] text-base not-italic font-medium leading-[normal] font-onest'>In the next 12 months, what’s your growth target in USD?</h4>
//         <form action="">
//                                <ul className="mt-[12px] flex flex-col gap-y-[15px]">
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="A" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >100K - 250K USD</span></label>
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="B" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >250K - 1M USD</span></label >
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="C" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >1M - 10M USD</span ></label>
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="D" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >Other (Describe it) </span ></label>
//             </li>
//         </ul>
//         </form>
//         </div>
//            </div>
//             }
//             {/* //! User Growth Base */}
//             {
//                 show2 &&
// <div className="">
//             <div className="mt-[30px]">
//         <h4 className='self-stretch text-[color:var(--brand-8,#3A4046)] text-base not-italic font-medium leading-[normal] font-onest'>As per your chosen goal, what is the size of your current user base?</h4>
//         <form action="">
//                                <ul className="mt-[12px] flex flex-col gap-y-[15px]">
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="A" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >0 - 10K</span></label>
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="B" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >10K - 50K</span></label >
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="C" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >50K - 100K</span ></label>
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="D" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >100K - 200K</span ></label>
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="E" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >Other</span ></label>
//             </li>
//         </ul>
//         </form>
//         </div>
//             <div className="mt-[30px]">
//                             <h4 className='self-stretch text-[color:var(--brand-8,#3A4046)] text-base not-italic font-medium leading-[normal] font-onest'>In the next 12 months, what’s your growth target in total user base?</h4>
//                             <form action="">
//                                <ul className="mt-[12px] flex flex-col gap-y-[15px]">
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="A" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >10K - 50K</span></label>
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="B" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >50K - 100K</span></label >
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="C" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >100K - 200K</span ></label>
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="D" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >200K - 300K</span ></label>
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="E" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >Other</span ></label>
//             </li>
//         </ul>
//         </form>
//         {/* <ul className="mt-[12px] flex flex-col gap-y-[15px]">
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="A" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >10K - 50K</span></label>
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="B" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >50K - 100K</span></label >
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="C" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >100K - 200K</span ></label>
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="C" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >200K - 300K</span ></label>
//             </li>
//             <li>
//                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="question0" value="C" /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
//                         >Other</span ></label>
//             </li>
//         </ul> */}
                           
//         </div>
//            </div>
//             }
            
//         </div>
//     )
// }



interface Question {
    id: number;
    text: string;
    options: string[];
    selectedOption?: string;
    otherDescription?: string;
}

export function Quiz2() {
    const [questions, setQuestions] = useState<Question[]>([]);

    const handleRevenueButtonClick = () => {
        setQuestions(revenueQuestions.map((question, index) => ({ ...question, id: index })));
    };

    const handleUserBaseButtonClick = () => {
        setQuestions(userBaseQuestions.map((question, index) => ({ ...question, id: index })));
    };

    const handleOptionChange = (questionId: number, selectedOption: string) => {
        setQuestions(prevQuestions =>
            prevQuestions.map(question =>
                question.id === questionId ? { ...question, selectedOption } : question
            )
        );
    };
    const handleOtherDescriptionChange = (questionId: number, description: string) => {
        setQuestions(prevQuestions =>
            prevQuestions.map(question =>
                question.id === questionId ? { ...question, otherDescription: description } : question
            )
        );
       
    };

    return (
        <div className='flex flex-col mt-[20px] gap-[15px]'>
            <button onClick={handleRevenueButtonClick}>
                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="growthType"  /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
                        >Revenue growth</span></label>
             </button>
            <button onClick={handleUserBaseButtonClick}>
                 <label className='flex items-center gap-2.5'><input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="growthType"  /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px] '
                        >User Base Growth</span></label>
             </button>
             {questions.length > 0 && <QuestionList questions={questions} onOptionChange={handleOptionChange} onOtherDescriptionChange={handleOtherDescriptionChange} />}
        </div>
    );
}

interface QuestionListProps {
    questions: Question[];
    onOptionChange: (questionId: number, selectedOption: string) => void;
    onOtherDescriptionChange: (questionId: number, description: string) => void;
}

function QuestionList({ questions, onOptionChange, onOtherDescriptionChange  }: QuestionListProps) {
    return (
        <div className='mt-[15px]'>
            {questions.map(question => (
                <Question key={question.id} question={question} onOptionChange={onOptionChange} onOtherDescriptionChange={onOtherDescriptionChange}  />
            ))}
        </div>
    );
}

interface QuestionProps {
    question: Question;
    onOptionChange: (questionId: number, selectedOption: string) => void;
    onOtherDescriptionChange: (questionId: number, description: string) => void;
}

function Question({ question, onOptionChange, onOtherDescriptionChange }: QuestionProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        onOptionChange(question.id, value);
        if (value !== 'Other') {
            onOtherDescriptionChange(question.id, ''); // Clear otherDescription if option changes from Other
        }
    };
// ! Handling Other-Button Input field here
    const handleOtherDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        onOtherDescriptionChange(question.id, value);
        console.log(value)
    };

    return (
        <div className='mb-[30px]'>
            <h3 className='self-stretch text-[color:var(--brand-8,#3A4046)] text-base not-italic font-medium leading-
         [normal] font-onest mb-[20px]'>{question.text}</h3>
            <ul className=''>
                {question.options.map(option => (
                    <li className='mb-[15px]' key={option}>
                        <label className='flex items-center gap-2.5'>
                            <input className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]'
                                type="radio"
                                name={`question-${question.id}`}
                                value={option}
                                checked={question.selectedOption === option}
                                onChange={handleChange}
                            />
                                <span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
                        >{option}</span>
                            
                        </label>
                    </li>
                ))}
            </ul>
            {question.selectedOption === 'Other(describe it)'  && (
                <input
                required className='flex md:w-[300px] items-center gap-2 self-stretch px-3 py-1.5 border border-[color:var(--brand-7,#B9BFC5)] font-medium rounded-md border-solid text-[color:var(--brand-50,rgba(30,33,36,0.50))]
                bg-white placeholder:text-[color:var(--brand-7,#B9BFC5)] placeholder:text-base placeholder:font-normal placeholder:leading-6 outline-none'
                    type="text"
                    placeholder="Please describe"
                    value={question.otherDescription || ''}
                    onChange={handleOtherDescriptionChange}
                />
            )}
        </div>
    );
}

const revenueQuestions: Question[] = [
    {
        id:0,
        text: 'As per your chosen goal, what is your current yearly revenue in USD?',
        options: ['0 - 100K USD', '100K - 1M USD', '1M - 10M USD', 'Other(describe it)'],
    },
    {
        id:1,
        text: 'In the next 12 months, what’s your growth target in USD?',
        options: ['100K - 250K USD', '250K - 1M USD', '1M - 10M USD', 'Other(describe it)'],
    },
    // Add more revenue growth questions as needed
];

const userBaseQuestions: Question[] = [
    {
        id: 0,
        text: 'As per your chosen goal, what is the size of your current user base?',
        options: ['0 - 10K', '10K - 50K', '50K - 100K','100K - 200K', 'Other(describe it)'],
    },
    {
        id: 1,
        text: 'In the next 12 months, what’s your growth target in total user base?',
        options: ['10K - 50K', '50K - 100K', '100K - 200K','200K - 300K', 'Other(describe it)'],
    },
    // Add more user base growth questions as needed
];



