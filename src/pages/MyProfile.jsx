import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { LocationSVG } from '../assets/svgs'
import { ProfilePhotoContext } from './Layout';

export default function ProfileLayout() {

const currentProfile = {
    name: "Amewu Emmanuel Mensah",
    username: "holalia",
    location: "Accra, Ghana",
    profession: "frontend eng with a keen eye for aesthetics.",
    website: "holalia.co.uk"
}

const [ profilePhoto ] = useContext(ProfilePhotoContext)

    const { name, username, location, profession, website } = currentProfile;


  return (
    <>
        <span className='' >
            <img src="https://newcomma.com/img/base-banner.png" />
        </span>
    <div className='w-[1000px] mx-auto'>
        <span className='bg-green-500' >
            <span className='' >
                <span className='flex w-[24px] rounded-full' >
                 <img className='w-[24px]' src={profilePhoto} />
                </span>
                <h2 className='text-[25px] font-SharpGroteskBold' >{currentProfile?.name}</h2>
                <h5 className='text-[16px] font-SystemUi' >@{currentProfile?.username}</h5>
            </span>
            <section className='flex mt-[30px] mb-[20px] gap-[16px] ' >
                <span className='flex items-center ' >
                <span className='flex w-[12px] ' >
                    <LocationSVG />
                </span>
                <h6 className='text-[14px] ml-[10px] ' >{currentProfile?.location}</h6>
                </span>
                <span className='flex items-center' >
                    <span className='flex w-[12px] ' >
                        <LocationSVG />
                    </span>
                    <NavLink className='text-[14px] ml-[10px] ' >{currentProfile.website}</NavLink>
                </span>
            </section>
            <h6 className='text-[14px] ' >{currentProfile.profession}</h6>
            <nav className='flex mt-[40px] mb-[50px] py-[10px] w-full  ' >
                <NavLink to={`/profile/${username}/`} className='w-full font-SharpGroteskBold text-center border-b focus:border-b focus:border-black' >Feed</NavLink>
                <NavLink to={`/profile/${username}/portfolio`} className='w-full font-SharpGroteskBold text-center border-b focus:border-b focus:border-black' >Portfolio</NavLink>
                <NavLink to={`/profile/${username}/bookmark`} className='w-full font-SharpGroteskBold text-center border-b focus:border-b focus:border-black' >Bookmark</NavLink>
                <NavLink to={`/profile/${username}/about`} className='w-full font-SharpGroteskBold text-center border-b focus:border-b focus:border-black' >About</NavLink>
                <NavLink to={`/profile/${username}/connection`} className='w-full font-SharpGroteskBold text-center border-b focus:border-b focus:border-black' >Connections</NavLink>
            </nav>
        </span>
        <Outlet />
    </div>
    </>
  )
}
