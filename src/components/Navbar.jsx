import React from 'react'
import { BellSVG, MenuSVG, NewCommaAshCommaSVG, NewCommaBetaSVG } from '../assets/svgs'
import Navs from './Navs'

export default function Navbar() {
  return (
    <header className='flex justify-between items-center px-[2%] mx-auto py-[16px] border-b '>
      <NewCommaBetaSVG /> 
      <Navs />
      <span className='xs:hidden md:flex gap-[16px] items-center ' >
          <BellSVG />
          <span className='w-[28px] ' >
            <img src='https://newcomma.com/_next/image?url=%2Fimg%2Ffeedback-fish.png&w=32&q=75' alt='somebot' />
          </span>
          <span className=' flex items-center justify-center bg-[#f5f5f4] rounded-full w-[32px] h-[32px] box-border px-[1px] border ' >
            <NewCommaAshCommaSVG />
          </span>
      </span>
          <span className='w-[24px] text-[black]  ' >
         <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHlsZT0iZmxleC1zaHJpbms6IDA7Ij48cGF0aCBkPSJNMyA3aDE4TTMgMTJoMThNMyAxN2gxOCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48L3N2Zz4=' />
          </span>
    </header>
  )
}
