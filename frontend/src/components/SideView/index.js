import '../../css/SideView.css'
import '../../css/ComposeNote.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useContentView } from '../../context/ContentViewContext';
import ComposeNote from '../ComposeNote';
import DisplayNote from '../DisplayNote';
import TextEditor from '../TextEditor';
import { addNoteToNotebook, editNote } from '../../store/notes';


export default function SideView () {
    const dispatch = useDispatch();
    const { noteView, activeNote, folderView, contentView, activeFolderId } = useContentView();
    const sessionUser = useSelector(state => state.session.user);
    console.log(">>LINE 26", activeFolderId )
    const [title, setTitle] = useState(activeNote?.title);
    const [content, setContent] = useState(activeNote?.content);
    const [userId, setUserId] = useState(sessionUser.id);
    const [isNew, setIsNew] = useState(activeNote?false:true);

    useEffect(() => {
        setTitle(activeNote?.title);
        setContent(activeNote?.content);
        setUserId(sessionUser.id);
    }, [ activeNote, contentView, noteView, folderView ]);


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
        if (isNew) {
            console.log("A*>*>*>*>*>*>", payload);
            createdNote = dispatch(addNoteToNotebook(payload));
        } else {
            console.log("B*>*>*>*>*>*>", payload);
            createdNote = dispatch(editNote(payload, activeNote.id));
        }
    };

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

                    {noteView && noteView === 'create' &&
                    <TextEditor content={content} setContent={setContent}/>
                    }
                    {noteView && noteView === 'note' &&
                    <TextEditor content={content} setContent={setContent} />
                    }
                <button type='submit'>Submit</button>
                <button type="button">Cancel</button>

            </form>

        </section>

    )
};