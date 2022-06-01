import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddFolder from '../AddFolder';
import '../../css/Folder.css'
// import LoginForm from './LoginForm';

function AddFolderModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button onClick={() => setShowModal(true)} className='header-button add-button'><span class="material-symbols-outlined icon">add</span></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddFolder setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default AddFolderModal;