// import SplashNavigation from "./SplashNavigation"
import '../../css/Splash.css'
import logo from '../../images/logo.png'
import LoginFormPage from '../LoginFormPage'
import SignupFormPage from '../SignupFormPage'
import { useState } from 'react'
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';

export default function SplashPage () {
    const dispatch = useDispatch();
    const [ showLogin, setShowLogin ] = useState(true);

    const loginAsDemoUser = (e) => {
        let credential = "Demo-User";
        let password = "password";
        console.log("This happened.")
        dispatch(sessionActions.login({ credential, password }))
      }

    return (
        <>
            <div className="splash-page">

                <div className="splash-left-view ">
                </div>

                <div className="splash-right-view">
                    <div className='user-access-box'>
                        <div className='user-access-box-top'>
                            <img className='splash-logo' src={logo} alt="Logo" />
                            <h2 className='title'>A worse than mediocre clone of Evernote.</h2>
                        </div>
                        {showLogin &&
                        <LoginFormPage /> }
                        {!showLogin &&
                        <SignupFormPage /> }
                        <div className='user-access-box-bottom'>
                                <button onClick={(() => loginAsDemoUser())}>Demo</button>
                                {showLogin &&
                                <>
                                <p>Don't have an account?</p>
                                <button onClick={(() => setShowLogin(false))}>Sign Up</button>
                                </>
                                }
                                {!showLogin &&
                                <>
                                <p>Have an account?</p>
                                <button onClick={(() => setShowLogin(true))}>Log in</button>
                                </>
                                }

                        </div>
                    </div>
                </div>

            </div>

            <div className="splash-page-footer"></div>

        </>
    )
};