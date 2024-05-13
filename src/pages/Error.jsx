import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
    <div className='flex xs:flex-col-reverse md:flex-row xs:justify-center md:justify-between items-center xs:px-[5%] md:px-[18%] xs:text-center md:text-left md:h-[100vh] md:gap-[48px]'>
        <span className='flex flex-col xs:items-center md:items-start' >
            <h1 className='text-[100px] font-[600] font-SFpro ' >404</h1>
            <p className='pb-[20px]' >Sorry the page you requested could not be found. Continue to the homepage</p>
            <NavLink to='/' className='flex items-center justify-center w-fit text-[18px] px-[32px] text-[#27272a] bg-[#fccb00] h-[48px] rounded-[9.6px] font-SFpro font-[600]' >Return Home</NavLink>
        </span>
        <span className='xs:w-[159px] md:w-[329px]' >
            <img src='https://newcomma.com/img/error-page.png' alt='error image' />
        </span>
    </div>
  )
}
