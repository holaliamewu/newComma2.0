import React from 'react'
import { MagnifyingGlassSVG } from '../assets/svgs'
import SearchNavbar from '../components/SearchNavbar'
import Footer from '../components/Footer'
import JobListings from '../components/JobListings'

export default function Jobs() {
  return (
    <div className='pb-[60px]' >
      <div className='flex flex-col items-center  gap-[8px] mx-auto bg-[url(https://newcomma.com/img/jobs/header-bg.jpeg)]  md:bg-center bg-cover md:h-[40vh] mt- '>
          <h2 className=' font-SFpro text-[30px] text-center my-[10px] font-semibold text-[#fff] xs:w-[254px] md:w-[550px]' >Find Your Dream Job</h2>
          <p className='xs:text-[14px] md:text-[16px] text-center text-[#fff] xs:w-[254px] md:w-[550px]' >NewComma is the heart of the creative community and the best
          resource to discover and connect with creatives and jobs worldwide.</p>
          <button className='px-[16px] my-[16px] h-[32px] bg-[#fccb00] rounded-full font-SFpro text-[14px] font-semibold ' >Post a Job</button>
      </div>

      <div className='items-center ' >
        <span className='flex  bg-white shadow-gray-200 shadow-lg -mt-3 mx-auto xs:w-[94%] rounded-[8px] h-[48px] px-[12px]' >
          <span className='flex items-center gap-[8px] text-[16px] py-[5px] md:max-w-[30vw] ' >
          <span className='flex w-[18px] ' >
            <MagnifyingGlassSVG />
          </span>  
            <input type='text' name='jobSearchBox' placeholder='Search jobs by keyword' className=' font-semibold text-[#888888] font-SFpro ' />
          </span>
          <SearchNavbar />
          </span>
          <JobListings />
      </div>
      <Footer />
    </div>
  )
}
