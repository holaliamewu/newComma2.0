import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { ProfilePhotoContext } from '../pages/Layout';
import { SignInContext } from '../App';
import { CalendarSVG, CompanySVG, Jobs2SVG, LogoutSVG, PlusSVG, SetttingsSVG } from '../assets/svgs';

export default function MiniMenu() {

  const [ profilePhoto, setProfilePhoto ] = useContext(ProfilePhotoContext)
  const [ isSignedIn, setIsSignedIn ] = useContext(SignInContext)

  function handleSignOut() {

    signOut(auth).then(() => {
      // Sign-out successful.
    setIsSignedIn(false)
    }).catch((error) => {
      // An error happened.
      console.log('unable to signout')
    });
      }
    
  return (
    <div
    className='absolute flex flex-col top-12 right-5 bg-white rounded-[12px]'
    >
    <span className='flex p-2'>

    <span className='w-[32px] rounded-full flex items-center justify-center' >
      <img  src={ profilePhoto } alt='user profile photo' />
    </span>

      <span className='flex flex-col'>
        <h3 className='text-[12px] font-SFpro'>Amewu Emmanuel</h3>
        <h5 className='text-[12px] text-usernameColor font-SystemUi'>@holalia</h5>
   </span>
  </span>    
  <span className="flex items-center justify-between font-SFpro" >
      <NavLink to='' className='text-[14px] h-[51px] ' >Your Pages</NavLink>
      <NavLink to='' className='text-[14px] h-[51px] ' >View All Pages</NavLink>
    </span>
    <span className="flex flex-col" >
    <NavLink to='' className='flex h-[51px] p-[15px] gap-[8px] border-y border-y-gray-200 ' > 
    <span className='w-[20px]' >
      <CompanySVG /> 
    </span>
    <h5 className='text-[16px] font-SFpro' >Create a company page</h5>
    <span className='w-[20px]' >
      <PlusSVG /> 
    </span>
    </NavLink>      
    <NavLink to='' className='flex h-[51px] p-[15px] gap-[8px] border-y border-y-gray-200 ' > 
        <span className='w-[20px]' >
          <Jobs2SVG /> 
        </span>
        <h5 className='text-[16px] font-SFpro' >Jobs Hub</h5>
        </NavLink>
        <NavLink to='' className='flex h-[51px] p-[15px] gap-[8px] border-y border-y-gray-200 ' > 
        <span className='w-[20px]' >
          <CalendarSVG /> 
        </span>
        <h5 className='text-[16px] font-SFpro' >Events</h5>
        </NavLink>    
        <NavLink to='' className='flex h-[51px] p-[15px] gap-[8px] border-y border-y-gray-200 ' > 
        <span className='w-[20px]' >
          <SetttingsSVG /> 
        </span>
        <h5 className='text-[16px] font-SFpro' >Settings</h5>
        </NavLink>        
        <NavLink to='' className='flex h-[51px] p-[15px] gap-[8px] border-y border-y-gray-200 ' > 
        <span className='w-[20px]' >
          <LogoutSVG /> 
        </span>
        <h5 className='text-[16px] font-SFpro' >Logout</h5>
        </NavLink>
        </span>
    </div>
  )
}
