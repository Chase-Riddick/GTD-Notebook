import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ModifyFolder from '../ModifyFolder';
import '../../css/Folder.css'
// import LoginForm from './LoginForm';

function ModifyFoldersModal({folder}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <button
        className='edit-folder-button header-button'
        onClick={() => setShowModal(true)}
        >Edit</button>

        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
            <ModifyFolder folder={folder} setShowModal={setShowModal}/>
            </Modal>
        )}
    </>
  );
}

export default ModifyFoldersModal;