// import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import Folder from '../Folder';
import Content from '../Content';
import ContentViewProvider from '../../context/ContentViewContext';
import { ModalProvider } from '../../context/Modal';


import '../../css/Main.css';


export default function Main ({isLoaded}) {
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) return (
        <Redirect to="/login" />
      );
    // <Switch>
    //     <Route path="/folder/:folderName" exact>
    //         <Folder  />
    //     </Route>
    // </Switch>

    return (
        <div className='page-view'>
            <ModalProvider>
            <ContentViewProvider>
                <Navigation isLoaded={isLoaded} className="navigation-container"/>
                <main className='main-view'>
                <Content />
                </main>
            </ContentViewProvider>
            </ModalProvider>
        </div>
    )
}
