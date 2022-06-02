// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getNotes } from '../../store/notes';
// import { useEffect } from 'react';
import { useContentView } from '../../context/ContentViewContext';
import { useSelector } from 'react-redux';
import Folder from '../Folder';
import Folders from '../Folders';
import Home from '../Home';

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
      console.log("FolderId>>>", folderId);
      console.log("Folder>>>", folders[folderId]);
      if (folderId) folder = folders.folderId;
      // console.log("Folder>>>", folder );
      return folder;
  }



  return (
    <>
        {

        {
          'folder': <Folder folder={getFolder()}/>,
          'foldersList': <Folders />,
          'home': <Home />
        }[contentType()]
      }
    </>
  );
};

export default Content;