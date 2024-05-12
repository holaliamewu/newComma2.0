import React from 'react'

export default function Error() {
  return (
    <div className='flex justify-between items-center px-[18%] h-[100vh] gap-[48px]'>
        <span className='' >
            <h1 className='text-[100px] font-[600] ' >404</h1>
            <p className='pb-[20px]' >Sorry the page you requested could not be found. Continue to the homepage</p>
            <button className=' text-[18px] px-[32px] bg-[#fccb00] h-[48px] rounded-[9.6px]' >Return Home</button>
        </span>
        <span className=' w-[329px]' >
            <img src='https://newcomma.com/img/error-page.png' alt='error image' />
        </span>
    </div>
  )
}
