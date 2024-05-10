import React, { useState } from 'react'

export default function GetStarted() {

  const [ userStatus, setUserStatus ] = useState('')

  function handleChange() {
    console.log('something happened!')
  }
  return (
    <div className='flex gap-[20px] '>
    <div 
    style={{
      backgroundImage: `https://newcomma.com/images/naki2.webp`
    }}
    className=' md:min-w-[58vw] bg-yellow-400 min-h-[100vh] '
    >
    <span className='flex w-[80px] h-[41.64px] absolute top-[48px] left-[48px]  ' >
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 315 164" 
      version="1.1"><title>New Comma_3</title><g 
      id="Platform-v2.0" 
      stroke="none" 
      stroke-width="1" 
      fill="currentColor" 
      fill-rule="evenodd"><g 
      id="New-Comma_3" 
      fill="white" 
      fill-rule="nonzero"><polygon 
      id="Path" 
      points="23.68 78.73 0 78.73 0 0.16 23.9 0.16 46.16 36.93 46.16 0.16 69.84 0.16 69.84 78.73 46.6 78.73 23.68 41.19"></polygon><polygon id="Path" points="73.91 78.73 73.91 0.16 130.44 0.16 130.44 21.77 99 21.77 99 28.1 129.45 28.1 129.45 49.81 99 49.81 99 56 130.76 56 130.76 78.7"></polygon><polygon id="Path" points="176 78.73 152.84 78.73 134.62 0.16 159.83 0.16 167.57 38.9 178.71 0.16 198.71 0.16 208.21 39.88 217.77 0.16 242.65 0.16 221.05 78.73 197.15 78.73 187.44 43.73"></polygon><path 
      d="M0,136 L0,125.5 C0,118.82 1.25,113.39 3.47,109.21 C8.28,100.77 16.73,97 27.86,97 C45.39,97 55.72,104.93 55.72,122.73 L55.72,126.64 L33.64,126.64 L33.64,124.64 C33.64,118.41 32.31,115.73 27.77,115.73 C23.23,115.73 21.77,118.85 21.77,126.95 L21.77,133.71 C21.77,141.71 23.19,144.71 27.77,144.71 C31.95,144.71 33.55,141.6 33.64,135.37 L33.64,133.05 L55.9,133.05 L55.9,136.25 C55.9,143.02 54.74,148.36 52.33,152.45 C47.44,160.45 38.72,163.760084 27.41,163.760084 C9.08,163.79 0,155.78 0,136 Z" id="Path"></path>
      <path d="M59.81,134.68 L59.81,126.32 C59.81,119.64 61.05,114.12 63.28,109.85 C67.91,101.13 76.45,97 87.58,97 C92.5029103,96.9363006 97.3747255,98.0037208 101.82,100.12 C110.18,104.39 115.35,112.85 115.35,126.29 L115.35,134.65 C115.35,141.33 114.19,146.85 111.7,151.12 C106.89,159.66 98.35,163.760075 87.49,163.760075 C70,163.79 59.81,154.8 59.81,134.68 Z M93.45,133.44 L93.45,127.38 C93.45,119.02 92.11,115.72 87.58,115.72 C83.05,115.72 81.58,119.29 81.58,127.38 L81.58,133.44 C81.58,141.44 83.01,145.1 87.58,145.1 C92.15,145.1 93.45,141.8 93.45,133.44 Z" id="Shape"></path><polygon id="Path" points="139.62 163.79 119.62 163.79 119.62 99.7 138.22 99.7 150.69 118.31 163 99.7 181.51 99.7 181.51 163.79 161.51 163.79 161.51 132.72 151.72 147 149.23 147 139.62 132.75"></polygon>
      <polygon id="Path" points="205.15 163.79 185.15 163.79 185.15 99.7 203.76 99.7 216.22 118.31 228.56 99.7 247.07 99.7 247.07 163.79 227 163.79 227 132.72 217.25 147 214.76 147 205.15 132.75"></polygon>
      <path d="M274.34,155.69 L272.12,163.79 L251.2,163.79 L272.3,99.7 L293.3,99.7 L314.66,163.79 L293.66,163.79 L291.34,155.69 L274.34,155.69 Z M278.88,139.22 L286.62,139.22 L282.71,125.34 L278.88,139.22 Z" id="Shape"></path>
      <path d="M262.15,78.73 L249.34,54.61 C255.685861,50.9262787 261.728294,46.7430562 267.41,42.1 C257.8,38.68 253.91,29.35 253.91,21.84 C253.91,7.74 270.15,0 282.28,0 C299.2,0 311.33,10.92 311.33,26.62 C311.33,47.1 287.31,71 262.15,78.73 Z" id="Path">
      </path>
      </g>
      </g>
      </svg>
    </span>
    </div>

    <div className='flex flex-col px-[2%] gap-[48px] justify-center' >
      
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
                  </p>

              </>
          )
          : ""
        }

        <button className='flex items-center justify-center w-fit gap-[8px] h-[40px] px-[24px] rounded-[24px] bg-[#ffcb00] ' >
        <span 
        className='w-[15px] text-[16px]' >
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 16 20" version="1.1"><title>Path</title><g 
          id="Platform-v2.0" 
          stroke="none" stroke-width="1" 
          fill="currentColor" 
          fill-rule="evenodd"><g 
          id="Profile--Copy" 
          transform="translate(-889.000000, -771.000000)" 
          fill="currentColor" 
          fill-rule="nonzero"><g 
          id="Group-6" 
          transform="translate(864.000000, 273.000000)"><g 
          id="Group-5" 
          transform="translate(0.000000, 485.000000)"><g 
          id="Group-4" 
          transform="translate(25.000000, 13.000000)"><path 
          d="M15.20904,6.56544 C15.20904,2.70144 12.23544,-2.84217094e-14 8.08248,-2.84217094e-14 C5.1072,-2.84217094e-14 1.12224,1.9068 1.12224,5.38776 C1.12224,7.23576 2.07648,9.54072 4.43352,10.3824 C3.04049638,11.5279049 1.55791051,12.5599285 -1.50990331e-14,13.46856 L3.14328,19.41744 C9.31728,17.50896 15.20904,11.6172 15.20904,6.56544" id="Path"></path></g></g></g></g></g></svg>
        </span>
        <h3 className='font-bold'>
        {
          userStatus === 'new' ? 'Create Account':
          userStatus === 'old' ? 'Sign In' : 'Continue'
        }
        </h3>
        </button>
      </form>
    </div>
    </div>
  )
}
