import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { LocationSVG } from '../assets/svgs'

export default function ProfileLayout() {

    const { username } = useParams();
    const [ currentProfile, setCurrentProfile ] = useState(null);

    useEffect( () => {

        const fetchParticulateProfile = async() => {
            try{
                const response = await fetch(`/api/users/${username}`)
                if( !response.ok) {
                    throw new Error("Error fetching this user's profile")
                }
                const data = await response.json();
                setCurrentProfile(data)
                console.log(data)
            } catch ( error ) {
                console.error("Error fetching profile: ", error)
            }
        }

        fetchParticulateProfile();
    } ,[])
  return (
    <>
        <span className='' >
            <img src='' />
        </span>
    <div className='w-[1000px] mx-auto'>
        <span className='bg-green-500' >
            <span className='' >
                <h2 className='text-[25px] font-SharpGroteskBold' >Emmanuel Amewu Mensah</h2>
                <h5 className='text-[16px] font-SystemUi' >@holalia</h5>
            </span>
            <section className='flex mt-[30px] mb-[20px] ' >
                <span className='flex items-center' >
                <span className='flex w-[12px] ' >
                    <LocationSVG />
                </span>
                <h6 className='text-[14px] ' >Accra, Ghana</h6>
                </span>
                <span className='flex items-center' >
                    <span className='flex w-[12px] ' >
                        <LocationSVG />
                    </span>
                    <NavLink className='text-[14px] ' >holalia.co.uk</NavLink>
                </span>
            </section>
            <h6 className='text-[14px] ' >front-end eng with a keen eye for aesthetics.</h6>
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
