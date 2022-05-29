// import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Navigation from '../Navigation';

import '../../css/Main.css';


export default function Main ({isLoaded}) {
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) return (
        <Redirect to="/login" />
      );

    return (
        <div className='page-view'>
            <Navigation isLoaded={isLoaded} className="navigation-container"/>
            <main className='main-view'>
                <h2>Hello World!</h2>
            </main>
        </div>
    )
}