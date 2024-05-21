import React from 'react'
import { BagSVG, DownSVG, FieldSVG, Jobs2SVG, LocationSVG, MagnifyingGlassSVG } from '../assets/svgs'

export default function SearchNavbar() {
  return (
    <div className='flex items-center justify-around w-full h-full'>
        <span className='border-l w-full flex items-center justify-center text-[14px] text-[#4b5563] font-SystemUi ' >
            <span className=' w-[20px]'  > <LocationSVG />  </span>
            <span className='' >Location</span>
            <span className='' > <MagnifyingGlassSVG /> </span>
        </span>
        <span className='border-l w-full flex items-center justify-center text-[14px] text-[#4b5563] font-SystemUi ' >
            <span className=' w-[20px]'  > <Jobs2SVG /> </span>
            <span className='' >Work style</span>
            <span className='w-[20px] ' ><DownSVG /> </span>
        </span>
        <span className='border-l w-full flex items-center justify-center text-[14px] text-[#4b5563] font-SystemUi ' >
            <span className=' w-[20px]'  > <BagSVG /></span>
            <span className='' >Job type</span>
            <span className='w-[20px]' > <DownSVG /> </span>
        </span>
        <span className='border-l w-full flex items-center justify-center text-[14px] text-[#4b5563] font-SystemUi ' >
            <span className=' w-[20px]'  > <FieldSVG /> </span>
            <span className='' >Field</span>
            <span className='' > <MagnifyingGlassSVG /> </span>
        </span>
    </div>
  )
}
