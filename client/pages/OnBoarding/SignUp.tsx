'use client'
import React, { useState, useEffect } from 'react';
import Header from '../Constants/Header';
import Footer from '../Constants/Footer';
import Image from 'next/image';
import linkedin from '@/public/assets/linkedin.svg';
import Link from 'next/link';

const SignUp: React.FC = () => {
  // Define state variables to capture form input
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [currentUserID, setCurrentUserID] = useState<string>('');

  // Function to handle form submission
  const handleSubmit = async () => {

    const formData = JSON.parse(sessionStorage.getItem('formData') || '{}');
    const growthGoalsData = JSON.parse(sessionStorage.getItem('growthGoalsData') || '{}');
console.log(formData.selectedOption)
console.log(formData.otherDescription)
console.log(growthGoalsData.selectedOptions[0])
    // Save form data to sessionStorage
    let businessModel = formData.selectedOption;
    if (formData.selectedOption === 'other') {
      businessModel = formData.otherDescription;
    }console.log(businessModel)
    const signUpData = {
       ...formData,
    ...growthGoalsData,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      description: formData.textAreaDescription, // Example: Update with new data
      businessModel:businessModel , // Example: Update with new data
      goal_type: growthGoalsData.selectedGrowthGoal, // Example: Update with new data
      currentRevenue: growthGoalsData.selectedOptions[0], // Example: Update with new data
      growthTarget: growthGoalsData.selectedOptions[1], // Example: Update with new data
      uuid: currentUserID
    };
  
   
      // Stringify the formData object before storing it in sessionStorage
      sessionStorage.setItem('signUpData', JSON.stringify(signUpData));

      try {
        // Make a POST request to the backend endpoint
        const response = await fetch('http://localhost:5000/api/insertuser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(signUpData),
        });
    
        // Check if the request was successful
        // Check if the POST request was successful
    if (!response.ok) {
      throw new Error('Failed to submit form data');
    }

    // Parse the response JSON
    const responseData = await response.json();

    // Fetch the user ID from the response data
        const userId = responseData.uuid;
        setCurrentUserID(userId)
        sessionStorage.setItem('userId', userId);
        console.log(responseData);



    console.log('User data updated successfully');
  } catch (error: any) {
    // Handle errors
    console.error('Error submitting form data:', error.message);
  }
    //   catch (error: any) {
    //     // Handle errors
    //     console.error('Error submitting form data:', error.message);
    //   }
      
    // if (password === confirmPassword) {
    //   console.log('Passwords match!')
    // } else {
    //   console.log('Passwords do not match!')
    // }
    // Make a PUT request to update user data
    const userId = sessionStorage.getItem('userId') || '{}';
    const updateResponse = await fetch(`http://localhost:5000/api/updateusers/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: formData.textAreaDescription, // Example: Update with new data
      businessModel: formData.selectedOption, // Example: Update with new data
      goal_type: growthGoalsData.selectedGrowthGoal, // Example: Update with new data
      currentRevenue: growthGoalsData.selectedOptions[0], // Example: Update with new data
      growthTarget: growthGoalsData.selectedOptions[1], // Example: Update with new data
      }),
    });

    // Check if the PUT request was successful
    if (!updateResponse.ok) {
      throw new Error('Failed to update user data');
    }
      
  };
  // const handleSubmit = async () => {
  //   try {
  //     // Data to be sent in the request body
  //     const dataToSend = {
  //       firstName: 'John',
  //       lastName: 'Doe',
  //       email: 'john@example.com',
  //       password: 'password123',
  //       description: 'Some description',
  //       businessModel: 'Some business model',
  //       goal_type: 'Some goal type',
  //       currentRevenue: 'Current revenue',
  //       growthTarget: 'goal_target_state',
  //       model_type: 'Saas'
  //     };
  
  //     // Make a POST request to the backend endpoint
  //     const response = await fetch('http://localhost:5000/api/insertuser', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(dataToSend),
  //     });
  
  //     // Check if the request was successful
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  
  //     // Parse the response JSON
  //     const responseData = await response.json();
  
  //     // Log the response data
  //     console.log('Response data:', responseData);
  //   } catch (error:any) {
  //     // Handle errors
  //     console.error('Error fetching data:', error.message);
  //   }
  // };
  // useEffect to retrieve stored data when component mounts
  useEffect(() => {
    const storedSignUpData = sessionStorage.getItem('signUpData');
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      setCurrentUserID(userId)
    }
    if (storedSignUpData) {
      const signUpData = JSON.parse(storedSignUpData);
      setFirstName(signUpData.firstName);
      setLastName(signUpData.lastName);
      setEmail(signUpData.email);
    }
  }, []);

  return (
    <div className='w-[85%] md:max-w-container2 mx-auto'>
      <Header />
      <main>
        <div className="text-center mx-auto mt-[46px]">
          <p className="text-[#414A35] text-[16px] md:text-lg not-italic font-medium leading-[normal]">We’re nearly there.</p>
          <h1 className="text-[#141803] text-center md:text-[40px] text-[28px] not-italic font-bold leading-[140%] mt-[10px]">Create an account to save details and meet your team!</h1>
        </div>
        <div className="flex flex-col items-center flex-[1_0_0] self-stretch mt-[50px] md:mt-[96px] md:mb-[257px] mb-[100px] ">
          {/* //! Linkedin Button */}
          <button className="flex justify-center items-center gap-[7.142px] px-3.5 py-[7px] rounded bg-[#0a66c2]">
            <Image src={linkedin} alt='Left-Arrow' /><span className='text-[color:var(--Light,#FFF)] text-[19.045px] not-italic font-semibold leading-[28.568px]'>Connect Linkedin</span>
          </button>
          {/* //!: Signup details and Create account */}
          <div className="flex flex-col gap-y-[24px] md:items-start ">
            <div className="flex md:flex-row flex-col md:w-[400px] self-stretch items-start gap-5 mt-[30px]">
              {/* //!First name */}
              <div className="flex flex-col items-start gap-1.5 self-stretch">
                <span className="text-[color:var(--brand-70,rgba(30,33,36,0.70))] text-sm not-italic font-normal leading-[normal]">First Name</span>
                <input type="text" placeholder='First Name' required value={firstName} onChange={(e) => setFirstName(e.target.value)} className='flex md:w-[190px] items-center gap-2 self-stretch px-3 py-2.5 border border-[color:var(--brand-7,#B9BFC5)] rounded-md border-solid bg-white placeholder:text-[color:var(--brand-7,#B9BFC5)] placeholder:text-base placeholder:font-normal placeholder:leading-6 outline-none' />
              </div>
              {/* //!Last name */}
              <div className="flex flex-col items-start gap-1.5 self-stretch">
                <span className="text-[color:var(--brand-70,rgba(30,33,36,0.70))] text-sm not-italic font-normal leading-[normal]">Last Name</span>
                <input type="text" placeholder='Last Name' required value={lastName} onChange={(e) => setLastName(e.target.value)} className='flex md:w-[190px] items-center gap-2 self-stretch px-3 py-2.5 border border-[color:var(--brand-7,#B9BFC5)] rounded-md border-solid bg-white placeholder:text-[color:var(--brand-7,#B9BFC5)] placeholder:text-base placeholder:font-normal placeholder:leading-6 outline-none' />
              </div>
            </div>
            {/* //! Email & Password fields */}
            <div className="flex flex-col items-start gap-1.5 self-stretch">
              <span className="text-[color:var(--brand-70,rgba(30,33,36,0.70))] text-sm not-italic font-normal leading-[normal]">Email</span>
              <input type="email" placeholder='Enter your email' required value={email} onChange={(e) => setEmail(e.target.value)} className='flex items-center gap-2 self-stretch px-3 py-2.5 border border-[color:var(--brand-7,#B9BFC5)] rounded-md border-solid bg-white placeholder:text-[color:var(--brand-7,#B9BFC5)] placeholder:text-base placeholder:font-normal placeholder:leading-6 outline-none' />
            </div>
            <div className="flex flex-col items-start gap-1.5 self-stretch">
              <span className="text-[color:var(--brand-70,rgba(30,33,36,0.70))] text-sm not-italic font-normal leading-[normal]">Password</span>
              <input type="password" placeholder='Enter your password' required value={password} onChange={(e) => setPassword(e.target.value)} className='flex items-center gap-2 self-stretch px-3 py-2.5 border border-[color:var(--brand-7,#B9BFC5)] rounded-md border-solid bg-white placeholder:text-[color:var(--brand-7,#B9BFC5)] placeholder:text-base placeholder:font-normal placeholder:leading-6 outline-none' />
            </div>
            <div className="flex flex-col items-start gap-1.5 self-stretch">
              <span className="text-[color:var(--brand-70,rgba(30,33,36,0.70))] text-sm not-italic font-normal leading-[normal]">Confirm Password</span>
              <input type="password" placeholder='Confirm your password' required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='flex items-center gap-2 self-stretch px-3 py-2.5 border border-[color:var(--brand-7,#B9BFC5)] rounded-md border-solid bg-white placeholder:text-[color:var(--brand-7,#B9BFC5)] placeholder:text-base placeholder:font-normal placeholder:leading-6 outline-none' />
            </div>
            {/* //! Submit button */}
            <Link href='/onboarding/company-details'>
              <button onClick={handleSubmit} type='submit'  className='flex w-full md:w-[400px] justify-center items-center gap-1 rounded px-[18px] py-2.5 bg-[#1e2124] text-white text-base not-italic font-semibold leading-6'>Create Account</button>
            </Link>
            <span className="mx-auto text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-center text-xs not-italic font-normal leading-[160%]">By clicking create account, you’re agreeing to our<br /><span className="text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-xs not-italic font-normal leading-[160%] underline">Terms and Conditions</span>, and <span className="text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-xs not-italic font-normal leading-[160%] underline">Privacy Policy.</span></span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp
