import React, { createContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import defaultProfilePic from '../assets/pics/commaPic.svg'


export const ProfilePhotoContext = createContext();

export default function Layout() {

  const [ profilePhoto, setProfilePhoto ] = useState(defaultProfilePic)
  return (
  <ProfilePhotoContext.Provider value={[profilePhoto, setProfilePhoto]} >
    <div>
        <Navbar />
        <Outlet />
    </div>
  </ProfilePhotoContext.Provider>
  )
}
