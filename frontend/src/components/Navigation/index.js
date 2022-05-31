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

      <div className='navigation-bar-item'>
        {isLoaded && sessionLinks}
      </div>

      <div className='navigation-bar-item' >
        <div onClick={(() => setContentView('home'))}>
        <i class="fa-solid fa-house"></i>
          Home</div>
      </div>

      <div className='navigation-bar-item' >
        <div onClick={(() => setContentView('home'))}>
        <span class="material-symbols-outlined">text_snippet</span>
          Notes</div>
      </div>

      <div className='navigation-bar-item' >
        <div onClick={(() => {
          setContentView('foldersList');
          setShowFolderLinks(!showFolderLinks)
          })}>
        <span class="material-symbols-outlined">folder</span>
          Folders</div>
      </div>

      {showFolderLinks &&
            <FolderList />}

      <div className='navigation-bar-item' >
        <div onClick={(() => setContentView('home'))}>
        <i class="fa-brands fa-github"></i>
          </div>
      </div>

      <div className='navigation-bar-item' >
        <div onClick={(() => setContentView('home'))}>
        <i class="fa-brands fa-linkedin"></i>
          </div>
      </div>


    </div>
  );
}

export default Navigation;
