import React from 'react'
import { NavLink } from 'react-router-dom'
import { MagnifyingGlassSVG } from '../assets/svgs'
import Connections from '../components/Connections'

export default function Explore() {

    function handleSearch() {
        return(
            console.log('you searched for something. hoorayy!')
        )
    }
  return (
    <div className='w-[100%]'>
    <div className='pt-[16px] px-[12px]' >
        <h1 className=' xs:text-[50px] md:text-[90px]  font-SharpGroteskBold font-bold md:pt-[63px]   ' >Comma Community</h1>
        <span className='flex w-fit h-[53px] bg-[#f4f4f5] p-[6px] rounded-full mt-[24px] mb-[56px] ' >
            <NavLink 
            style={
                ({isActive}) => {
                return {
                        backgroundColor: isActive ? 'black' : '#f4f4f5',
                        color: isActive ? 'white' : 'black'
                    }
                }
            }
            className="flex items-center justify-center text-[16px] p-[10px] rounded-full font-SystemUi"
            to='' >All users</NavLink>
            <NavLink 
            style={
                ({isActive}) => {
                return {
                        backgroundColor: isActive ? 'black' : '#f4f4f5',
                        color: isActive ? 'white' : 'black'
                    }
                }
            }
            className='flex items-center justify-center text-[16px] p-[10px] rounded-full font-SystemUi '
            to='yourConnections' >Your connections</NavLink>
        </span>

        <span className='flex xs:gap-[8px]  ' >
            <MagnifyingGlassSVG />
            <input 
                type='text' 
                name='searchbox' 
                onChange={handleSearch} 
                placeholder='Looking for a specific person? Type their name here and hit search!'
                className='flex xs:w-[100%] md:w-[500px] text-[13px] md:px-[20px] py-[30px] ' /> 
        </span>
    </div>

    <Connections />
    </div>
  )
}
