import React from 'react'

export default function Jobs() {
  return (
    <div className='flex flex-col items-center xs:w-[90%] md:w-[45%] gap-[8px] mx-auto '>
        <h2 className=' font-SFpro text-[30px] my-[10px] font-semibold' >Find Your Dream Job</h2>
        <p className='text-[16px] text-center' >NewComma is the heart of the creative community and the best
         resource to discover and connect with creatives and jobs worldwide.</p>
         <button className='px-[16px] my-[16px] h-[32px] bg-[#fccb00] rounded-full font-SFpro text-[14px] ' >Post a Job</button>
    </div>
  )
}
