import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Modal } from '../../context/Modal';
import '../../css/Folder.css'
// import LoginForm from './LoginForm';

export default function Logout({user, setShowModal}) {
    const dispatch = useDispatch();

    const logout = (e) => {
        dispatch(sessionActions.logout());
      };


  return (
    <>
    <button onClick={() => logout()}>
        Logout
      </button>
    </>
  );
}