import '../../css/Navigation.css';

import { useDispatch, useSelector } from 'react-redux';
import { getFolders } from '../../store/folders';
import { useEffect } from 'react';
import { useContentView } from '../../context/ContentViewContext';

const FolderList = () => {
  const { setContentView } = useContentView();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const folders = useSelector(state=>state.folderState.list);

  const userId = sessionUser.id;

  useEffect(() => {
      dispatch(getFolders(userId ));
  }, [dispatch]);

  return (
    <div>
      {folders.map(({ id, title }) => (

        <li onClick={(() => setContentView(`folder-${id}`))} className='navigation-bar-item' key={`navigation-folder-item-${id}`}>{title}</li>
      ))}
    </div>
  );
};

export default FolderList;