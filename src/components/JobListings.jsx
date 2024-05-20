import React from 'react'
import { NavLink } from 'react-router-dom'
import { BookmarkSVG, LocationSVG, MoreSVG, TimeSVG } from '../assets/svgs'
import { jobs } from '../api'

export default function JobListings() {

  const allJobs = jobs.map((job) => {
    return (
      <div key={job.company} className='px-[20px] py-[15px] rounded-[12px] border border-gray-100'>
        <div className='flex items-center justify-between w-full py-[10px]'>
          <img className='w-[64px] rounded-[12px] ' src={job.image} alt={job.title} />
          <div className='w-[20px] flex items-start'>
            <MoreSVG />
          </div>
        </div>
        <h3 className='text-[18px] font-SFpro font-semibold'>{job.title}</h3>
        <h5 className='text-[14px] font-SystemUi'>{job.company}</h5>
  
        <div>
          <section className='flex'>
            <div className='flex items-center my-[5px]'>
              <div className='w-[14px]'>
                <LocationSVG />
              </div>
              <h5 className='text-[13px] mx-[5px]'>{job.location}</h5>
            </div>
            <div className='flex items-center my-[5px]'>
              <div className='w-[14px]'>
                <TimeSVG />
              </div>
              <h5 className='text-[13px] mx-[5px]'>{job.timePosted} ago</h5>
            </div>
          </section>
  
          <p className='text-[14px] leading-[22px] overflow-hidden my-[8px]'>{job.description}</p>
  
          <div className='flex items-center gap-[10px] pt-[15px] pb-[10px]'>
            <NavLink  className='px-[24px] w-full h-[48px] rounded-[9.6px] flex items-center justify-center text-[14px] font-SFpro bg-[#f4f4f5]'>
              View more details
            </NavLink>
            <div className='flex self-start'>
              <BookmarkSVG />
            </div>
          </div>
        </div>
      </div>
    );
  });
  
  return (
    <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] '>
      { allJobs }
    </div>
  )
}
