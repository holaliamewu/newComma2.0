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
    const [ connected, setConnected ] = useState(false)

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
                    <span className='flex w-[96px] rounded-full mt-[-50px] ' >
                        <img className='w-[90px]' src={profilePhoto} />
                     </span>
                     <span className='flex items-center justify-between' >
                        <span className='' >
                            <h2 className='text-[25px] font-SharpGroteskBold'>{currentProfile?.name}</h2>
                            <h5 className='text-[16px] font-SystemUi'>@{currentProfile?.username}</h5>
                        </span>
                        { !currentProfile.connected && <button 
                        className="bg-[#fccb00] p-4 py-2 rounded-[12px] text-black font-SharpGroteskBold " 
                        onClick={() => { 
                                setConnected(prev => !prev)
                                setNotifications([`You just made a connection with ${currentProfile?.name}`, ...notifications]);
                            }} 
                            type="button"
                        >
                        { connected ? "Undo Connection" : "Connect"}
                        </button>}
                     </span>
                    </span>
                    

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
