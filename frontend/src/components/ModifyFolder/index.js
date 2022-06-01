import '../../css/ComposeNote.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyFolder } from '../../store/folders';
// import Thunk Action Creators

export default function ModifyFolder({setShowModal, folder}) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(folder.title);
    const sessionUser = useSelector(state => state.session.user);



    // const updateTitle = (e) => setTitle(e.target.value);
    // const updateContent = (e) => setContent(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const userId = sessionUser.id;

        const payload = {
            userId,
            title,
        }

        let modifiedFolder = dispatch(modifyFolder(payload, folder.id));
        if (modifiedFolder) {
            setShowModal(false);
            reset();
          }
      };

      const reset = () => {
        setTitle('');
      };

      const handleCancelClick = (e) => {
        e.preventDefault();
        reset();
        setShowModal(false);
      };


    return (
        <section className="">

            <h2>Modify Folder</h2>

            <form onSubmit={handleSubmit} className="create-folder-form" >

                <input
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder='Title'
                    name='title'
                    className='cell'
                 />

                <button type='submit'>Submit</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>

            </form>

        </section>

    )
}