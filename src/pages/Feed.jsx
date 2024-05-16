import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProfilePhotoContext } from './Layout';
import { FormContext } from '../App';
import { GifSVG, ImageSVG, SmileySVG } from '../assets/svgs';

export default function Feed() {

  const date = new Date();
  const currentYear = date.getFullYear();
  const [ profilePhoto, setProfilePhoto ] = useContext(ProfilePhotoContext)
  const [ form, setForm ] = useContext(FormContext)

  return (
    <div className='flex md:px-[15vw] gap-[20px] mt-[60px] '>
      <div className='flex flex-col justify-between w-[40%] h-[80vh]  sticky top-[80px] bg-white'>
        <span className='flex bg-white p-2'>
          <span className='w-[36px] rounded-full' >
            <img src={ profilePhoto } alt='user profile photo' />
          </span>
          <span className='flex justify-between gap-5'>
            <span className='flex flex-col'>
              <h3 className='text-[16px] font-SFpro'>Amewu Emmanuel</h3>
              <h5 className='text-[14px] font-SystemUi'>@holalia</h5>
            </span>
            <NavLink className='text-[14px] font-SFpro'>My Profile</NavLink>
          </span>
        </span>

        <span className='bg-gray-300 px-[24px] pt-[20px] pb-[16px] rounded-[24px] '>
          <span className='flex justify-between gap-5'>
            <h2 className='font-SFpro text-[18px] font-semibold'>Suggested Connections</h2>
            <NavLink className='font-SFpro text-[13px]'>See more</NavLink>
          </span>

          <NavLink className='flex w-full p-2'>
            <span className=' w-[32px] rounded-full' >
              <img src={profilePhoto} alt='user profile photo' />
            </span>
            <span className='flex justify-between w-full'>
              <span className='flex flex-col'>
                <h3 className='text-[16px] font-SFpro'>Connection's name</h3>
                <h5 className='text-[14px] font-SystemUi'>@connectionusername</h5>
              </span>
              <NavLink className='flex items-center justify-center text-[15px] font-SFpro px-[16px] rounded-full border'>Connect</NavLink>
            </span>
          </NavLink>

          <NavLink className='flex p-2'>
            <span className=' w-[32px] rounded-full' >
              <img src={profilePhoto} alt='user profile photo' />
            </span>
            <span className='flex justify-between w-full'>
              <span className='flex flex-col'>
                <h3 className='text-[16px] font-SFpro'>Connection's name</h3>
                <h5 className='text-[14px] font-SystemUi'>@connectionusername</h5>
              </span>
              <NavLink className='flex items-center justify-center text-[15px] font-SFpro px-[16px] rounded-full border'>Connect</NavLink>
            </span>
          </NavLink>
      </span>
        
      <span className='bg-gray-300 px-[24px] pt-[20px] pb-[16px] rounded-[24px] '>
      <span className='flex justify-between w-full'>
            <span className='flex flex-col' >
              <h2 className='font-SFpro text-[18px] font-semibold'>Jobs for You</h2>
              <h5 className='font-SFpro text-[13px] font-semibold'>Based on <NavLink to='' className='underline' >Creative field</NavLink>.</h5>
            </span>
            <NavLink className='font-SFpro text-[13px]'>See more</NavLink>
          </span>
          
          <NavLink className='flex p-2 w-full'>
            <span className=' w-[32px] rounded-full' >
              <img src={profilePhoto} alt='company photo' />
            </span>
            <span className='flex justify-between w-full'>
              <span className='flex flex-col w-full'>
              <h3 className='text-[16px] font-SFpro'>Jr. Frontend Eng. </h3>
              <span className='flex items-center gap-1 ' >
                  <h3 className='text-[13.5px] font-systemUI'>newComma HQ</h3> — <h5 className='text-[13px] font-SystemUi'>remote</h5>
              </span>
              <span className='font-SystemUI text-[13px] mt-3' >2 days ago</span>
              </span>
            </span>
          </NavLink>
        </span>
    
        </div>

      <div className='w-[60%] min-h-[100vh]'>
        <span className='bg-green-300 flex p-[24px] rounded-lg gap-[16px]  '>
          <span className='  bg-green-600 rounded-full w-[32px] h-[32px] flex items-center justify-center ' >
            <img className=' mx-auto ' src={profilePhoto} alt='user profile photo' />
          </span>
          <span className='flex-col w-full '>
            <input className='border-b font-SFpro text-[16px] leading-[28px] mb-[10px] p-[10px] w-full ' type='text' placeholder="Got something to share ?" />
            <h6 className='text-right text-[13px]'>300 Characters</h6>
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
              <button className='bg-green-400 py-[8px] px-[20px] rounded-md mt-[10px]'>Share</button>
            </span>
          </span>
        </span>
        <span className='bg-yellow-500'>Feed listings here</span>
      </div>
    </div>
  )
}
