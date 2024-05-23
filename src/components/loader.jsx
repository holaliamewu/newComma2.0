import React from 'react'
import { ring } from 'ldrs'

export default function loader() {
    ring.register()
  return (
    <div className='w-[100vw] h-[100vh] bg-white flex items-center justify-center ' >
        <l-ring
        size="40"
        stroke="5"
        bg-opacity="0"
        speed="2" 
        color="black" ></l-ring>  
    </div>
)
}
