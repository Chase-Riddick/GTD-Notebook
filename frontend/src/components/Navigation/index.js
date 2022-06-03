import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import FolderList from '../FolderList';
import '../../css/Navigation.css';
import { useContentView } from '../../context/ContentViewContext';
import Home from '../Home';
import LogoutModal from '../LogoutModal';

function Navigation({ isLoaded }){
  // const [activeNavRoute, setActiveNavRoute] = useState('');
  const { contentView, setContentView } = useContentView();
  const sessionUser = useSelector(state => state.session.user);
  const [showFolderLinks, setShowFolderLinks] = useState(false);
  const [activeFoldersArrow, setActiveFoldersArrow] = useState(false);


  return (
    <div className='navigation-bar'>

    <div className='logo-img'></div>

      <div className='navigation-bar-item' >


        <div onClick={(() => setContentView('home'))}>
        <a href="https://github.com/Chase-Riddick/GTD-Notebook" target="_blank">
        <i className="fa-brands fa-github fa-lg"></i>
        </a>
          </div>
      </div>

      <div className='navigation-bar-item' >
      <a href="https://www.linkedin.com/in/chase-riddick-a14596237/" target="_blank">
        <div onClick={(() => setContentView('home'))}>
        <i className="fa-brands fa-linkedin fa-lg"></i>
          </div>
        </a>
      </div>


      <div className='navigation-bar-item' >
      <LogoutModal user={sessionUser} />
      </div>

      <div className='navigation-bar-item' >
        <div onClick={(() => setContentView('home'))}>
        <i className="fa-solid fa-house"></i>
      </div>
      </div>

      <div className='navigation-bar-item' >
        <i className="fa-solid fa-book"
        onClick={(() => {setContentView('foldersList')})}></i>
      </div>

      <div className='navigation-bar-item' >
        <div onClick={(() => {
          setShowFolderLinks(!showFolderLinks)
          })}>{!showFolderLinks &&
            <i className="fa-solid fa-angle-right"></i>}
            {showFolderLinks &&
            <i className="fa-solid fa-angle-down"></i>}
            </div>
      </div>

      {showFolderLinks &&
            <FolderList />}



    </div>
  );
}

export default Navigation;
