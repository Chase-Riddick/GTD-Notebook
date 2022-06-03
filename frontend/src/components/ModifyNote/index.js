import '../../css/SideView.css'
import '../../css/ComposeNote.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useContentView } from '../../context/ContentViewContext';
// import TextEditor from '../TextEditor';
import { addNoteToNotebook, editNote } from '../../store/notes';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


export default function ModifyNote() {
    const dispatch = useDispatch();
    const { noteView, activeNote, folderView, contentView, activeFolderId } = useContentView();
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


    const handleSubmit = (e) => {
        e.preventDefault();

        const folderId = activeFolderId;
        console.log(">>LINE 32", folderId )

        let noteId = noteView.split('-')[1]

        const payload = {
            userId,
            folderId,
            title,
            content,
        }
        console.log(">>LINE45", activeNote);
        let createdNote;
        createdNote = dispatch(editNote(payload, noteId ));

    };

    const handleChange = value => {
        setContent(value );
    }
    console.log("This is Modify")

    return (
        <section className="">


            <div className='note-view-header'>
                <div className='note-header-buttons'>
                    <button
                    className='edit-note-button header-button'
                    onClick={() => setAllowEdit(!allowEdit)}
                    >Edit</button>
                    <button
                    className='delete-note-button header-button'
                    >Delete</button>
                </div>
            </div>

            <h2>Compose Note for {folderView}</h2>

            <form onSubmit={handleSubmit} className="compose-note-form" hidden={!folderView}>
               <input
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder='Title'
                    name='title'
                    className='cell'
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
                        <button type='submit' onClick={handleSubmit}>Submit</button>
                        <button type="button">Cancel</button>
                    </div>
                }


            </form>

        </section>

    )
};