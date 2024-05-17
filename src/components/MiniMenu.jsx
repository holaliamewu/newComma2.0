import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { ProfilePhotoContext } from '../pages/Layout';
import { SignInContext } from '../App';

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
  </span>    <span className="" >
      <NavLink to='' className='text-[16px] h-[51px] ' >Your Pages</NavLink>
      <NavLink to='' className='text-[16px] h-[51px] ' >View All Pages</NavLink>
    </span>
    <span className="flex flex-col" >
      <NavLink to='' className='text-[16px] h-[51px] ' >Create a company page +</NavLink>
      <NavLink to='' className='text-[16px] h-[51px] ' >Jobs Hub</NavLink>
      <NavLink to='' className='text-[16px] h-[51px] ' >Events</NavLink>
      <NavLink to='' className='text-[16px] h-[51px] ' >Settings</NavLink>
      <NavLink onClick={ handleSignOut } >Logout</NavLink>
    </span>
    </div>
  )
}
