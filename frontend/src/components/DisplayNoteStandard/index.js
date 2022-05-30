// import '../../css/Note.css';
// import { useContentView } from '../../context/ContentViewContext';
// import { useState } from 'react';

export default function DisplayNoteStandard ({note}) {
    // const { activeNote } = useContentView();
    // const { hideEditForm, setHideEditForm } = useState('true');
    // const { displayNote, setDisplayNote } = useState('true');

    // function toggleEdit () {
    //     setHideEditForm(!hideEditForm);
    //     setDisplayNote(!displayNote);
    // }

    return (
            <div className='note-display'>
                <p>{note.title}</p>
                <p>{note.content}</p>
            </div>
    )
};