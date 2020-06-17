import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';
import './Post.css';

const Post = ({ title, user, content, createdAt, _id, author }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='post'>
      <span className='title'>
        <Link to={`/posts/${_id}`}>
          <h2>{title}</h2>
        </Link>
      </span>
      <div className='subtitle'>
        <div className='author'>{author}</div>
        <span className='time'>{createdAt}</span>
      </div>
      <div className='content'>{content}</div>
    </div>
  );
};

export default Post;
