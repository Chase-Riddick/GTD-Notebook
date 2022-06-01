import '../../css/ComposeNote.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useContentView } from '../../context/ContentViewContext';
import { editNote } from '../../store/notes';
// import Thunk Action Creators

export default function EditNote ({note, setHideEditForm, setDisplayNote}) {
    const { folderView } =  useContentView();
    const dispatch = useDispatch();

    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const sessionUser = useSelector(state => state.session.user);



    // const updateTitle = (e) => setTitle(e.target.value);
    // const updateContent = (e) => setContent(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const userId = sessionUser.id;
        const folderId = Number(folderView);
        const id = note.id;

        const payload = {
            userId,
            folderId,
            title,
            content,
        }

        let editedNote = dispatch(editNote(payload, id));
        if (editedNote) {
            reset();
            setHideEditForm(true)
            setDisplayNote(true)
          }
      };

      const reset = () => {
        setTitle('');
        setContent('');
      };

      const handleCancelClick = (e) => {
        e.preventDefault();
        reset();
      };


    return (
        <section className="">


            <form onSubmit={handleSubmit} className="compose-note-form" hidden={!folderView}>

                <input
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder='Title'
                    name='title'
                    className='cell'
                 />

                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    name='body'
                    placeholder='Add your entry'
                    rows='10'
                    cols='40'
                    className='cell'
                ></textarea>

                <button type='submit'>Submit</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>

            </form>

        </section>

    )
}