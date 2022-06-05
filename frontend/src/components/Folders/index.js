import { useDispatch, useSelector } from 'react-redux';
import { getFolders } from '../../store/folders';
import { useEffect, useState } from 'react';
import { useContentView } from '../../context/ContentViewContext';
import '../../css/Folder.css'
import '../../css/Note.css';
import ModifyFoldersModal from '../ModifyFoldersModal.js';
import AddFolderModal from '../AddFolderModal';
import { removeFolder } from '../../store/folders';
import SideView from '../SideView';
import DisplayNotes from '../DisplayNotes';
import Folder from '../Folder';

const Folders = () => {
  const { setContentView } = useContentView();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const folders = useSelector(state=>Object.values(state.folderState));
  const [ closedFolders, setClosedFolders ] = useState()

  const userId = sessionUser.id;

  useEffect(() => {
    dispatch(getFolders(userId ));
}, [dispatch]);

function deleteFolder (folderId) {
  let res = dispatch(removeFolder(folderId))
}

// const getResourceId = () => {
//   //Change this to something that allows Foldernumer
//   let contentViewCopy = contentView;
//   if (contentViewCopy.includes('-')) return contentViewCopy.split('-')[1];
//   else return null;
// }

// const getFolder = () => {
// let folderId = getResourceId();
// if (folderId) folder = folders[folderId];
// console.log("Folder>>>", folder );
// return folder;
// }


    return (
      <div className='folders-table'>

          <div className='folders-page-header'>

            <div className='folders-page-title'><h2> Folders </h2></div>

            <div className='folders-header-buttons'><AddFolderModal /></div>
          </div>


          <div>
              {folders.map((folder) => (
                  <div className='folder-card' key={`folder-card-${folder.id}`}>


                       {/* <div className='folder-card-heading'>
                      <div className='folder-card-title'>{folder.title}</div>
                      <div className='folder-card-buttons'>
                      <ModifyFoldersModal folder={folder}/>


                      <button
                      onClick={() => deleteFolder(folder.id)}
                      className='delete-folder-button header-button'
                      >Delete</button>
                      </div>
                      </div> */}

                      <Folder folder={folder}></Folder>
                  </div>
              ))}
          </div>
      </div>
    );
  };

  export default Folders;