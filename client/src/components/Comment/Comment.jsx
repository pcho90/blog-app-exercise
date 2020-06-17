import React from 'react';

import './Comment.css';

const Comment = ({ content, author, createdAt }) => (
  <div className='content'>
    <div className='content-main'>{content}</div>
    <div className='content-subtitle'>
      <span>{author}</span>
      <span>{createdAt}</span>
    </div>
  </div>
);

export default Comment;
