import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import FolderList from '../FolderList';
import '../../css/Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navigation-bar'>
      <div className='navigation-bar-item'>
        <NavLink exact to="/">Home</NavLink>
      </div>
      <div className='navigation-bar-item'>
        {isLoaded && sessionLinks}
      </div>
      <div className='navigation-bar-item'>
        Stand-in Text
      </div>
      <div className='navigation-bar-item'>
      Stand-in Text
      </div>
      <div className='navigation-bar-item'>
      Stand-in Text
      </div>
      <FolderList />
    </div>
  );
}

export default Navigation;