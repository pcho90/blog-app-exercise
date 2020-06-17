import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { getPost, updatePost, deletePost } from '../../services/posts';
import Layout from '../../components/Layout/Layout';

const Edit = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const [input, setInput] = useState({ title: '', content: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    await updatePost(id, input);
    push('/');
  };

  const handleDelete = async () => {
    await deletePost(id);
    push('/');
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPost(id);
      setInput(response);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div>
        <form onSubmit={handleSubmit}>
          <input name='title' value={input.title} onChange={handleChange} />
          <input name='content' value={input.content} onChange={handleChange} />
          <button>Create</button>
        </form>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </Layout>
  );
};

export default Edit;
