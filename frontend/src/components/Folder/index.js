import '../../css/Note.css';
import '../../css/Folder.css';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNotesByNotebook } from '../../store/notes';
import { useEffect } from 'react';
import { useContentView } from '../../context/ContentViewContext';
import SideView from '../SideView';

const Folder = ({id}) => {
    const { contentView, setNoteView, setActiveNote } = useContentView();
    const dispatch = useDispatch();
    const notes = useSelector(state=>Object.values(state.noteState));
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;

    useEffect(() => {
        dispatch(getNotesByNotebook(id));
    }, [dispatch, contentView]);

  return (
    <>

        <div className='folder-note-list'>
          <div className='folder-note-list-header'>
            <div className='list-headers'>
              <h3>{`Folder ${id} Notes`}</h3>
            </div>
            <div className='list-header-buttons'>
              <button
              className='create-note-button'
              onClick={(() => setNoteView('create'))}
              >Create Note</button>
            </div>
          </div>

          {notes.map((note) => (
            <div className='note-card'
            onClick={(() => {
              setNoteView('note');
              setActiveNote(note);
              })}>
              <div className='note-card-header-div'>
                <div className='note-card-title-div'>{note.title}</div>
              </div>
              <div className='note-card-content-div'>{note.content}</div>
            </div>
          ))}
        </div>

        <div className='right-bar'>
              <SideView />
        </div>

    </>
  );
};

export default Folder;