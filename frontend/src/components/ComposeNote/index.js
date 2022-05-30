import '../../css/ComposeNote.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Thunk Action Creators

export default function ComposeNote() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // const updateTitle = (e) => setTitle(e.target.value);
    // const updateContent = (e) => setContent(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            title,
            content
        }

        // // let createdNote = dispatch(addNote(payload));
        // if (createdNote) {
        //     reset();
        //   }
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

            <h2>Compose Note</h2>

            <form onSubmit={handleSubmit} className="compose-note-form">

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