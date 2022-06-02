import { useDispatch, useSelector } from 'react-redux';
import { getFolders } from '../../store/folders';
import { useEffect } from 'react';
import { useContentView } from '../../context/ContentViewContext';
import '../../css/Folder.css'
import ModifyFoldersModal from '../ModifyFoldersModal.js';
import AddFolderModal from '../AddFolderModal';
import { removeFolder } from '../../store/folders';
import TextEditor from '../TextEditor';

const Folders = () => {
  const { setContentView } = useContentView();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const folders = useSelector(state=>Object.values(state.folderState));

  const userId = sessionUser.id;

  useEffect(() => {
    dispatch(getFolders(userId ));
}, [dispatch]);

function deleteFolder (folderId) {
  let res = dispatch(removeFolder(folderId))
}


    return (
      <div className='folders-table'>

          <div className='folders-page-header'>
            <div className='folders-page-title'><h2> Folders </h2></div>

            <div className='folders-header-buttons'><AddFolderModal /></div>
          </div>


          <div>
          <table>
              {folders.map((folder) => (
                  <div className='folder-card'>


                      <div className='folder-card-heading'>
                      <div className='folder-card-title'>{folder.title}</div>
                      <div className='folder-card-buttons'>
                      <ModifyFoldersModal folder={folder}/>


                      <button
                      onClick={() => deleteFolder(folder.id)}
                      className='delete-folder-button header-button'
                      >Delete</button>
                      </div>
                      </div>

                      <ul className='folder-card-note-list'>
                          {folder.Notes && folder.Notes.map(({ title, id}) => (
                          <li className='note-title' key={`note-listed-${id}`}>{title}</li>
                          ))}
                      </ul>
                  </div>
              ))}
            </table>
          </div>


      </div>

    );
  };

  export default Folders;