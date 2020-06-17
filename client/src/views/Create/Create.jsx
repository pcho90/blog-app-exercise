import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import './Create.css';

import { createPost } from '../../services/posts';
import { AuthContext } from '../../contexts/auth';
import Layout from '../../components/Layout/Layout';

const Create = () => {
  const { push } = useHistory();

  const {
    currentUser: { _id, username }
  } = useContext(AuthContext);

  const [input, setInput] = useState({
    title: '',
    content: '',
    user: _id,
    author: username
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await createPost(input);
    push('/');
  };

  return (
    <Layout>
      <div>
        <form onSubmit={handleSubmit}>
          <input name='title' value={input.title} onChange={handleChange} />
          <input name='content' value={input.content} onChange={handleChange} />
          <button>Create</button>
        </form>
      </div>
    </Layout>
  );
};

export default Create;
