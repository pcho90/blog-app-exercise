import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { signInUser, createUser } from '../../services/users';
import { AuthContext } from '../../contexts/auth';
import Layout from '../../components/Layout/Layout';

const SignIn = () => {
  const { push } = useHistory();
  const { toggleSignIn } = useContext(AuthContext);

  const [signInInput, setSignInInput] = useState({
    username: '',
    password: ''
  });

  const [signUpInput, setSignUpInput] = useState({
    email: '',
    username: '',
    password: ''
  });

  const handleSignInChange = e => {
    const { name, value } = e.target;
    setSignInInput({ ...signInInput, [name]: value });
  };

  const handleSignUpChange = e => {
    const { name, value } = e.target;
    setSignUpInput({ ...signUpInput, [name]: value });
  };

  const handleSignIn = async event => {
    event.preventDefault();
    try {
      const user = await signInUser(signInInput);
      toggleSignIn(user);
      console.log(user);
      push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async event => {
    event.preventDefault();
    try {
      const user = await createUser(signUpInput);
      toggleSignIn(user);
      push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={handleSignIn}>
          <input
            name='username'
            value={signInInput.username}
            onChange={handleSignInChange}
          />
          <input
            name='password'
            value={signInInput.password}
            onChange={handleSignInChange}
          />
          <button>Sign In</button>
        </form>
        <form onSubmit={handleSignUp}>
          <input
            name='email'
            value={signUpInput.email}
            onChange={handleSignUpChange}
          />
          <input
            name='username'
            value={signUpInput.username}
            onChange={handleSignUpChange}
          />
          <input
            name='password'
            value={signUpInput.password}
            onChange={handleSignUpChange}
          />
          <button>Sign Up</button>
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;
