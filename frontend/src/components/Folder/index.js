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

const Folder = ({folder}) => {
    const { contentView, setNoteView, setActiveNote, noteView } = useContentView();
    const dispatch = useDispatch();
    const notes = useSelector(state=>Object.values(state.noteState));
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;
    const [isOpen, setIsOpen ] = useState(true);

    useEffect(() => {
        dispatch(getNotesByNotebook(folder.id));
    }, [dispatch, contentView]);

    useEffect(() => {
      setActiveNote();
  }, [noteView]);

  function deleteFolder (folderId) {
    let res = dispatch(removeFolder(folderId))
  }

console.log(">>>>>NoteView", noteView);
  return (
    <>

        <div className='folder-note-list'>
          <div className='folder-note-list-header'>
            <div
            onClick={() => setIsOpen(!isOpen)}
            className='list-headers'>
              <h3>{`${folder.title}`}</h3>
            </div>

            {/* <button
            onClick={() => setIsOpen(!isOpen)}
            className='delete-folder-button header-button'
            >Show Notes</button> */}

            <div className='list-header-buttons'>
            <ModifyFoldersModal folder={folder}/>
            <button
            onClick={() => deleteFolder(folder.id)}
            className='delete-folder-button header-button'
            >Delete</button>
            <i class="fa-solid fa-plus"
            onClick={(() => {
              setNoteView('create');
              setActiveNote(null);
            })}
            ></i>
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