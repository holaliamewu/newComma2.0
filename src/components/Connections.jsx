import React, { useContext } from 'react';
import { ProfilePhotoContext, UsersContext } from '../pages/Layout';
import { NavLink, useSearchParams } from 'react-router-dom';

export default function Connections({newTypeFilter}) {
  const [profilePhoto] = useContext(ProfilePhotoContext);
  const [users] = useContext(UsersContext);

  const [searchParams] = useSearchParams();
  let typeFilter = searchParams.get("type");

  // Debugging logs
  console.log('Type Filter:', typeFilter);
  console.log('Users:', users);

  const filteredConnections = (typeFilter && !newTypeFilter) ? 
    users.filter(user => {
      console.log('User Type:', user.type); // Log each user's type
      return user.type?.toLowerCase() === typeFilter.toLowerCase();
    }) : (newTypeFilter) ?
    users.filter(user => {
      console.log('User Filter:', user.name, user.username); // Log each user's name and username
      return user.name?.toLowerCase() === newTypeFilter.toLowerCase() || user.username?.toLowerCase() === newTypeFilter.toLowerCase();
    }) : 
    users;

  // Log the filtered connections
  console.log('Filtered Connections:', filteredConnections);

  const connectionsComponent = filteredConnections.map(user => {
    const { name, username, profession } = user;
    return (
      <NavLink 
        key={username} 
        to={`/profile/${username}`} 
        className='flex flex-col gap-[20px] shadow-sm rounded-[12px] py-[16px] px-[20px] border border-gray-100'
      >
        <div className='flex items-center justify-center w-[64px] h-[64px] p-[10px] bg-[lightgray] border border-gray-100 rounded-full'>
          <img className='w-[64px] h-[64px]' src={profilePhoto} alt={`${name}'s profile`} />
        </div>
        <div>
          <div className='flex gap-[6px]'>
            <h3 className='text-[14px] font-SharpGroteskBold'>{name}</h3>
            <h5 className='text-[14px] text-[#71717a] font-SharpGroteskBold'>@{username}</h5>
          </div>
          <p className='text-[14px] text-[#27272a] font-SystemUi'>{profession}</p>
        </div>
        <div className='flex gap-[8px]'>
          <span className='w-fit flex items-center justify-center font-SFpro text-[14px] px-[16px] h-[32px] rounded-[24px] border border-gray-200'>Connect</span>
          <span className='w-fit flex items-center justify-center font-SFpro text-[14px] px-[16px] h-[32px] rounded-[24px] border border-gray-200'>Copy link</span>
        </div>
      </NavLink>
    );
  });

  return (
    <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-[70px] mx-[12px]'>
      {connectionsComponent}
    </div>
  );
}
