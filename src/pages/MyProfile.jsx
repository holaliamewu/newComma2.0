import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { LocationSVG, LinkSVG } from '../assets/svgs'
import { ProfilePhotoContext } from './Layout';
import { MyDataContext } from '../App';

export default function ProfileLayout() {


const [myData] = useContext(MyDataContext)
const [ profilePhoto ] = useContext(ProfilePhotoContext)

    const { firstName, lastName, username, email, displayName } = myData;
    const fullName = `${firstName} ${lastName}`


  return (
    <>
        <span className='flex w-full xs:h-[30vh] md:h-fit' >
            <img className='w-full' src="https://newcomma.com/img/base-banner.png" />
        </span>
    <div className='max-w-[1000px] mx-auto xs:h-[30vh] md:h-full'>
        <span className='bg-green-500' >
            <span className='' >
                <span className='flex w-[24px] rounded-full' >
                 <img className='w-[24px]' src={profilePhoto} />
                </span>
                <span className='' >
                </span>
                <h2 className='text-[25px] font-SharpGroteskBold' >{!displayName ? fullName : displayName }</h2>
                <h5 className='text-[16px] font-SystemUi' >@{!username ? email : username}</h5>
            </span>
            <section className='flex mt-[30px] mb-[20px] gap-[16px] ' >
                <span className='flex items-center ' >
                </span>
                <span className='flex items-center' >
                    <span className='flex w-[12px] ' >
                        <LinkSVG />
                    </span>
                    <NavLink className='text-[14px] ml-[10px] ' >newcomma.com</NavLink>
                </span>
            </section>
            <nav className='flex max-w-[1000px] mt-[40px] mb-[50px] py-[10px] w-full  ' >
                <NavLink to={`/profile/${username}/`} className='md:w-full font-SharpGroteskBold text-center border-b focus:border-b focus:border-black' >Feed</NavLink>
                <NavLink to={`/profile/${username}/portfolio`} className='w-full xs:hidden md:flex font-SharpGroteskBold text-center border-b focus:border-b focus:border-black' >Portfolio</NavLink>
                <NavLink to={`/profile/${username}/bookmark`} className='w-full xs:hidden md:flex font-SharpGroteskBold text-center border-b focus:border-b focus:border-black' >Bookmark</NavLink>
                <NavLink to={`/profile/${username}/about`} className='w-full xs:hidden md:flex font-SharpGroteskBold text-center border-b focus:border-b focus:border-black' >About</NavLink>
                <NavLink to={`/profile/${username}/connection`} className='w-full xs:hidden md:flex font-SharpGroteskBold text-center border-b focus:border-b focus:border-black' >Connections</NavLink>
            </nav>
        </span>
        <Outlet />
    </div>
    </>
  )
}
