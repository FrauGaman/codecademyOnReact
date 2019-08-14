import React, { useState, useEffect } from 'react';
import Nav from './components/Front/Nav/Nav';
import Filter from './components/Front/Filter/Filter';
import Footer from './components/Front/Footer/Footer';
import Preloader from './components/Preloader/Preloader';

import { PATH } from './scripts/const';
import getData from './scripts/getData';

import './style/basic.sass';
import LogInInnerModal from './components/Authorization/LogInModal/LoginInnerModal';
import ModalWindow from './components/ModalWindow';
import SignInInnerModal from './components/Authorization/SignInModal/SignInInner';

function App({ children }) {
  const [menuState, setMenu] = useState([]);
  const [themeState, setTheme] = useState([]);
  const [languageState, setLanguage] = useState([]);
  const [footerNavState, setFooterNav] = useState([]);
  const [resourcesState, setResourses] = useState([]);
  const [initialize, setInitialize] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

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

  useEffect(() => {
    const menu = getData(PATH.ITEMS, addDataMenu);
    const theme = getData(PATH.THEME, addDataTheme);
    const language = getData(PATH.LANGUAGE, addDataLanguage);
    const footerNav = getData(PATH.FOOTERSITENAVIGATION, addDataFooterNav);
    const resourses = getData(PATH.SITENAVIGATION, addDataResourses);
    Promise.all([menu, theme, language, footerNav, resourses]).then(() => setInitialize(true));
  }, []);

  const submitLogin = value => {
    console.log(value);
  };

  const submitSignin = value => {
    console.log(value)
  };

  return (
    <React.Fragment>
      {
        initialize ?
          <div>
            {
              showLogIn &&
                <ModalWindow title={'Log in'} show={showLogIn} onHide={() => setShowLogIn(false)}>
                  <LogInInnerModal
                    onHide={() => setShowLogIn(false)}
                    submitLogin={submitLogin}
                    setShowLogIn={setShowLogIn}
                    setShowSignIn={setShowSignIn}
                    isModal
                  />
                </ModalWindow>
            }
            {
              showSignIn &&
              <ModalWindow title={'Sign in'} show={showSignIn} onHide={() => setShowSignIn(false)}>
                <SignInInnerModal
                  onHide={() => setShowSignIn(false)}
                  submitSignin={submitSignin}
                  setShowLogIn={setShowLogIn}
                  setShowSignIn={setShowSignIn}
                  isModal
                />
              </ModalWindow>
            }
            <Nav menu={menuState} setShowLogIn={setShowLogIn} setShowSignIn={setShowSignIn} />
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

export default App;
