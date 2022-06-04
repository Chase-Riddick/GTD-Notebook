import '../../css/ComposeNote.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFolder } from '../../store/folders';
import '../../css/ComposeNote.css'
// import Thunk Action Creators

export default function AddFolder({setShowModal}) {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
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

        let createdFolder = dispatch(addFolder(payload));
        if (createdFolder) {
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
            <h2 className='modal-heading'>Create Folder</h2>
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
                <button type="button " onClick={handleCancelClick} className='header-button'>Cancel</button>

            </form>

        </div>

    )
}