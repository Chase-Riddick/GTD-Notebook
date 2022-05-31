import { NavLink } from 'react-router-dom';
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
        <p>
            Hello World!
        </p>
      {folders.map(({ id, title }) => (
        <li key={`navigation-folder-item-${id}`}><button onClick={(() => setContentView(`folder-${id}`))}>{title}</button></li>
      ))}
    </div>
  );
};

export default FolderList;