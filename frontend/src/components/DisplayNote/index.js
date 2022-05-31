import '../../css/Note.css';
import { useContentView } from '../../context/ContentViewContext';
import { useEffect, useState } from 'react';
import DisplayNoteStandard from '../DisplayNoteStandard';
import EditNote from '../EditNote';
import { removeNote } from '../../store/notes';
import { useDispatch } from 'react-redux';

export default function DisplayNote () {
    const dispatch = useDispatch();
    const { activeNote } = useContentView();
    const [ hideEditForm, setHideEditForm ] = useState(true);
    const [ displayNote, setDisplayNote ] = useState(true);


    function toggleEdit () {
        setHideEditForm(!hideEditForm);
        setDisplayNote(!displayNote);
    }

    function deleteNote () {
        console.log("Did this work?")
        let res = dispatch(removeNote(activeNote.id))
        if (res) console.log("It worked!")
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
                    onClick={(() => deleteNote())}
                    className='delete-note-button header-button'
                    >Delete</button>
                </div>
            </div>
            { displayNote &&
            <DisplayNoteStandard note={activeNote}/>
            }
            { !hideEditForm &&
            <EditNote setHideEditForm={setHideEditForm} setDisplayNote={setDisplayNote} note={activeNote}/>
            }


        </div>
    )
};