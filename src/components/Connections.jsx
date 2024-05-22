import React, { useContext, useEffect, useState } from 'react'
import { ProfilePhotoContext, UsersContext } from '../pages/Layout';
import  { NavLink } from 'react-router-dom'

export default function Connections() {

const [ profilePhoto, setProfilePhoto ] = useContext(ProfilePhotoContext)
const [ users, setUsers ] = useContext(UsersContext)



  const connectionsComponent = users.map( user => {
     const { name, username, profession } = user;
    return(
      <NavLink to={`/profile/${username}`} className='flex flex-col gap-[20px] shadow-sm rounded-[12px] py-[16px] px-[20px] border border-gray-100 ' >
      <span className="flex flex-col gap-[10px] " >
        <NavLink to='' className='flex items-center justify-center w-[64px] h-[64px] p-[10px] bg-[lightgray] border border-gray-100 rounded-full' >
          <img className='w-[64px] h-[64px] ' src={profilePhoto} />
        </NavLink>
        <span className='' >
          <span className='flex gap-[6px] ' >
            <h3 className='text-[14px]  font-SharpGroteskBold' >{name}</h3>
            <h5 className='text-[14px] text-[#71717a] font-SharpGroteskBold' >@{username}</h5>
          </span>
          <p className='text-[14px] text-[#27272a] font-SystemUi' >{profession}</p>
      </span>
          <span className='flex gap-[8px] ' >
            <span className='w-fit flex items-center justify-center font-SFpro text-[14px]  px-[16px] h-[32px] rounded-[24px] border border-gray-200 ' >Connect</span>
            <span className='w-fit flex items-center justify-center font-SFpro text-[14px]  px-[16px] h-[32px] rounded-[24px] border border-gray-200 ' >Copy link</span>
          </span>
        </span>
    </NavLink >   
   )
  })  
  return (
    <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-[70px] mx-[12px] '>
      { connectionsComponent }
    </div>
  )
}
