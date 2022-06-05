import '../../css/Navigation.css';

import { useDispatch, useSelector } from 'react-redux';
import { getFolders } from '../../store/folders';
import { useEffect } from 'react';
import { useContentView } from '../../context/ContentViewContext';

const FolderList = () => {
  const { setContentView } = useContentView();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const folders = useSelector(state=>Object.values(state.folderState));

  const userId = sessionUser.id;

  useEffect(() => {
      dispatch(getFolders(userId ));
  }, [dispatch]);

  return (
    <div className='drop-down-item'>
      {folders.map(({ id, title }) => (
        <div
        className='nav-link-box'
        key={`navigation-folder-item-${id}`}
        >
        <div className='nav-list-icon-container'>
        <i id="nav-list-icon" className="fa-solid fa-book folder-view-icon"></i>
        </div>

        <div className='folderLink'
        onClick={(() => setContentView(`folder-${id}`))}
        >{title}</div>

        </div>
        // <li onClick={(() => setContentView(`folder-${id}`))} className='drop-down-item' key={`navigation-folder-item-${id}`}><div className='folderLink'>{title}</div></li>
      ))}
    </div>
  );
};

export default FolderList;