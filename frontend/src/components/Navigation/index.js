import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import FolderList from '../FolderList';
import '../../css/Navigation.css';
import { useContentView } from '../../context/ContentViewContext';
import Home from '../Home';

function Navigation({ isLoaded }){
  // const [activeNavRoute, setActiveNavRoute] = useState('');
  const { contentView, setContentView } = useContentView();
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
      <div className='navigation-bar-item' >
        <button onClick={(() => setContentView('home'))}>Home</button>
      </div>
      <div className='navigation-bar-item' >
        <button onClick={(() => setContentView('something'))}>Something</button>
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