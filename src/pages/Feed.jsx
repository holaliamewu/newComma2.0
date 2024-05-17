import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BookmarkContext, CommentContext, LikeContext, ProfilePhotoContext } from './Layout';
import { FormContext, WhereOnTheAppContext } from '../App';
import { MoreSVG, BookmarkSVG, CommentSVG, GifSVG, ImageSVG, LikeSVG, SmileySVG } from '../assets/svgs';

export default function Feed() {

  const date = new Date();
  const currentYear = date.getFullYear();
  const [ profilePhoto, setProfilePhoto ] = useContext(ProfilePhotoContext);
  const [ form, setForm ] = useContext(FormContext);

  const [ like, setLike ] = useContext(LikeContext);
  const [ comment, setComment ] = useContext(CommentContext);
  const [ bookmark, setBookmark ] = useContext(BookmarkContext);
  const [ whereOnTheApp, setWhereOnTheApp ] = useContext(WhereOnTheAppContext);

  return (
    <main className='flex xs:flex-col md:flex-row xs:items-center md:items-start relative md:px-[15vw] bg-[#fafafa] gap-[20px] pt-[60px] z-0 '>
      <div className='flex flex-col justify-between bg-inherit xs:w-[90%] md:w-[40%] md:h-[80vh]  md:sticky md:top-[123px] '>
        <span className='flex p-2'>
          <span className='w-[36px] rounded-full flex items-center justify-center' >
            <img src={ profilePhoto } alt='user profile photo' />
          </span>
          <span className='flex justify-between gap-5'>
            <span className='flex flex-col'>
              <h3 className='text-[16px] font-SFpro'>Amewu Emmanuel</h3>
              <h5 className='text-[14px] text-usernameColor font-SystemUi'>@holalia</h5>
            </span>
            <NavLink className='text-[13px] font-SFpro text-newOrange '>My Profile</NavLink>
          </span>
        </span>

        <span className='xs:hidden md:inline-block bg-white px-[24px] pt-[20px] pb-[16px] gap-[16px] rounded-[12px] '>
          <span className='flex justify-between gap-5'>
            <h2 className='font-SFpro text-[18px] font-semibold'>Suggested Connections</h2>
            <NavLink to='/explore' className='font-SFpro text-newOrange text-[13px]' onClick={ ({isActive}) => { setWhereOnTheApp('explore')}}>See more</NavLink>
          </span>

          <NavLink className='flex p-2'>
            <span className=' w-[32px] rounded-full flex items-center justify-center' >
              <img src={profilePhoto} alt='user profile photo' />
            </span>
            <span className='flex justify-between w-full'>
              <span className='flex flex-col'>
                <h3 className='text-[16px] font-SFpro'>Connection's name</h3>
                <h5 className='text-[14px] text-connectUsername font-SystemUi'>@connectionusername</h5>
              </span>
              <NavLink className='flex items-center justify-center h-[32px] text-[14px] font-SFpro px-[16px] rounded-full border border-[#e7e7e7]'>Connect</NavLink>
            </span>
          </NavLink>
      </span>
        
      <span className='xs:hidden md:inline-block bg-white px-[24px] pt-[20px] pb-[16px] rounded-[12px] '>
      <span className='flex justify-between w-full'>
            <span className='flex flex-col' >
              <h2 className='font-SFpro text-[18px] font-semibold'>Jobs for You</h2>
              <h5 className='font-SFpro text-[12px] text-usernameColor '>Based on <NavLink to='' className='underline' >field of expertise.</NavLink>.</h5>
            </span>
            <NavLink to='/jobs' className='font-SFpro text-newOrange text-[13px]' onClick={ ({isActive}) => { setWhereOnTheApp('jobs')}}>See more</NavLink>
          </span>
          
          <NavLink className='flex p-2 w-full'>
            <span className=' w-[32px] rounded-full ' >
              <img src={profilePhoto} alt='company photo' />
            </span>
            <span className='flex justify-between w-full'>
              <span className='flex flex-col w-full'>
              <h3 className='text-[16px] font-SFpro text-connectUsername'>Jr. Frontend Eng. </h3>
              <span className='flex items-center gap-1 ' >
                  <h3 className='text-[13px] font-systemUI'>newComma HQ</h3> — <h5 className='text-[13px] font-SystemUi'>remote</h5>
              </span>
              <span className='font-SystemUI text-[13px] mt-3' >2 days ago</span>
              </span>
            </span>
          </NavLink>
        </span>
    
        </div>

      <div className='flex flex-col gap-[12px] xs:w-[90%] md:w-[60%] min-h-[100vh]'>
        <span className='bg-white flex p-[24px] rounded-lg gap-[16px] mb-[30px]  '>
          <span className=' xs:hidden md:flex rounded-full w-[32px] h-[32px] flex items-center justify-center ' >
            <img className=' mx-auto ' src={profilePhoto} alt='user profile photo' />
          </span>
          <span className='flex-col w-full '>
            <input className='border-b border-b-[lightgray] focus:border-b-[#222] font-SFpro text-[16px] leading-[28px] mb-[10px] p-[10px] outline-none w-full ' type='text' placeholder="Got something to share ?" />
            <h6 className='text-right text-connectUsername text-[13px]'>300 Characters</h6>
            <span className='flex justify-between'>
              <span className='flex justify-between items-center'>
                <span className='p-[10px] w-[38px]' >
                  <SmileySVG />
                </span>
                <span className='p-[10px] w-[40px] ' >
                <ImageSVG />
              </span>
              <span className='p-[10px] w-[38px] ' >
              <GifSVG />
            </span>
          </span>
              <button className='bg-gray text-[lightgray] font-semibold py-[8px] px-[20px] rounded-md mt-[10px]'>Share</button>
            </span>
          </span>
        </span>

        <span className='bg-white rounded-[12px] '>
            <span className='flex justify-between mb-[16px] px-[24px] pt-[24px]' >
              <span className='flex gap-[16px] ' >
                  <NavLink className='' >
                    <img src={profilePhoto} className='' />
                  </NavLink>
                  <NavLink className='' >
                    <h3 className='text-[15px] text-[#27272a]' >Nigel Atta-Mensah</h3>
                    <h5 className='text-[14px] text-[#a1a1aa]' >@nigel</h5>
                  </NavLink>
              </span>
              <span className='flex' > <MoreSVG /> </span>
            </span>
            <span className='flex p-[16px] mb-[16px] px-[24px] w-full  border-b border-b-[lightgray]' >
              <p className='text-[#27272a]' >newcomma 2.0 is coming. brace up!💛 </p>
              <span className='' >
              
              </span>
            </span>
            <span className='flex items-center px-[24px] mb-[16px] gap-[12px] ' >
              <span className='w-[32px] flex items-center justify-center' onClick={ () => { setLike( prev => !prev)}} > <LikeSVG /> </span>
              <span className='w-[32px] flex items-center justify-center' onClick={ () => { setComment( prev => !prev)}} > <CommentSVG /> </span>
              <span className='w-[32px] flex items-center justify-center' onClick={ () => { setBookmark( prev => !prev)}} > <BookmarkSVG /> </span>
            </span>
        </span>
      </div>
    </main>
  )
}
