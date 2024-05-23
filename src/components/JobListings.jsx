import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { BookmarkSVG, LocationSVG, MoreSVG, TimeSVG } from '../assets/svgs'
import { JobsContext } from '../pages/Layout'

export default function JobListings() {

  const [ jobs, setJobs ] = useContext(JobsContext)
  const [ searchParams, setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get("type");

  const filteredJobs =  typeFilter ? 
  jobs.filter(job => {
    console.log('Job Type:', job.type); 
    return job.type?.toLowerCase() === typeFilter.toLowerCase();
  }) : 
  jobs;

  console.log(filteredJobs)

  const allJobs = filteredJobs.map((job) => {
    const { title, company, image, location, timePosted, description } = job;
    return (
      <div key={company} className='px-[20px] py-[15px] rounded-[12px] border border-gray-100'>
        <div className='flex items-center justify-between w-full py-[10px]'>
          <img className='w-[64px] rounded-[12px] ' src={image} alt={title} />
          <div className='w-[20px] flex items-start'>
            <MoreSVG />
          </div>
        </div>
        <h3 className='text-[18px] font-SFpro font-semibold'>{title}</h3>
        <h5 className='text-[14px] font-SystemUi'>{company}</h5>
  
        <div>
          <section className='flex'>
            <div className='flex items-center my-[5px]'>
              <div className='w-[14px]'>
                <LocationSVG />
              </div>
              <h5 className='text-[13px] mx-[5px]'>{location}</h5>
            </div>
            <div className='flex items-center my-[5px]'>
              <div className='w-[14px]'>
                <TimeSVG />
              </div>
              <h5 className='text-[13px] mx-[5px]'>{timePosted} ago</h5>
            </div>
          </section>
  
          <p className='text-[14px] leading-[22px] overflow-hidden my-[8px]'>{description}</p>
  
          <div className='flex items-center gap-[10px] pt-[15px] pb-[10px]'>
            <NavLink  className='px-[24px] w-full h-[48px] rounded-[9.6px] flex items-center justify-center text-[14px] font-SFpro bg-[#f4f4f5]'>
              View more details
            </NavLink>
            <div className='flex self-center'>
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
