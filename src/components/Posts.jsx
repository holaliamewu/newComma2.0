import React, { useContext } from 'react'
import { MoreSVG, BookmarkSVG, CommentSVG, GifSVG, ImageSVG, LikeSVG, SmileySVG } from '../assets/svgs';
import { posts } from '../api'
import { ProfilePhotoContext } from '../pages/Layout';
import { NavLink } from 'react-router-dom';

export default function Posts() {

    const [ profilePhoto, setProfilePhoto ] = useContext(ProfilePhotoContext)

    console.log(posts)

    function handleLike( post ) {
        if(post.like === false) {
            post.likes = true
        } else {
            post.likes = false;
        }
    }

    const allPosts = posts.map( post => 
           { return (
                <span className='bg-white rounded-[12px] shadow '>
                <span className='flex justify-between mb-[16px] px-[24px] pt-[24px]' >
                  <span className='flex gap-[16px] ' >
                      <NavLink className='' >
                        <img src={profilePhoto} className='' />
                      </NavLink>
                      <NavLink className='' >
                        <h3 className='text-[15px] text-[#27272a]' >{post.person}</h3>
                        <h5 className='text-[14px] text-[#a1a1aa]' >@{post.username}</h5>
                      </NavLink>
                  </span>
                  <span className='flex' > <MoreSVG /> </span>
                </span>
                <span className='flex flex-col p-[16px] mb-[16px] px-[24px] w-full  border-b border-b-gray-100' >
                  <p className='text-[#27272a]' >{post.message}</p>
                  { post.photos && <span className='' >
                  <img className='' src={post.photos} />
                  </span>}
                </span>
                <span className='flex items-center px-[24px] mb-[16px] gap-[12px] ' >
                  <span className='w-[32px] flex items-center justify-center' onClick={ handleLike( post )} > <LikeSVG /> </span>
                  <span className='w-[32px] flex items-center justify-center' onClick={ () => { setComment( prev => !prev)}} > <CommentSVG /> </span>
                  <span className='w-[32px] flex items-center justify-center' onClick={ () => { setBookmark( prev => !prev)}} > <BookmarkSVG /> </span>
                </span>
            </span>    )}
        )


  return (
    <div className='flex flex-col gap-[24px]' >{ allPosts }</div>    
)}
