import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { LocationSVG } from '../assets/svgs';
import { ProfilePhotoContext, NotificationsContext, UsersContext } from './Layout';
import loader  from '../components/loader';

export default function ProfileLayout() {
    const { username } = useParams();
    const [ loading, setLoader ] = useState(false)
    const [currentProfile, setCurrentProfile] = useState([]);
    const [notifications, setNotifications] = useContext(NotificationsContext);
    const [ profilePhoto ] = useContext(ProfilePhotoContext)

    const users = useContext(UsersContext);

    console.log(users)

    useEffect(() => {
        
            const filteredUser = users[0].filter(user => user.username === username);
            if (filteredUser.length > 0) {
                setCurrentProfile(filteredUser[0]);
            } 
            console.log("filtered users: ", filteredUser);
        
    }, [username, users]);

    return (
        <>
            <span>
                <img src="https://newcomma.com/img/base-banner.png" alt="Profile" />
            </span>
            <div
            loading={<loader />}
            className='w-[1000px] mx-auto'>
                <span className=''>
                    <span>
                    <span className='flex w-[24px] rounded-full' >
                     <img className='w-[24px]' src={profilePhoto} />
                   </span>
                        <h2 className='text-[25px] font-SharpGroteskBold'>{currentProfile?.name}</h2>
                        <h5 className='text-[16px] font-SystemUi'>@{currentProfile?.username}</h5>
                    </span>

                    <button 
                        onClick={() => { 
                            setNotifications([`You just made a connection with ${currentProfile?.name}`, ...notifications]);
                        }} 
                        type="button"
                    >
                    </button>
                    <section className='flex mt-[30px] mb-[20px] gap-[16px]'>
                        <span className='flex items-center'>
                            <span className='flex w-[12px]'>
                                <LocationSVG />
                            </span>
                            <h6 className='text-[14px] ml-[10px]'>{currentProfile?.location}</h6>
                        </span>
                        <span className='flex items-center'>
                            <span className='flex w-[12px]'>
                                <LocationSVG />
                            </span>
                            <NavLink className='text-[14px] ml-[10px]' to={currentProfile?.website}>{currentProfile?.website}</NavLink>
                        </span>
                    </section>
                    <h6 className='text-[14px]'>{currentProfile?.profession}</h6>
                    <nav className='flex mt-[40px] mb-[50px] py-[10px] w-full'>
                        <NavLink to={`/profile/${username}/`} className='w-full font-SharpGroteskBold text-center border-b focus:border-b focus:border-black'>Feed</NavLink>
                        <NavLink to={`/profile/${username}/portfolio`} className='w-full font-SharpGroteskBold text-center border-b focus:border-b focus:border-black'>Portfolio</NavLink>
                        <NavLink to={`/profile/${username}/bookmark`} className='w-full font-SharpGroteskBold text-center border-b focus:border-b focus:border-black'>Bookmark</NavLink>
                        <NavLink to={`/profile/${username}/about`} className='w-full font-SharpGroteskBold text-center border-b focus:border-b focus:border-black'>About</NavLink>
                        <NavLink to={`/profile/${username}/connection`} className='w-full font-SharpGroteskBold text-center border-b focus:border-b focus:border-black'>Connections</NavLink>
                    </nav>
                </span>
                <Outlet />
            </div>
        </>
    );
}
