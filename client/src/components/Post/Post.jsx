import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';

const Post = ({ title, user, content, createdAt, _id, author }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <span className='title'>
        {currentUser && currentUser._id === user ? (
          <Link to={`/posts/${_id}`}>{title}</Link>
        ) : (
          title
        )}
      </span>
      <div className='content'>{content}</div>
      <div className='user'>{author}</div>
      <span className='createdAt'>{createdAt}</span>
    </div>
  );
};

export default Post;
