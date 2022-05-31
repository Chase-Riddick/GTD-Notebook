import '../../css/Note.css';
import { useContentView } from '../../context/ContentViewContext';
import { useEffect, useState } from 'react';
import DisplayNoteStandard from '../DisplayNoteStandard';
import EditNote from '../EditNote';

export default function DisplayNote () {
    const { activeNote } = useContentView();
    const [ hideEditForm, setHideEditForm ] = useState(true);
    const [ displayNote, setDisplayNote ] = useState(true);


    function toggleEdit () {
        setHideEditForm(!hideEditForm);
        setDisplayNote(!displayNote);
    }

    return (
        <div className='note-view'>
            <div className='note-view-header'>
                <div className='note-header-buttons'>
                    <button
                    className='edit-note-button header-button'
                    onClick={toggleEdit}
                    >Edit</button>
                    <button
                    className='delete-note-button header-button'
                    >Delete</button>
                </div>
            </div>
            { displayNote &&
            <DisplayNoteStandard note={activeNote}/>
            }
            { !hideEditForm &&
            <EditNote note={activeNote}/>
            }


        </div>
    )
};