import React, { useContext, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { BookmarkContext, CommentContext, JobsContext, LikeContext, PostsContext, ProfilePhotoContext, UsersContext } from './Layout';
import { FormContext, MyDataContext, WhereOnTheAppContext } from '../App';
import { GifSVG, ImageSVG, SmileySVG } from '../assets/svgs';
import Posts from '../components/Posts';


export default function Feed() {
  const [profilePhoto] = useContext(ProfilePhotoContext);
  const [form, setForm] = useContext(FormContext);
  const [like, setLike] = useContext(LikeContext);
  const [comment, setComment] = useContext(CommentContext);
  const [bookmark, setBookmark] = useContext(BookmarkContext);
  const [whereOnTheApp, setWhereOnTheApp] = useContext(WhereOnTheAppContext);
  const [users] = useContext(UsersContext);
  const [jobs] = useContext(JobsContext);
  const [posts, setPosts] = useContext(PostsContext);
  const [myData, setMyData] = useContext(MyDataContext);
  const emojiInputRef = useRef(null);
const [ connect1, setConnect1 ] = useState(false)
const [ connect2, setConnect2 ] = useState(false)

  console.log("this is the data: ", myData)
const fullName = `${myData.firstName} ${myData.lastName}`
  const handleSmileyClick = () => {
    if (emojiInputRef.current) {
      emojiInputRef.current.focus();
    }
  };

  const [postContent, setPostContent] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxCharCount = 300;

  const handleInputChange = (e) => {
    setPostContent(e.target.value);
    setCharCount(e.target.value?.length);
  };

  const handleShareClick = async () => {
    if (postContent.trim() === '') {
      alert('Post content cannot be empty');
      return;
    }

    const newPost = {
      message: postContent,
      timeMade: new Date().toISOString(),
      likes: 0,
      username: myData.username,
      person: fullName,
    };

    setPosts([newPost, ...posts]);

    setPostContent('');
    setCharCount(0);
  };

  return (
    <main className='flex xs:flex-col md:flex-row xs:items-center md:items-start relative md:px-[15vw] bg-[#fafafa] gap-[35px] pt-[60px] z-0'>
      <div className='flex flex-col justify-between bg-inherit xs:w-[90%] md:w-[40%] md:h-[80vh] md:pt-[-140px] md:sticky md:top-[100px]'>
        {/* User Profile Section */}
        <span className='flex p-2'>
          <span className='w-[36px] rounded-full flex items-center justify-center'>
            <img src={profilePhoto} alt='user profile photo' />
          </span>
          <span className='flex justify-between gap-5'>
            <span className='flex flex-col'>
              <h3 className='text-[16px] font-SharpGroteskBold'>{ !myData.firstName ? myData.displayName : fullName }</h3>
              <h5 className='text-[14px] text-usernameColor font-SystemUi'>
                @{ !myData.username ? myData.email : myData.username}
              </h5>
            </span>
            <NavLink to='/myprofile' className='text-[13px] font-SharpGroteskBold text-newOrange'>
              My Profile
            </NavLink>
          </span>
        </span>

        {/* Suggested Connections Section */}
        <span className='xs:hidden md:inline-block bg-white pt-[20px] pb-[16px] gap-[16px] rounded-[12px] shadow'>
          <span className='flex justify-between gap-5 px-[12px]'>
            <h2 className='font-SharpGroteskBold text-[18px] font-semibold'>Suggested Connections</h2>
            <NavLink
              to='/explore'
              className='font-SharpGroteskBold text-newOrange text-[13px]'
              onClick={() => setWhereOnTheApp('explore')}
            >
              See more
            </NavLink>
          </span>

          {/* User 1 */}
          <NavLink to={`/profile/${users[2]?.username}`} className='flex p-2 px-[12px] hover:bg-[#fafafa]'>
            <span className='w-[32px] rounded-full flex items-center justify-center'>
              <img src={profilePhoto} alt='user profile photo' />
            </span>
            <span className='flex justify-between w-full'>
              <span className='flex flex-col'>
                <h3 className='text-[16px] font-SFpro'>{users[2]?.name}</h3>
                <h5 className='text-[14px] text-connectUsername font-SystemUi'>@{users[2]?.username}</h5>
              </span>
              <NavLink
              onClick={ () => {
                setConnect1(prev => !prev)
              }}
                className='flex items-center justify-center h-[32px] text-[14px] font-SFpro px-[16px] rounded-full border border-[#e7e7e7]'
              >
                { connect1 ? "Connected" : "Connect"}
              </NavLink>
            </span>
          </NavLink>

          {/* User 2 */}
          <NavLink to={`/profile/${users[1]?.username}`} className='flex p-2 px-[12px] hover:bg-[#fafafa]'>
            <span className='w-[32px] rounded-full flex items-center justify-center'>
              <img src={profilePhoto} alt='user profile photo' />
            </span>
            <span className='flex justify-between w-full'>
              <span className='flex flex-col'>
                <h3 className='text-[16px] font-SFpro'>{users[1]?.name}</h3>
                <h5 className='text-[14px] text-connectUsername font-SystemUi'>@{users[1]?.username}</h5>
              </span>
              <NavLink
              onClick={ () => {
                setConnect2(prev => !prev)
              }}
                className='flex items-center justify-center h-[32px] text-[14px] font-SFpro px-[16px] rounded-full border
                border-[#e7e7e7]'
              >
              { connect2 ? "Connected" : "Connect"}
              </NavLink>
            </span>
          </NavLink>
        </span>

        {/* Jobs Section */}
        <span className='xs:hidden md:inline-block bg-white px-[24px] pt-[20px] pb-[16px] rounded-[12px] shadow'>
          <span className='flex justify-between w-full'>
            <span className='flex flex-col'>
              <h2 className='font-SFpro text-[18px] font-semibold'>Jobs for You</h2>
              <h5 className='font-SFpro text-[12px] text-usernameColor'>
                Based on{' '}
                <NavLink to='' className='underline'>
                  field of expertise
                </NavLink>
                .
              </h5>
            </span>
            <NavLink
              to='/jobs'
              className='font-SFpro text-newOrange text-[13px]'
              onClick={() => setWhereOnTheApp('jobs')}
            >
              See more
            </NavLink>
          </span>

          {/* Job 1 */}
          <NavLink className='flex p-2 w-full'>
            <span className='w-[32px] rounded-full'>
              <img src={profilePhoto} alt='company photo' />
            </span>
            <span className='flex justify-between w-full'>
              <span className='flex flex-col w-full'>
                <h3 className='text-[16px] font-SFpro text-connectUsername'>{jobs[0]?.title}</h3>
                <span className='flex items-center gap-1'>
                  <h3 className='text-[13px] font-systemUI'>{jobs[0]?.company}</h3> —{' '}
                  <h5 className='text-[13px] font-SystemUi'>{jobs[0]?.location}</h5>
                </span>
                <span className='font-SystemUI text-[13px] mt-1'>{jobs[0]?.timePosted} ago</span>
              </span>
            </span>
          </NavLink>
        </span>
      </div>

      <div className='flex flex-col gap-[12px] xs:w-[90%] md:w-[60%] min-h-[100vh]'>
        {/* Post Input Section */}
        <span className='bg-white shadow flex p-[24px] rounded-lg gap-[16px] mb-[30px]'>
          <span className='xs:hidden md:flex rounded-full w-[32px] h-[32px] flex items-center justify-center'>
            <img className='mx-auto' src={profilePhoto} alt='user profile photo' />
          </span>
          <span className='flex-col w-full'>
            <input
              className='border-b border-b-gray-300 focus:border-b-[#222] font-SFpro text-[16px] leading-[28px] mb-[10px] p-[10px] outline-none w-full'
              type='text'
              placeholder='Got something to share?'
              value={postContent}
              onChange={handleInputChange}
              maxLength={maxCharCount}
              ref={emojiInputRef}
            />
            <h6 className='text-right text-connectUsername text-[13px]'>{maxCharCount - charCount} Characters</h6>
            <span className='flex justify-between'>
              <span className='flex justify-between items-center'>
                <span className='p-[10px] w-[38px]' onClick={handleSmileyClick}>
                  <SmileySVG />
                </span>
                <span className='p-[10px] w-[40px]'>
                  <ImageSVG />
                </span>
                <span className='p-[10px] w-[38px]'>
                  <GifSVG />
                </span>
              </span>
              <button
                className='bg-gray-50 text-[lightgray] font-semibold py-[8px] px-[20px] rounded-md mt-[10px]'
                onClick={handleShareClick}
              >
                Share
              </button>
            </span>
          </span>
        </span>

        {/* Display Posts Section */}
        <Posts />
      </div>
    </main>
  );
}
