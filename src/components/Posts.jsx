import React, { useContext, useState } from 'react';
import { MoreSVG, BookmarkSVG, CommentSVG, LikeSVG } from '../assets/svgs';
import { PostsContext, ProfilePhotoContext } from '../pages/Layout';
import { NavLink } from 'react-router-dom';
import CommentInput from './CommentInput'; // Import the new CommentInput component

export default function Posts() {
  const [profilePhoto] = useContext(ProfilePhotoContext);
  const [posts, setPosts] = useContext(PostsContext);
  const [activeCommentPostId, setActiveCommentPostId] = useState(null);

  console.log(posts);

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1, liked: !post.liked } : post
    );
    setPosts([...updatedPosts]);
  };
  
  const handleComment = (postId, comment) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    );
    setPosts([...updatedPosts]);
  };
  
  const handleBookmark = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, bookmarked: !post.bookmarked } : post
    );
    setPosts([...updatedPosts]);
  };
  

  return (
    <div className='flex flex-col gap-[24px]'>
      {posts && posts.length > 0 ? (
        posts.map((post) => {
          const { id, person, username, message, photos, likes, comments, bookmarked } = post;

          return (
            <span key={id} className='bg-white rounded-[12px] shadow mb-[16px]'>
              <span className='flex justify-between mb-[16px] px-[24px] pt-[24px]'>
                <span className='flex gap-[16px]'>
                  <NavLink to={`/profile/${username}`}>
                    <img src={profilePhoto} className='' alt='profile' />
                  </NavLink>
                  <NavLink to={`/profile/${username}`}>
                    <h3 className='text-[15px] text-[#27272a]'>{person}</h3>
                    <h5 className='text-[14px] text-[#a1a1aa]'>@{username}</h5>
                  </NavLink>
                </span>
                <span className='flex'>
                  <MoreSVG />
                </span>
              </span>
              <span className='flex flex-col p-[16px] mb-[16px] px-[24px] w-full border-b border-b-gray-100'>
                <p className='text-[#27272a]'>{message}</p>
                {photos && (
                  <span className='mt-[16px]'>
                    <img className='rounded-[12px]' src={photos} alt='post' />
                  </span>
                )}
              </span>
              <span className='flex items-center px-[24px] mb-[16px] gap-[12px]'>
                <span className='w-[32px] flex items-center justify-center' onClick={() => handleLike(id)}>
                  <LikeSVG /> {likes > 0 ? likes : ''}
                </span>
                <span className='w-[32px] flex items-center justify-center' onClick={() => setActiveCommentPostId(activeCommentPostId === id ? null : id)}>
                  <CommentSVG /> {comments && comments.length > 0 ? comments.length : ""}
                </span>
                <span className='w-[32px] flex items-center justify-center' onClick={() => handleBookmark(id)}>
                  <BookmarkSVG />
                </span>
              </span>
              {activeCommentPostId === id && (
                <CommentInput onSubmit={(comment) => handleComment(id, comment)} />
              )}
            </span>
          );
        })
      ) : (
        <div>No posts to display.</div>
      )}
    </div>
  );
}

