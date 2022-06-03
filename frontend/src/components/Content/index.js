// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getNotes } from '../../store/notes';
// import { useEffect } from 'react';
import { useContentView } from '../../context/ContentViewContext';
import { useSelector } from 'react-redux';
import Folder from '../Folder';
import Folders from '../Folders';
import Home from '../Home';
import SideView from '../SideView';
import '../../css/Main.css'

const Content = () => {
    const { contentView } = useContentView();
    const folders = useSelector(state=>state.folderState);
    console.log("Folders>>>", folders )
    let folder;
    // const dispatch = useDispatch();
    // const notes = useSelector(state=>state.noteState.list);
    // const sessionUser = useSelector(state => state.session.user);
    // const userId = sessionUser.id;

    const contentType = () => {
        let contentViewCopy = contentView;
        if (contentViewCopy.includes('-')) return contentViewCopy.split('-')[0];
        else return contentView;
    }

    const getResourceId = () => {
        let contentViewCopy = contentView;
        if (contentViewCopy.includes('-')) return contentViewCopy.split('-')[1];
        else return null;
    }

    const getFolder = () => {
      let folderId = getResourceId();
      if (folderId) folder = folders[folderId];
      console.log("Folder>>>", folder );
      return folder;
  }



  return (
    <div className='content-view'>
    <div className='left-view'>
        {
        {
          'folder': <Folder folder={getFolder()}/>,
          'foldersList': <Folders />,
          'home': <Home />
        }[contentType()]
      }
      </div>
      <div className='right-view'>
      <SideView />
      </div>
    </div>
  );
};

export default Content;