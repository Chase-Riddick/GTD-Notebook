import '../../css/SideView.css'
import '../../css/ComposeNote.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useContentView } from '../../context/ContentViewContext';
// import TextEditor from '../TextEditor';
import { addNoteToNotebook, editNote } from '../../store/notes';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { removeNote } from '../../store/notes';


export default function ModifyNote() {
    const dispatch = useDispatch();
    const { noteView, activeNote, folderView, contentView, activeFolderId, setNoteView, setActiveNote } = useContentView();
    console.log('noteView15', noteView);
    const sessionUser = useSelector(state => state.session.user);
    const [title, setTitle] = useState(activeNote? activeNote.title : "");
    const [content, setContent] = useState(activeNote? activeNote.content : "");
    const [userId, setUserId] = useState(sessionUser.id);
    const [allowEdit, setAllowEdit] = useState(false);

console.log("This changed.")
    useEffect(() => {
        setTitle(activeNote?.title);
        setContent(activeNote?.content);
        setUserId(sessionUser.id);
    }, [ contentView, noteView, folderView ]);

    useEffect(() => {
        setAllowEdit(false);
    }, [noteView])

    const handleSubmit = (e) => {
        e.preventDefault();

        const folderId = activeFolderId;

        let noteId = noteView.split('-')[1]

        const payload = {
            userId,
            folderId,
            title,
            content,
        }
        let createdNote;
        createdNote = dispatch(editNote(payload, noteId ));
        setAllowEdit(false);
    };

    const handleChange = value => {
        setContent(value );
    }

    function deleteNote () {
        let noteId = noteView.split('-')[1];
        const folderId = activeFolderId;
        let res = dispatch(removeNote(noteId, folderId))
        setNoteView('');
        setActiveNote({});
    }

    // const removeNote = () => {
    //     let noteId = noteView.split('-')[1];
    //     dispatch(removeNote(noteId));
    // }

    return (
        <section className="">


            <div className='note-view-header'>
                <div className='note-header-buttons'>
                    <button
                    className='edit-note-button header-button'
                    onClick={() => setAllowEdit(!allowEdit)}
                    >Edit</button>
                    <button
                    onClick={() => {deleteNote()}}
                    className='delete-note-button header-button'
                    >Delete</button>
                </div>
            </div>


            <form onSubmit={handleSubmit} className="compose-note-form" hidden={!folderView}>
               <input
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder='Title'
                    name='title'
                    className='title-input cell'
                    maxLength={30}
                    readOnly={!allowEdit}
                    />
                    <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={handleChange}
                    placeholder={"What's on you mind?..."}
                    className="text-editor"
                    readOnly={!allowEdit}
                    // modules={modules}
                    // formats={formats}
                />
                {allowEdit &&
                    <div>
                        {title && content &&
                        <button type='submit' className='header-button' onClick={handleSubmit}>Submit</button>
                        }
                        <button type="button" className='header-button'>Cancel</button>
                    </div>
                }


            </form>

        </section>

    )
};