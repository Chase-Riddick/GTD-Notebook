import '../../css/Note.css';
import '../../css/Folder.css';

import { useDispatch, useSelector } from 'react-redux';
import { getNotesByNotebook } from '../../store/notes';
import { useEffect, useState } from 'react';
import { useContentView } from '../../context/ContentViewContext';
import SideView from '../SideView';
import DisplayNotes from '../DisplayNotes';
import '../../css/Folder.css'
import '../../css/Note.css';
import ModifyFoldersModal from '../ModifyFoldersModal.js';
import { removeFolder } from '../../store/folders';
import { remove_folder } from '../../store/notes';

const Folder = ({folder}) => {
    const { contentView, setNoteView, setActiveNote, noteView, folderView, setActiveFolderId } = useContentView();
    const dispatch = useDispatch();
    const notes = useSelector(state=>Object.values(state.noteState[folder.id] || {}));
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;
    console.log("this is>>>", folderView);
    const [isOpen, setIsOpen ] = useState(folderView && folderView > 0 ? false : true);
    const [isModify, setisModify ] = useState(true);

    useEffect(() => {
        dispatch(getNotesByNotebook(folder.id));
    }, [dispatch, contentView]);

    useEffect(() => {
      setActiveNote();
  }, [noteView]);


  const deleteFolder = async (folderId) => {
    console.log(">>>Dispatch Thunk Hit")
    let res = await dispatch(remove_folder(folderId));
    if (res) dispatch(removeFolder(folderId));
  }
  console.log(">>>>>FolderView", folderView);
console.log(">>>>>NOTES", notes, folder.id);
  return (
    <>

        <div className='folder-note-list'>
          <div className='folder-note-list-header'>
            <div
            className='list-headers'>
              <div className='list-headers-left'>
               <div className='open-button-div'>
            {!isOpen &&
            <i
            onClick={() => setIsOpen(!isOpen)}
            className="fa-solid fa-angle-right folder-view-icon"></i>}
            {isOpen &&
            <i
            onClick={() => setIsOpen(!isOpen)}
            className="fa-solid fa-angle-down folder-view-icon"></i>}
            </div>
              <div className='icon-title'>
              <i className="fa-solid fa-book folder-view-icon"></i>
              <h3>{`${folder.title}`}</h3>
              </div>
              </div>
              <div className='add-icon-div'>
              <i class="fa-solid fa-circle-plus folder-view-icon"
              onClick={(() => {
                setActiveFolderId(folder.id);
                setNoteView('create');
                setActiveNote(null);
              })}
              ></i>
              </div>
            </div>

            <div className='list-header-buttons'>

            {isOpen &&
            <div className='edit-and-delete'>
            <ModifyFoldersModal folder={folder}/>
            {!folderView &&
            <button
            onClick={() => deleteFolder(folder.id)}
            className='delete-folder-button header-button'
            >Delete</button>}
            </div>}

            </div>

          </div>

          {isOpen &&
          <DisplayNotes notes={notes}/>
          }

          </div>

    </>

  );
};

export default Folder;


// {notes.map((note) => (
//   <div className='note-card'
//   onClick={(() => {
//     setNoteView(`note-${note.id}`);
//     setActiveNote(note);
//     })}>
//     <div className='note-card-header-div'>
//       <div className='note-card-title-div'>{note.title}</div>
//     </div>
//     <div className='note-card-content-div'>{note.content.replace(/(<([^>]+)>)/gi, "")}</div>
//   </div>
// ))}