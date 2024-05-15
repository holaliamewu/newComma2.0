import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Feed() {
  return (
    <div className='flex'>
      <div className='w-[40%] min-h-[100vh] bg-white'>
        <span className='flex bg-teal-300 p-2'>
          <img src='' alt='user profile photo' />
          <span className='flex justify-between gap-5'>
            <span className='flex flex-col'>
              <h3 className='text-[16px] font-SFpro'>FirstName LastName</h3>
              <h5 className='text-[14px] font-SystemUi'>@username</h5>
            </span>
            <NavLink className='text-[14px] font-SFpro'>My Profile</NavLink>
          </span>
        </span>

        <span className='bg-gray-300'>
          <span className='flex justify-between gap-5'>
            <h2 className='font-SFpro text-[18px] font-semibold'>Suggested Connections</h2>
            <NavLink className='font-SFpro text-[13px]'>See more</NavLink>
          </span>

          <NavLink className='flex bg-teal-300 p-2'>
            <img src='' alt='user profile photo' />
            <span className='flex justify-between gap-5'>
              <span className='flex flex-col'>
                <h3 className='text-[16px] font-SFpro'>Connection's name</h3>
                <h5 className='text-[14px] font-SystemUi'>@connectionusername</h5>
              </span>
              <NavLink className='text-[15px] font-SFpro px-[16px] rounded-full border'>Connect</NavLink>
            </span>
          </NavLink>
        </span>

        <div>
          <NavLink>About</NavLink>
          <NavLink>FAQ</NavLink>
          <NavLink>Contact</NavLink>
          <h3>Terms and Conditions</h3>
        </div>
      </div>

      <div className='w-[60%] min-h-[100vh] bg-red-500'>
        <span>
          <img src='' alt='user profile photo' />
          <span>
            <input type='text' placeholder="Created something you're proud of? Share it here" />
            <h6>300 Characters</h6>
            <span>
              <span>one two three</span>
              <button>Share</button>
            </span>
          </span>
        </span>
        <span className='bg-yellow-500'>Feed listings here</span>
      </div>
    </div>
  )
}
