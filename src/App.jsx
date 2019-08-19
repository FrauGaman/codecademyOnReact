import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import Nav from './components/Front/Nav/Nav';
import Filter from './components/Front/Filter/Filter';
import Footer from './components/Front/Footer/Footer';
import Preloader from './components/Preloader/Preloader';

import { PATH } from './scripts/const';
import getData from './scripts/getData';

import './style/basic.sass';
import LogInInnerModal from './components/Authorization/LogInModal/LoginInnerModal';
import ModalWindow from './components/ModalWindow';
import SignUpInnerModal from './components/Authorization/SignUpModal/SignUpInnerModal';
import ConfirmModal from './components/Authorization/SignUpModal/ConfirmModal';
import userIsLogIn from './actions/userStatus';

function App({ children, userStatus, userIsLogIn }) {
  const [menuState, setMenu] = useState([]);
  const [themeState, setTheme] = useState([]);
  const [languageState, setLanguage] = useState([]);
  const [footerNavState, setFooterNav] = useState([]);
  const [resourcesState, setResourses] = useState([]);
  const [initialize, setInitialize] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [formError, setFormError] = useState({});

  const addDataMenu = (res) => {
    setMenu(res);
  };
  const addDataTheme = (res) => {
    setTheme(res);
  };
  const addDataLanguage = (res) => {
    setLanguage(res);
  };
  const addDataFooterNav = (res) => {
    setFooterNav(res);
  };
  const addDataResourses = (res) => {
    setResourses(res);
  };

  const closeLoginForm = () => {
    setShowLogIn && setShowLogIn(false);
    setFormError({});
  };

  const closeSignupForm = () => {
    setShowSignUp && setShowSignUp(false);
    setFormError({});
  };

  useEffect(() => {
    const menu = getData(PATH.ITEMS, addDataMenu);
    const theme = getData(PATH.THEME, addDataTheme);
    const language = getData(PATH.LANGUAGE, addDataLanguage);
    const footerNav = getData(PATH.FOOTERSITENAVIGATION, addDataFooterNav);
    const resourses = getData(PATH.SITENAVIGATION, addDataResourses);
    Promise.all([menu, theme, language, footerNav, resourses]).then(() => setInitialize(true));
  }, []);

  useEffect(() => {
    userIsLogIn(localStorage.getItem('accessToken'));
  }, []);

  return (
    <React.Fragment>
      {
        initialize ?
          <div>
            {
              showLogIn &&
                <ModalWindow title={'Log in'} show={showLogIn} onHide={() => closeLoginForm()}>
                  <LogInInnerModal
                    onHide={() => closeLoginForm()}
                    setShowLogIn={setShowLogIn}
                    setShowSignUp={setShowSignUp}
                    setFormError={setFormError}
                    formError={formError}
                  />
                </ModalWindow>
            }
            <ModalWindow show={confirmAddress} title="Сonfirmation required" onHide={() => setConfirmAddress(false)}>
              <ConfirmModal />
            </ModalWindow>
            {
              showSignUp &&
              <ModalWindow title={'Sign up'} show={showSignUp} onHide={() => closeSignupForm()}>
                <SignUpInnerModal
                  onHide={() => closeSignupForm()}
                  setShowLogIn={setShowLogIn}
                  setShowSignUp={setShowSignUp}
                  confirmAddress={confirmAddress}
                  setConfirmAddress={setConfirmAddress}
                  setFormError={setFormError}
                  formError={formError}
                />
              </ModalWindow>
            }
            <Nav menu={menuState} setShowLogIn={setShowLogIn} setShowSignUp={setShowSignUp} userStatus={userStatus} userIsLogIn={userIsLogIn} />
            <Filter theme={themeState} language={languageState} />
            {children}
            <section className="footer">
              <Footer
                footerNav={footerNavState}
                theme={themeState}
                language={languageState}
                resources={resourcesState}
              />
            </section>
          </div>
          :
          <Preloader />
      }
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  userStatus: state.userStatusTasks,
});

const mapStateToDispatch = dispatch => ({
  userIsLogIn: (token) => {
    dispatch(userIsLogIn(token));
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(App);
