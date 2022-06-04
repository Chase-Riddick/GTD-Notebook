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
        setTitle('');
        setContent('');
    };

    const handleChange = value => {
        setContent(value);
    }
    console.log("activeFolderId>>>", activeFolderId)
    return (
        <section className="">

            <form onSubmit={handleSubmit} className="compose-note-form">
               <input
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder='Title'
                    name='title'
                    className='title-input cell'
                    maxLength={30}
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
                {title && content &&
                        <button type='submit' className='header-button'>Submit</button>
                        }
                <button type="button" className='header-button'>Cancel</button>

            </form>

        </section>

    )
};