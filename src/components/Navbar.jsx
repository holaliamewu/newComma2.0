import React from 'react'
import { BagSVG, BellSVG, CalendarSVG, CompassSVG, FeedSVG, NewCommaAshCommaSVG, NewCommaBetaSVG, NewCommaCommaSVG } from '../assets/svgs'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className='flex justify-between items-center px-[2%] mx-auto py-[16px] border-b '>
      <NewCommaBetaSVG />
      
      <nav className='flex gap-[16px] ' >
          <NavLink 
          to='/' 
          className='flex justify-center items-center gap-[8px] text-[13px] text-[#131415] w-[100px]  ' > 
            <FeedSVG />
            Feed
          </NavLink>
          <NavLink 
          to='/explore' 
          className='flex justify-center items-center gap-[8px] text-[13px] text-[#131415] w-[100px]  ' > 
            <CompassSVG />
            Explore
          </NavLink>
          <NavLink 
          to='/jobs'
          className='flex justify-center items-center gap-[8px] text-[13px] text-[#131415] w-[100px]  ' > 
            <BagSVG />
            Jobs
          </NavLink>
          <NavLink 
          className='flex justify-center items-center gap-[8px] text-[13px] text-[#131415] w-[100px]  ' > 
            <CalendarSVG />
            Events
          </NavLink>
      </nav>
      <span className='flex gap-[16px] items-center ' >
        <BellSVG />
        <span className='w-[28px] ' >
          <img src='https://newcomma.com/_next/image?url=%2Fimg%2Ffeedback-fish.png&w=32&q=75' alt='somebot' />
        </span>
        <span className=' flex items-center justify-center bg-[#f5f5f4] rounded-full w-[32px] h-[32px] box-border px-[1px] border ' >
          <NewCommaAshCommaSVG />
        </span>
      </span>
    </header>
  )
}
