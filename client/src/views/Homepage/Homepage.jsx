import React, { useState, useEffect } from 'react';

import { getPosts } from '../../services/posts';

import Layout from '../../components/Layout/Layout';
import Post from '../../components/Post/Post';

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getPosts();
      setPosts(response);
      console.log(response);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      {posts.map((post, idx) => (
        <Post key={idx} {...post} />
      ))}
    </Layout>
  );
};

export default Homepage;
