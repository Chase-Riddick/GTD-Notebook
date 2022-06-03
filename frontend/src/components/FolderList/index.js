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
    <div className='drop-down-items'>
      {folders.map(({ id, title }) => (

        <li onClick={(() => setContentView(`folder-${id}`))} className='drop-down-item' key={`navigation-folder-item-${id}`}><div className='folderLink'>{title}</div></li>
      ))}
    </div>
  );
};

export default FolderList;