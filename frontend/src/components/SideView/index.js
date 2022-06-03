import '../../css/SideView.css'
import '../../css/ComposeNote.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useContentView } from '../../context/ContentViewContext';
import ModifyNote from '../ModifyNote';
import { addNoteToNotebook, editNote } from '../../store/notes';
import ComposeNote from '../ComposeNote';


export default function SideView () {
    const { noteView, activeNote } = useContentView();
    console.log(activeNote);
    let noteMode = noteView;
    console.log()
    if (noteView.includes('note')) noteMode = "note";

    return (
        <div className="note-view">
            {
                {
                'note': < ModifyNote />,
                'create': <ComposeNote  />,
                }[noteMode]
            }
        </div>
    )
};