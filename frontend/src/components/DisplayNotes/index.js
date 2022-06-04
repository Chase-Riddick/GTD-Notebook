import '../../css/Note.css';
import '../../css/Folder.css';

import { useContentView } from '../../context/ContentViewContext';
// import { useSelector } from 'react-redux';

export default function DisplayNotes ({notes}) {

    const { setNoteView, setActiveNote, setFolderView, setActiveFolderId } = useContentView();



    return (
        <div className='note-card-list'>
            {notes.map((note) => (
                <div className='note-card'
                key={`note-card-${note.id}`}
                onClick={(() => {
                setNoteView(`note-${note.id}`);
                setActiveNote(note);
                setFolderView(note.folderId);
                setActiveFolderId(note.folderId);
                })}>
                <div className='note-card-header-div'>
                    <div className='icon-title'><i class="fa-solid fa-note-sticky note-icon"></i></div>
                    <div className='note-card-title-div'>{note.title}</div>
                </div>
                <div className='note-card-content-div'>{note.content.replace(/(<([^>]+)>)/gi, "")}</div>
                </div>
            ))}
          </div>

    )
};
