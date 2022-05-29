import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFolders } from '../../store/folders';
import { useEffect } from 'react';

const FolderList = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const folders = useSelector(state=>state.folderState.list);

  const userId = sessionUser.id;
  console.log(folders);

  useEffect(() => {
      dispatch(getFolders(userId ));
  }, [dispatch]);

  return (
    <div>
        <p>
            Hello World!
        </p>
      {folders.map(({ id, title }) => (
        <li key={id}><NavLink to={`/folder/${title}`}>{title}</NavLink></li>
      ))}
    </div>
  );
};

export default FolderList;