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
        <div className="add-folder-modal-card">
        <div className='icon-title'>
        <h2 className='modal-heading'>Edit Folder</h2>
          <i className="fa-solid fa-book folder-view-icon"></i>
          </div>

            <form onSubmit={handleSubmit} className="create-folder-form" >

                <input
                    type='text'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder='Title'
                    name='title'
                    className='cell title-input'
                    maxLength={20}
                 />
                <br></br>
                {title &&
                <button type='submit' className='header-button'>Submit</button>
                    }
                <button type="button" onClick={handleCancelClick} className='header-button'>Cancel</button>

            </form>

        </div>

    )
}