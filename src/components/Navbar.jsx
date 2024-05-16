import React, { useContext } from 'react'
import { BellSVG, MenuSVG, NewCommaAshCommaSVG, NewCommaBetaSVG } from '../assets/svgs'
import Navs from './Navs'
import { ProfilePhotoContext } from '../pages/Layout'

export default function Navbar() {

  const [ profilePhoto, setProfilePhoto ] = useContext(ProfilePhotoContext)
  return (
    <header className='flex md:sticky top-0 bg-white justify-between items-center px-[2%] mx-auto py-[16px] border-b '>
      <NewCommaBetaSVG /> 
      <Navs />

      <span className='flex items-center justify-center gap-4 ' >

        <span className='' >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-quote-fill" viewBox="0 0 16 16"> <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM7.194 6.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 9.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 6c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"/> </svg>
        </span>
      <span className='xs:hidden md:flex' >
        <BellSVG />
      </span>

        <span className=' items-center justify-center xs:flex md:hidden w-[24px] text-[black]  ' >
                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHlsZT0iZmxleC1zaHJpbms6IDA7Ij48cGF0aCBkPSJNMyA3aDE4TTMgMTJoMThNMyAxN2gxOCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48L3N2Zz4=' />
         </span>

          <span className='xs:hidden md:flex items-center justify-center bg-[#f5f5f4] rounded-full w-[32px] h-[32px] box-border px-[1px] border ' >
            <img src={profilePhoto} alt='newComma default dp' />
          </span>

      </span>
      
    </header>
  )
}
