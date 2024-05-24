import React, { useContext } from 'react'
import { BellSVG, MenuSVG, NewCommaAshCommaSVG, NewCommaBetaSVG } from '../assets/svgs'
import Navs from './Navs'
import { MiniMenuContext, ProfilePhotoContext,  } from '../pages/Layout'
import { NavLink } from 'react-router-dom'
import { WhereOnTheAppContext, SignInContext } from '../App'
import MiniMenu from './MiniMenu'

export default function Navbar() {
  const [ whereOnTheApp, setWhereOnTheApp ] = useContext(WhereOnTheAppContext)
  const [ profilePhoto, setProfilePhoto ] = useContext(ProfilePhotoContext)
  const [ showMiniMenu, setShowMiniMenu ] = useContext(MiniMenuContext)
  const [ isSignedIn, setIsSignedIn ] = useContext(SignInContext)


  return (
    <header className='flex sticky top-0 bg-white justify-between items-center px-[2%] mx-auto py-[16px] border-b border-b-gray-200 z-10'>
     <NavLink className='flex' to='/' >
      <NewCommaBetaSVG /> 
     </NavLink>
      <Navs />

      <span className='flex items-center justify-center gap-4 ' >

        <NavLink to='/chats' className='w-[24px]'
        onClick={ ({isActive}) => { setWhereOnTheApp('chats')}} >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="m18.47 16.83.39 3.16c.1.83-.79 1.41-1.5.98l-4.19-2.49c-.46 0-.91-.03-1.35-.09A4.86 4.86 0 0 0 13 15.23c0-2.84-2.46-5.14-5.5-5.14-1.16 0-2.23.33-3.12.91-.03-.25-.04-.5-.04-.76C4.34 5.69 8.29 2 13.17 2S22 5.69 22 10.24c0 2.7-1.39 5.09-3.53 6.59Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 15.23c0 1.19-.44 2.29-1.18 3.16-.99 1.2-2.56 1.97-4.32 1.97l-2.61 1.55c-.44.27-1-.1-.94-.61l.25-1.97C2.86 18.4 2 16.91 2 15.23c0-1.76.94-3.31 2.38-4.23.89-.58 1.96-.91 3.12-.91 3.04 0 5.5 2.3 5.5 5.14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>        </NavLink>
      <NavLink 
      to='/notifications' 
      className='xs:hidden md:flex' 
      onClick={
        ({isActive}) => {
          setWhereOnTheApp('notifications')
        }
      }>
        <BellSVG />
      </NavLink>

        <span 
        onClick={ () => { setShowMiniMenu(prev => !prev)}}
        className=' items-center justify-center xs:flex md:hidden w-[24px] text-[black]  ' >
                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHlsZT0iZmxleC1zaHJpbms6IDA7Ij48cGF0aCBkPSJNMyA3aDE4TTMgMTJoMThNMyAxN2gxOCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48L3N2Zz4=' />
         </span>

          <span 
          onClick={ () => { setShowMiniMenu(prev => !prev)}}
          className='xs:hidden md:flex items-center justify-center bg-[#f5f5f4] rounded-full w-[32px] h-[32px] box-border px-[1px] border-b border-[lightgrey] ' >
            <img src={profilePhoto} alt='newComma default dp' />
          </span>

      </span>
      { showMiniMenu && <MiniMenu />}
      
    </header>
  )
}
