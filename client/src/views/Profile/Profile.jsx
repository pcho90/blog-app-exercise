import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { updateUser } from '../../services/users';
import { AuthContext } from '../../contexts/auth';
import Layout from '../../components/Layout/Layout';

const Profile = () => {
  const { push } = useHistory();
  const {
    currentUser: { username, email, password, _id }
  } = useContext(AuthContext);
  const [input, setInput] = useState({ username, email, password });

  const handleChange = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await updateUser(_id, input);
    console.log(response);
    push('/');
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input name='username' value={input.username} onChange={handleChange} />
        <input name='email' value={input.email} onChange={handleChange} />
        <input name='password' value={input.password} onChange={handleChange} />
        <button>Update</button>
      </form>
    </Layout>
  );
};

export default Profile;
