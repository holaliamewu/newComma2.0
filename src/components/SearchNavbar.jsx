import React, { useState } from 'react';
import { BagSVG, DownSVG, FieldSVG, Jobs2SVG, LocationSVG, MagnifyingGlassSVG } from '../assets/svgs';

export default function SearchNavbar() {
  const [jobType, setJobType] = useState(null);
  const [field, setField] = useState(null);

  const jobTypeOptions = ["remote", "hybrid", "on-site"];
  const creativeFields = ["Design", "Photography", "Writing", "Music", "Film", "Art", "Crafts", "Fashion"];

  return (
    <div className='flex items-center justify-around w-full h-full'>
      <span className='border-l w-full flex items-center justify-center text-[14px] text-[#4b5563] font-SystemUi ' >
        <span className='w-[20px]'><LocationSVG /></span>
        <input type="text" placeholder="Location" className='pl-[8px] w-full'/>
        <span className='w-[20px]'><MagnifyingGlassSVG /></span>
      </span>
      <span className='border-l w-full flex items-center justify-center text-[14px] text-[#4b5563] font-SystemUi ' >
        <span className='w-[20px]'><Jobs2SVG /></span>
        <input type="text" placeholder="Work style" className='pl-[8px] w-full'/>
        <span className='w-[20px]'><DownSVG /></span>
      </span>
      <span className='border-l w-full flex items-center justify-center text-[14px] text-[#4b5563] font-SystemUi ' >
        <span className='w-[20px]'><BagSVG /></span>
        <select onChange={(e) => setJobType(e.target.value)} value={jobType} className='pl-[8px]'>
          <option value="" disabled>Select job type</option>
          {jobTypeOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <span className='w-[20px]'><DownSVG /></span>
      </span>
      <span className='border-l w-full flex items-center justify-center text-[14px] text-[#4b5563] font-SystemUi ' >
        <span className='w-[20px]'><FieldSVG /></span>
        <select onChange={(e) => setField(e.target.value)} value={field} className='pl-[8px]'>
          <option value="" disabled>Select field</option>
          {creativeFields.map((field, index) => (
            <option key={index} value={field}>{field}</option>
          ))}
        </select>
        <span className='w-[20px]'><DownSVG /></span>
      </span>
    </div>
  );
}
