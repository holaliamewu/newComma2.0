import React from 'react'
import { NavLink } from 'react-router-dom'
import { BagSVG, BellSVG, CalendarSVG, CompassSVG, FeedSVG, UserSVG } from '../assets/svgs'

export default function Navs() {
  return (
    <nav className='flex xs:w-[98%]  md:w-fit xs:h-[60px] md:h-fit px-[12px] xs:border-t md:border-t-0 xs:border-t-[#f4f4f5] xs:absolute md:relative bottom-0 md:gap-[16px] xs:justify-between md:justify-normal ' >
          <NavLink 
          to='/' 
          className='flex justify-center items-center gap-[8px] text-[13px] xs:text-[#888888] md:text-[#131415] md:w-[100px]  ' > 
            <FeedSVG />
            <h4 className="xs:hidden md:inline-block" >Feed</h4>
          </NavLink>
          <NavLink 
          to='/explore' 
          className='flex justify-center items-center gap-[8px] text-[13px] xs:text-[#888888] md:text-[#131415] md:w-[100px]  ' > 
            <CompassSVG />
            <h4 className="xs:hidden md:inline-block" >Explore</h4>
          </NavLink>
          <NavLink 
          to='/notifications' 
          className='xs:flex md:hidden justify-center items-center gap-[8px]  text-[#888888] md:w-[100px]  ' > 
            <BellSVG />
          </NavLink>
          <NavLink 
          to='/jobs'
          className='flex justify-center items-center gap-[8px] text-[13px] xs:text-[#888888] md:text-[#131415] md:w-[100px]  ' > 
            <BagSVG />
            <h4 className="xs:hidden md:inline-block" >Jobs</h4>
          </NavLink>
          <NavLink 
          className='xs:hidden md:flex justify-center items-center gap-[8px] text-[13px] text-[#131415] md:w-[100px]  ' > 
            <CalendarSVG />
            Events
          </NavLink>
          <NavLink 
          className='xs:flex md:hidden justify-center items-center gap-[8px] xs:text-[#888888] md:text-[#131415] md:w-[100px]  ' > 
            <UserSVG />
          </NavLink>
      </nav>
  )
}
