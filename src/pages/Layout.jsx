import React, { createContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import defaultProfilePic from '../assets/pics/commaPic.svg'
import { postsData, jobsData, usersData } from '../api'


export const ProfilePhotoContext = createContext();
export const LikeContext = createContext();
export const CommentContext = createContext();
export const BookmarkContext = createContext();
export const MiniMenuContext = createContext();
export const UsersContext = createContext();
export const JobsContext = createContext();
export const PostsContext = createContext();
export const NotificationsContext = createContext();

export default function Layout() {

  const [ profilePhoto, setProfilePhoto ] = useState(defaultProfilePic)
  const [ like, setLike ] = useState(false);
  const [ comment, setComment ] = useState(false);
  const [ bookmark, setBookmark ] = useState(false)
  const [ showMiniMenu, setShowMiniMenu ] = useState(false)
  const [ users, setUsers ] = useState( usersData)
  const [ jobs, setJobs ] = useState( jobsData)
  const [ posts, setPosts ] = useState(postsData)
  const [ notifications, setNotifications ] = useState( [])

  
  return (
  <ProfilePhotoContext.Provider value={[profilePhoto, setProfilePhoto]} >
  <BookmarkContext.Provider value={[bookmark, setBookmark]} >
  <CommentContext.Provider value={[comment, setComment]} >
  <LikeContext.Provider value={[like, setLike]} >
  <MiniMenuContext.Provider value={[showMiniMenu, setShowMiniMenu]} >
  <UsersContext.Provider value={[users, setUsers]} >
  <JobsContext.Provider value={[jobs, setJobs]} >
  <PostsContext.Provider value={[posts, setPosts]} >
  <NotificationsContext.Provider value={[notifications, setNotifications]} >
    <div>
        <Navbar />
        <Outlet />
    </div>
  </NotificationsContext.Provider>
  </PostsContext.Provider>
  </JobsContext.Provider>
  </UsersContext.Provider>
  </MiniMenuContext.Provider>
  </LikeContext.Provider>
  </CommentContext.Provider>
  </BookmarkContext.Provider>
  </ProfilePhotoContext.Provider>  )
}
