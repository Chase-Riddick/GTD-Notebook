import '../../css/SideView.css'
import '../../css/ComposeNote.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useContentView } from '../../context/ContentViewContext';
import { addNoteToNotebook, editNote } from '../../store/notes';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


export default function ComposeNote() {
    const dispatch = useDispatch();
    const { activeFolderId, folderView } = useContentView();
    const sessionUser = useSelector(state => state.session.user);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState(sessionUser.id);
    // useEffect(() => {
    //     setTitle(activeNote?.title);
    //     setContent(activeNote?.content);
    //     setUserId(sessionUser.id);
    // }, [ contentView, noteView, folderView ]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const folderId = activeFolderId;
        console.log(">>LINE 32", folderId )

        const payload = {
            userId,
            folderId,
            title,
            content,
        }

        let createdNote;
        createdNote = dispatch(addNoteToNotebook(payload));
    };

    const handleChange = value => {
        setContent(value);
    }
    console.log("This is Compose")
    return (
        <section className="">

            <h2>Compose Note for {folderView}</h2>

            <form onSubmit={handleSubmit} className="compose-note-form" hidden={!folderView}>
               <input
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder='Title'
                    name='title'
                    className='cell'
                    />
                    <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={handleChange}
                    placeholder={"What's on you mind?..."}
                    className="text-editor"
                    // modules={modules}
                    // formats={formats}
                />
                <button type='submit'>Submit</button>
                <button type="button">Cancel</button>

            </form>

        </section>

    )
};