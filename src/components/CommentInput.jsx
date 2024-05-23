import React, { useState } from 'react';

const CommentInput = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleCommentSubmit} className='flex ml-auto w-[80%] flex-col p-[16px]'>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder='Write a comment...'
        className='w-full border border-gray-300 rounded-[8px] p-[8px] mb-[8px] placeholder:text-sm font-SystemUi text-[14px]'
        rows={3}
      />
      <button type='submit' className='self-end bg-[#fccb00] text-[#222] text-[14px] font-SFpro font-semibold px-[16px] py-[8px] rounded-full border border-gray-200'>
        Comment
      </button>
    </form>
  );
};

export default CommentInput;
