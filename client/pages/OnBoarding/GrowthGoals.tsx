"use client"
import React, { useEffect, useState } from 'react'
import Header from '../Constants/Header'
import Footer from '../Constants/Footer'
import Image from 'next/image'
import leftArrow from '@/public/assets/leftArrow.svg'
import rightArrow from '@/public/assets/rightArrow.svg'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid';
// import { Quiz2 } from '../Constants/Quiz'

const GrowthGoals = () => {
 
  const [selectedGrowthGoal, setSelectedGrowthGoal] = useState<string>('');
  // const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  
  useEffect(() => {
    // Retrieve data from sessionStorage when component mounts
    const storedData = sessionStorage.getItem('growthGoalsData');
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        setSelectedGrowthGoal(parsedData.selectedGrowthGoal);
        setQuestions(parsedData.questions);
    }
}, []);

  const handleSubmit = async () => {
    if (!selectedGrowthGoal) {
      console.error('Please select a growth goal');
      return;
    }
    // try {
    //   const userId = sessionStorage.getItem('userId'); // Get the userId from local storage
    //   const headers = {
    //     'Content-Type': 'application/json',
    //     'user-id': userId || '', // Provide a default value if userId is null
    //   };
    //   const response = await fetch('http://localhost:5000/api/submit', {
    //     method: 'POST',
    //     headers: headers,
    //     body: JSON.stringify({
    //       userId: localStorage.getItem('userId'),
    //       GrowthGoal:selectedGrowthGoal
    //     }),
    //   });
    //   if (response.ok) {
    //     console.log('Growth goal response saved successfully');
    //     // Redirect or handle success
    //   } else {
    //     console.error('Error saving growth goal response');
    //     // Handle error
    //   }
    // } catch (error) {
    //   console.error('Error saving growth goal response:', error);
    //   // Handle error
    // }
    
   



  // Extract selected options from questions
  
      // Extract selected options from questions
  const selectedOptions = questions.map(question => {
    if (question.selectedOption === 'Other(describe it)') {
      return question.otherDescription || ''; // Use otherDescription if available
    }
    return question.selectedOption;
  });
  // const selectedOptions = questions.map(question => question.selectedOption);
  
    
  const dataToStore = JSON.stringify({
    selectedGrowthGoal: selectedGrowthGoal,
    selectedOptions: selectedOptions,
    questions: questions,
  });
  sessionStorage.setItem('growthGoalsData', dataToStore);
    
  };
  

  const handleRevenueButtonClick = () => {
    setSelectedGrowthGoal('Revenue Growth');
    // Reset selected options
    // setSelectedOptions([]);
      setQuestions(revenueQuestions.map((question, index) => ({ ...question, id: index })));
  };

  const handleUserBaseButtonClick = () => {
    setSelectedGrowthGoal('User Base Growth');
    // Reset selected options
    // setSelectedOptions([]);
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
    <div className='w-[85%] md:max-w-container2 mx-auto'>
      <Header/>
      <main>
        {/* //! : This is the content and heading portion */}
      <div className="text-center mx-auto mt-[46px]">
        <p className="text-[#414A35] text-[16px] md:text-lg not-italic font-medium leading-[normal]">Share your current objectives and future targets.</p>
        <h1 className="text-[#141803] text-center text-[32px] md:text-[40px] not-italic font-bold leading-[140%] mt-[10px]">What’s the growth situation?</h1>
        </div>
        {/* //!: Here is the progress of how many steps you complete */}
        <div className="flex items-center gap-[20px] md:gap-[20px] justify-center mt-[62px] py-[16px]">
          <div className="hidden md:block">
            <div className="md:w-[187px] h-1 self-stretch rounded-[10px] bg-[#3A4046]"></div>
            <span className="text-[color:var(--Brand,#3A4046)] text-[14px] md:text-[16px] text-base not-italic font-semibold leading-[150%]">1. Business Brief</span>
          </div>
          <div className="">
            <div className="md:w-[187px] h-1 self-stretch rounded-[10px] bg-[#1e2124]"></div>
            <span className="text-[color:var(--Brand,#1E2124)] text-[14px] md:text-[16px] text-base not-italic font-semibold leading-[150%]">2. Growth Goals</span>
          </div>
          <div className="">
            <div className="md:w-[187px] h-1 self-stretch rounded-[10px] bg-[#D9D9D9]"></div>
            <span className="text-[color:var(--Brand,#1E2124B2)] text-[14px] md:text-[16px] text-base not-italic font-semibold leading-[150%]">3. Company Details</span>
          </div>
        </div>
        {/* //! : Model of  the product (QUESTION/ANSWER) */}
        <div className="mt-[76px]">
          <h4 className='self-stretch text-[color:var(--brand-8,#3A4046)] text-base not-italic font-medium leading-[normal] font-onest'>Pick your primary growth goal</h4>
          {/* //? Import Quiz2 from Quiz Component */} 
          {/* //! ITS FOR REVENUE GROWTH and USER BASE GROWTH */}
          {/* <Quiz2/> */}
          <div className='flex flex-col mt-[20px] gap-[15px]'>
            <button onClick={handleRevenueButtonClick}>
                 <label className='flex items-center gap-2.5'><input checked={selectedGrowthGoal === 'Revenue Growth'} value='Revenue growth' className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="growthType"  /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px]'
                        >Revenue growth</span></label>
             </button>
            <button onClick={handleUserBaseButtonClick}>
                 <label className='flex items-center gap-2.5'><input checked={selectedGrowthGoal === 'User Base Growth'} value='User Base Growth' className='w-[16px] h-[16px] border border-[color:var(--brand-7,#B9BFC5)] border-solid form-radio accent-[#1E2124] rounded-[20px]' type="radio" name="growthType"  /><span className='text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-right text-sm not-italic font-medium leading-[normal] text-[14px] '
                        >User Base Growth</span></label>
             </button>
             {questions && questions.length > 0 && <QuestionList questions={questions} onOptionChange={handleOptionChange} onOtherDescriptionChange={handleOtherDescriptionChange} />}
        </div>
        </div>
        
        
        {/* //! : Two Buttons */}
      <div className="flex items-center justify-between mt-[50px] mb-[76px]">
          <Link href='/onboarding/business-brief'><button className='flex items-center gap-x-[4px]'><Image src={leftArrow} alt='Left-Arrow'/><span className='text-[color:var(--brand-70,rgba(30,33,36,0.70))] text-[14px] md:text-[16px] text-base not-italic font-semibold leading-6 font-onest'>Back</span></button></Link>
          <Link href='/onboarding/sign-up'><button onClick={handleSubmit} className='flex justify-center items-center gap-1 px-[18px] text-[14px] md:text-[16px] py-2.5 bg-[#1e2124] rounded'><span className='text-white text-base not-italic font-semibold leading-6'>Next Step</span><Image src={rightArrow} alt='Right-Arrow'/></button></Link>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

//! All Details about quiz

interface Question {
  id: number;
  text: string;
  options: string[];
  selectedOption?: string;
  otherDescription?: string;
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
}interface QuestionProps {
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

export default GrowthGoals