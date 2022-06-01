import '../../css/ComposeNote.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useContentView } from '../../context/ContentViewContext';
import { addNoteToNotebook, editNote } from '../../store/notes';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import Thunk Action Creators

export default function ComposeNote() {
    const { activeNote} = useContentView();
    const sessionUser = useSelector(state => state.session.user);
    const { folderView } =  useContentView();
    const dispatch = useDispatch();

    const [title, setTitle] = useState();
    const [content, setContent] = useState({ value: null });
    const [userId, setUserId] = useState(sessionUser.id);
    const [isNew, setIsNew] = useState(true);



    const handleChange = value => {
        setContent({ value });
    }

    useEffect(() => {
        if (activeNote) {
            setTitle(activeNote.title);
            setContent(activeNote.content);
            setIsNew(false);
        }
    },[])


    const handleSubmit = (e) => {
        e.preventDefault();

        const folderId = Number(folderView);

        const payload = {
            userId,
            folderId,
            title,
            content,
        }

        let createdNote;

        if (isNew) {
            createdNote = dispatch(addNoteToNotebook(payload));
        } else {
            createdNote = dispatch(editNote(payload, activeNote.id));
        }

        // if (createdNote) {
        //     reset();
        //   }
      };

    //   const reset = () => {
    //     setTitle('');
    //     setContent('');
    //   };

    //   const handleCancelClick = (e) => {
    //     e.preventDefault();
    //     reset();
    //   };


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
                    value={content.value}
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
}