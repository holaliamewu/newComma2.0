import React, { createContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import defaultProfilePic from '../assets/pics/commaPic.svg'


export const ProfilePhotoContext = createContext();
export const LikeContext = createContext();
export const CommentContext = createContext();
export const BookmarkContext = createContext();
export const MiniMenuContext = createContext();

export default function Layout() {

  const [ profilePhoto, setProfilePhoto ] = useState(defaultProfilePic)
  const [ like, setLike ] = useState(false);
  const [ comment, setComment ] = useState(false);
  const [ bookmark, setBookmark ] = useState(false)
  const [ showMiniMenu, setShowMiniMenu ] = useState(false)
  
  return (
  <ProfilePhotoContext.Provider value={[profilePhoto, setProfilePhoto]} >
  <BookmarkContext.Provider value={[bookmark, setBookmark]} >
  <CommentContext.Provider value={[comment, setComment]} >
  <LikeContext.Provider value={[like, setLike]} >
  <MiniMenuContext.Provider value={[showMiniMenu, setShowMiniMenu]} >
    <div>
        <Navbar />
        <Outlet />
    </div>
  </MiniMenuContext.Provider>
  </LikeContext.Provider>
  </CommentContext.Provider>
  </BookmarkContext.Provider>
  </ProfilePhotoContext.Provider>  )
}
