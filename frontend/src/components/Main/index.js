// import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import Folder from '../Folder';
import Content from '../Content';
import ContentViewProvider from '../../context/ContentViewContext';
import SideView from '../SideView';

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
            <ContentViewProvider>
                <Navigation isLoaded={isLoaded} className="navigation-container"/>
                <main className='main-view'>
                    <h2>Hello World! This is from Main.</h2>
                <Content />
                </main>
                <div className='right-bar'>
                    <SideView />
                </div>
            </ContentViewProvider>
        </div>
    )
}
