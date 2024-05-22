import React, { useContext, useState } from 'react';
import { MoreSVG, BookmarkSVG, CommentSVG, LikeSVG } from '../assets/svgs';
import { PostsContext, ProfilePhotoContext } from '../pages/Layout';
import { NavLink } from 'react-router-dom';

export default function Posts() {
  const [profilePhoto] = useContext(ProfilePhotoContext);
  const [posts, setPosts] = useContext(PostsContext);
  const [ addComment, setAddComment ] = useState(false)

  console.log(posts);

  const handleLike = async (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1, liked: !post.liked } : post
    );
    setPosts(updatedPosts);

    try {
      await fetch(`/api/posts/${postId}/like`, { method: 'POST' });
    } catch (error) {
      console.error('Error liking the post:', error);
    }
  };

  const handleComment = async (postId, comment) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    );
    setPosts(updatedPosts);

    try {
      await fetch(`/api/posts/${postId}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment }),
      });
    } catch (error) {
      console.error('Error commenting on the post:', error);
    }
  };

  const handleBookmark = async (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, bookmarked: !post.bookmarked } : post
    );
    setPosts(updatedPosts);

    try {
      await fetch(`/api/posts/${postId}/bookmark`, { method: 'POST' });
    } catch (error) {
      console.error('Error bookmarking the post:', error);
    }
  };

  const allPosts = posts.map((post) => {
    const { id, person, username, message, photos, likes, comments, bookmarked } = post;
    return (
      <span key={id} className='bg-white rounded-[12px] shadow'>
        <span className='flex justify-between mb-[16px] px-[24px] pt-[24px]'>
          <span className='flex gap-[16px]'>
            <NavLink>
              <img src={profilePhoto} className='' alt='profile' />
            </NavLink>
            <NavLink>
              <h3 className='text-[15px] text-[#27272a]'>{person}</h3>
              <h5 className='text-[14px] text-[#a1a1aa]'>@{username}</h5>
            </NavLink>
          </span>
          <span className='flex'><MoreSVG /></span>
        </span>
        <span className='flex flex-col p-[16px] mb-[16px] px-[24px] w-full border-b border-b-gray-100'>
          <p className='text-[#27272a]'>{message}</p>
          {photos && (
            <span>
              <img className='' src={photos} alt='post' />
            </span>
          )}
        </span>
        <span className='flex items-center px-[24px] mb-[16px] gap-[12px]'>
          <span className='w-[32px] flex items-center justify-center' onClick={() => handleLike(id)}>
            <LikeSVG /> {post.likes > 0 ? likes : ''}
          </span>
          <span className='w-[32px] flex items-center justify-center' onClick={() => {
            const comment = prompt('Enter your comment');
            setAddComment(true);
            if (comment) {
              handleComment(id, comment);
            }
          }}>
            <CommentSVG /> {comments?.length}
          </span>
          <span className='w-[32px] flex items-center justify-center' onClick={() => handleBookmark(id)}>
            <BookmarkSVG /> 
          </span>
        </span>
      </span>
    );
  });

  return <div className='flex flex-col gap-[24px]'>{allPosts}</div>;
}
