// import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import Folder from '../Folder';

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
                <Switch>
                    <Route path="/folder/:folderName" exact>
                        <Folder  />
                    </Route>
                </Switch>
            </main>
        </div>
    )
}