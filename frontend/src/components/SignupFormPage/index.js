import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import '../../css/LoginForm.css';


function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <ul className="errors-box">
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>

      <div className="cell">
      <div className='input-field'>
        <div className='input-icon-div'><i id="splash-icon" class="fa-solid fa-lock splash-icon"></i></div>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
          className='input-box'
        />
        </div>
        </div>


        <div className="cell">
        <div className='input-field'>
        <div className='input-icon-div'><i id="splash-icon" class="fa-solid fa-lock splash-icon"></i></div>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Username"
          className='input-box'
        />
        </div>
        </div>

      <div className="cell">
      <div className='input-field'>
        <div className='input-icon-div'><i id="splash-icon" class="fa-solid fa-lock splash-icon"></i></div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          className='input-box'
        />
        </div>
        </div>


      <div className="cell">
      <div className='input-field'>
        <div className='input-icon-div'><i id="splash-icon" class="fa-solid fa-lock splash-icon"></i></div>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="Confirm Password"
          className='input-box'
        />
        </div>
        </div>

      <button className='splash-button' type="submit">Sign Up</button>
    </form>
  );
}

export default SignupFormPage;