import React from 'react'
import { NewCommaFooterSVG } from '../assets/svgs';
import { NavLink } from 'react-router-dom';

export default function Footer() {

    const date = new Date();
    const currentYear = date.getFullYear()
    console.log(currentYear)
  return (
    <div className='flex bg-[#18181b] text-white  md:h-[60px]  xs:flex-col md:flex-row xs:items-start md:items-center justify-between xs:px-[20px] md:px-[20vh] py-[40px] w-full  '>
        <NewCommaFooterSVG />
        <h3 className='text-[16px] font-SystemUi xs:mt-[20px] md:mt-0' >{currentYear} © New Comma</h3>

        <span className='flex xs:flex-col md:flex-row md:items-center  md:gap-[20px] text-[16px] font-SFpro font-semibold' >
            <NavLink className='xs:mt-[20px] md:mt-0 xs:mb-[10px] md:mb-0' >Privacy Policy</NavLink>
            <NavLink className='' >Terms & Conditions</NavLink>
        </span>
    </div>
  )
}
