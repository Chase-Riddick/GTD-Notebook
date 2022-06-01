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
  const [showFolderLinks, setShowFolderLinks] = useState(false);

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

  <span class="material-symbols-outlined">
folder
</span>

  return (
    <div className='navigation-bar'>
      <div className='top-bar'>
        <div className='logo-img'></div>
      <div className='navigation-bar-item'>
        {isLoaded && sessionLinks}
      </div>
      </div>

      <div className='navigation-bar-item' >
        <div onClick={(() => setContentView('home'))}>
        <i class="fa-solid fa-house"></i>
        <span className='link-title'>Home</span></div>
      </div>

      <div className='navigation-bar-item' >
        <div onClick={(() => setContentView('home'))}>
        <i class="fa-solid fa-file"></i>
        <span className='link-title'>Notes</span></div>
      </div>

      <div className='navigation-bar-item' >
        <div onClick={(() => {
          setContentView('foldersList');
          setShowFolderLinks(!showFolderLinks)
          })}>
        <i class="fa-solid fa-book"></i>
          <span className='link-title'>Folders</span></div>
      </div>

      {showFolderLinks &&
            <FolderList />}

      <div className='navigation-bar-item' >


        <div onClick={(() => setContentView('home'))}>
        <a href="https://github.com/Chase-Riddick/GTD-Notebook" target="_blank">
        <i class="fa-brands fa-github fa-lg"></i>
        </a>
          </div>
      </div>

      <div className='navigation-bar-item' >
      <a href="https://www.linkedin.com/in/chase-riddick-a14596237/" target="_blank">
        <div onClick={(() => setContentView('home'))}>
        <i class="fa-brands fa-linkedin fa-lg"></i>
          </div>
        </a>
      </div>

    </div>
  );
}

export default Navigation;
