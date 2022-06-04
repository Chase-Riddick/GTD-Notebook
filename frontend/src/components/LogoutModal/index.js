import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Logout from '../Logout';
import '../../css/Navigation.css'
// import LoginForm from './LoginForm';

export default function LogoutModal({user}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <i className="fa-solid fa-user" onClick={() => setShowModal(true)}></i>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <Logout user={user} setShowModal={setShowModal}/>
            </Modal>
        )}
    </>
  );
}
