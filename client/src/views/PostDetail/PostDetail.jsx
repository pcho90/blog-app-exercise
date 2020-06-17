import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import './PostDetail.css';

import { getPost } from '../../services/posts';
import { AuthContext } from '../../contexts/auth';
import { createComment, getComments } from '../../services/comments';
import Layout from '../../components/Layout/Layout';
import Comment from '../../components/Comment/Comment';

const PostDetail = () => {
  const { currentUser } = useContext(AuthContext);
  const [input, setInput] = useState('');
  const [replies, setReplies] = useState([]);
  const { id } = useParams();
  const [post, setPost] = useState({
    title: '',
    content: '',
    author: '',
    createdAt: '',
    comments: []
  });

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const { username, _id } = currentUser;

    await createComment({
      content: input,
      author: username,
      user: _id,
      post: id
    });

    const response = await getComments(id);
    setReplies(response);

    setInput('');
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPost(id);
      const commentResponse = await getComments(id);
      setPost(response);
      setReplies(commentResponse);
      console.log(commentResponse);
    };
    fetchData();
  }, []);

  const { title, content, author, createdAt: time, comments } = post;

  return (
    <Layout>
      {post && (
        <div>
          <div className='post-details'>
            <div className='original-post'>
              <span className='original-title'>{title}</span>
              <div className='original-subtitle'>
                <span>{author}</span>
                <span>{time}</span>
              </div>
              <span className='original-content'>{content}</span>
            </div>
            <div className='comments'>
              {replies.map((each, idx) => (
                <Comment key={idx} {...each} />
              ))}
            </div>
          </div>
          <div className='comment-form'>
            {currentUser && (
              <form onSubmit={handleSubmit}>
                <textarea rows='10' onChange={handleChange} value={input} />
                <button>Submit</button>
              </form>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default PostDetail;
