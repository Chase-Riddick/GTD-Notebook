import { Route, Switch, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFolders } from '../../store/folderReducer';
import { useEffect } from 'react';

const FolderList = () => {
  const dispatch = useDispatch();
  const folders = useSelector(state=>state.folderState.list);
  console.log(folders);

  useEffect(() => {
      dispatch(getFolders());
  }, [dispatch]);

  return (
    <div>
        <p>
            Hello World!
        </p>
      {/* {folders.map(({ id, title }) => (
        <li key={id}><NavLink to={`/article/${id}`}>{title}</NavLink></li>
      ))} */}
    </div>
  );
};

export default FolderList;