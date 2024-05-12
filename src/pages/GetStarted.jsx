import React, { useState } from 'react'
import mobileLogo from '../assets/pics/logo.png'
import { NewCommaWhiteSVG, NewCommaCommaSVG } from '../assets/svgs'


export default function GetStarted() {

  const [ userStatus, setUserStatus ] = useState('')

  function handleChange() {
    console.log('something happened!')
  }
  return (
    <div className='flex gap-[20px] '>
    <div 
    style={{
      backgroundImage: `url(https://newcomma.com/images/naki2.webp)`
    }}
    
    className='xs:w-0 md:min-w-[58vw] bg-yellow-40 min-h-[100vh] bg-cover bg-center '
    >
      <NewCommaWhiteSVG />
    </div>

    <div className='flex flex-col px-[2%] gap-[48px] justify-center' >
      
    <span className='xs:inline-block md:hidden w-[100px] pt-[24px] ' >
        <img  src={mobileLogo} />
      </span>
    <span>
      <h1 className="font-['Sharp Grotesk'] font-black text-[52px] mb-[8px]" >GET STARTED</h1>
        <h4 className='text-[14px] text-[#a1a1aa] ' >Enter your email to continue</h4>
    </span>

      <form className='flex flex-col gap-[20px]' >
        <span className='flex flex-col gap-[5px] ' >
          <label 
          className='w-full text-[14px]' 
          htmlFor='email' >Email</label>
          <input 
          type='email' 
          name='email' 
          onChange={ handleChange } 
          className=' border-b  ' />
          </span>      
        {
          userStatus === 'old' ? (
            <span className='flex flex-col gap-[5px] ' >
              <label 
              className='w-full text-[14px]'  
              htmlFor='email' >Password</label>
              <input 
              type='password' 
              name='password' 
              onChange={ handleChange } 
              className=' border-b  ' />
              </span>      

          ) :
          userStatus === 'new' ? (
            <>
            <span className='flex gap-[16px]' >
              <span className='flex flex-col gap-[5px] ' >
                <label 
                className='w-full text-[14px]'  
                  htmlFor='email' >First name</label>
                  <input 
                  type='text' 
                  name='firstName' 
                  onChange={ handleChange } 
                  className=' border-b  ' />
                  </span>      
              <span className='flex flex-col gap-[5px] ' >
                  <label 
                  className='w-full text-[14px]' 
                  htmlFor='email' >Last name</label>
                  <input 
                  type='text' 
                  name='lastName' 
                  onChange={ handleChange } 
                  className=' border-b  ' />
                  </span>      
            </span>
              <span className='flex flex-col gap-[5px] ' >
                  <label 
                  className='w-full text-[14px]' 
                  htmlFor='email' >Username</label>
                  <input
                  type='text' 
                  name='username' 
                  onChange={ handleChange } 
                  className=' border-b  ' />
                  </span>      
              <span className='flex flex-col gap-[5px] ' >
                  <label 
                  className='w-full text-[14px]' 
                  htmlFor='newPassword' >Password</label>
                  <input 
                  type='password' 
                  name='newPassword' 
                  onChange={ handleChange }
                  className=' border-b  ' />
                  </span>      
                  <span className="flex gap-[8px]">
                  <input 
                  type='checkbox' 
                  name='consent'
                  className=" size-[17px]" />
                  <p className="text-[12px] leading-[1.2] " >By ticking this box, you agree to receive email communications from NewComma</p>
                  </span>

                  <p className="text-[13px] text-[#a1a1aa] leading-[1.7]" >
                  By clicking Create Account, I agree that I have read and accepted the <span className="text-[#27272a]" >Terms of Use</span> and <span className="text-[#27272a]" >Privacy Policy</span>
                  </p></>
                 ): "" }
      <span className="flex" >
          <button className='flex items-center justify-center w-fit gap-[8px] h-[40px] px-[24px] rounded-[24px] bg-[#ffcb00] ' >
            <NewCommaCommaSVG />
            <h3 className='font-bold'>
            {
              userStatus === 'new' ? 'Create Account':
              userStatus === 'old' ? 'Sign In' : 'Continue'
            }
            </h3>
          </button>
          {
            userStatus === 'old' && 
            <button className='flex items-center justify-center font-bold w-fit gap-[8px] h-[40px] px-[24px] rounded-[24px] bg-[#fff] ' >Forgot Password </button>
          }
      </span>
      </form>
    </div>
    </div>
  )
}
