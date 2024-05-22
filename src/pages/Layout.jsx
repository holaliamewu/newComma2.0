import React, { createContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import defaultProfilePic from '../assets/pics/commaPic.svg'


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
  const [ users, setUsers ] = useState( [])
  const [ jobs, setJobs ] = useState( [])
  const [ posts, setPosts ] = useState( [])
  const [ notifications, setNotifications ] = useState( [])


  useEffect(() => {
    const fetchUsers = async() => {
      try{
        const response = await fetch("/api/users")
        if(!response.ok) {
          throw new Error("Failed to fetch users")
        }
  
        const data = await response.json();
        setUsers(data.users)
      } catch( error) {
        console.error("Error fetching users: ", error)
      }
    }
  
    fetchUsers();
  }, [])

  useEffect( () => {

    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs")
        if(!response.ok) {
          throw new Error("Failed to fetch Jobs")
        }

        const data = await response.json();
        setJobs(data.jobs)
      } catch( error ) {
        console.error( "Error fetching jobs: ", error)
      }
    }

    fetchJobs();
  } , [])
  
  useEffect( () => {

    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts")
        if(!response.ok) {
          throw new Error("Failed to fetch Posts")
        }

        const data = await response.json();
        setPosts(data.posts)
      } catch( error ) {
        console.error( "Error fetching posts: ", error)
      }
    }

    fetchPosts();
  } , [])
  
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
