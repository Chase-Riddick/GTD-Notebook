import '../../css/Note.css';
import '../../css/Folder.css';

import { useContentView } from '../../context/ContentViewContext';

export default function DisplayNotes ({notes}) {
    const { setNoteView, setActiveNote } = useContentView();

    return (
        <div>
            {notes.map((note) => (
                <div className='note-card'
                onClick={(() => {
                setNoteView(`note-${note.id}`);
                setActiveNote(note);
                })}>
                <div className='note-card-header-div'>
                    <div className='note-card-title-div'>{note.title}</div>
                </div>
                <div className='note-card-content-div'>{note.content.replace(/(<([^>]+)>)/gi, "")}</div>
                </div>
            ))}
          </div>

    )
};