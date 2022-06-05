// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../../css/LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="user-login-form">
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div className='cell'>

        <div className='input-field'>
          <div className='input-icon-div'><i id="splash-icon"  class="fa-solid fa-user"></i></div>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          require
          placeholder='Username or Email'
          className='input-box'
        />
        </div>
      </div>
      <div className='cell'>

        <div className='input-field'>
        <div className='input-icon-div'><i id="splash-icon" class="fa-solid fa-lock splash-icon"></i></div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder='Password'
          className='input-box'
        />
        </div>
      </div>
      <button type="submit"  className='splash-button'>Log In</button>
    </form>
  );
}

export default LoginFormPage;