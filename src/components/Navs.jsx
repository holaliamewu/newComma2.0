import { useContext, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { BagSVG, BellSVG, CalendarSVG, CompassSVG, FeedSVG, UserSVG } from '../assets/svgs'
import { WhereOnTheAppContext } from '../App'

export default function Navs() {

  const [ whereOnTheApp, setWhereOnTheApp ] = useContext(WhereOnTheAppContext)
  console.log(whereOnTheApp)
  return (
    <nav className='flex xs:w-[100%] bg-white  md:w-fit xs:h-[60px] md:h-fit  xs:border-t md:border-t-0 xs:border-t-[#f4f4f5] xs:fixed  md:relative bottom-0 left-0 px-[12px] md:gap-[16px] xs:justify-between md:justify-normal ' >
          <NavLink 
          to='/' 
          onClick={ ({isActive}) => {
            setWhereOnTheApp('feed')
          }}
          className='flex justify-center items-center gap-[8px] text-[13px] xs:text-[#888888] md:text-[#131415] md:w-[100px]  ' > 
            <FeedSVG />
            <h4 className="xs:hidden md:inline-block" >Feed</h4>
          </NavLink>
          <NavLink 
          to='/explore' 
          onClick={ ({isActive}) => {
            setWhereOnTheApp('explore')
          }}
          className='flex justify-center items-center gap-[8px] text-[13px] xs:text-[#888888] md:text-[#131415] md:w-[100px]  ' > 
            <CompassSVG />
            <h4 className="xs:hidden md:inline-block" >Explore</h4>
          </NavLink>
          <NavLink 
          to='/notifications' 
          onClick={ ({isActive}) => {
            setWhereOnTheApp('notification')
          }}
          className='xs:flex md:hidden justify-center items-center gap-[8px]  text-[#888888] md:w-[100px]  ' > 
            <BellSVG />
          </NavLink>
          <NavLink 
          to='/jobs'
          onClick={ ({isActive}) => {
            setWhereOnTheApp('jobs')
          }}
          className='flex justify-center items-center gap-[8px] text-[13px] xs:text-[#888888] md:text-[#131415] md:w-[100px]  ' > 
            <BagSVG />
            <h4 className="xs:hidden md:inline-block" >Jobs</h4>
          </NavLink>
          <NavLink 
          onClick={ ({isActive}) => {
            setWhereOnTheApp('events')
          }}
          className='xs:hidden md:flex justify-center items-center gap-[8px] text-[13px] text-[#131415] md:w-[100px]  ' > 
            <CalendarSVG />
            Events
          </NavLink>
          <NavLink 
          onClick={ ({isActive}) => {
            setWhereOnTheApp('profile')
          }}
          className='xs:flex md:hidden justify-center items-center gap-[8px] xs:text-[#888888] md:text-[#131415] md:w-[100px]  ' > 
            <UserSVG />
          </NavLink>
      </nav>
  )
}
