import '../../css/Note.css';
import '../../css/Folder.css';

import { useDispatch, useSelector } from 'react-redux';
import { getNotesByNotebook } from '../../store/notes';
import { useEffect } from 'react';
import { useContentView } from '../../context/ContentViewContext';
import SideView from '../SideView';
import DisplayNotes from '../DisplayNotes';

const Folder = ({folder}) => {
    const { contentView, setNoteView, setActiveNote, noteView } = useContentView();
    const dispatch = useDispatch();
    const notes = useSelector(state=>Object.values(state.noteState));
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;

    useEffect(() => {
        dispatch(getNotesByNotebook(folder.id));
    }, [dispatch, contentView]);

    useEffect(() => {
      setActiveNote();
  }, [noteView]);


  return (
    <>

        <div className='folder-note-list'>
          <div className='folder-note-list-header'>
            <div className='list-headers'>
              <h3>{`${folder.title}`}</h3>
            </div>
            <div className='list-header-buttons'>
            <i class="fa-solid fa-plus fa-lg create-note-button"
            onClick={(() => {
              setNoteView('create');
              setActiveNote(null);
            })}
            ></i>
            </div>
          </div>

          <DisplayNotes notes={notes}/>
        </div>

        <div className='right-bar'>
              <SideView />
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