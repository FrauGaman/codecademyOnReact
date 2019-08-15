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
import SignUpInnerModal from './components/Authorization/SignUpModal/SignUpInnerModal';

function App({ children }) {
  const [menuState, setMenu] = useState([]);
  const [themeState, setTheme] = useState([]);
  const [languageState, setLanguage] = useState([]);
  const [footerNavState, setFooterNav] = useState([]);
  const [resourcesState, setResourses] = useState([]);
  const [initialize, setInitialize] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
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
                    setShowLogIn={setShowLogIn}
                    setShowSignIn={setShowSignUp}
                  />
                </ModalWindow>
            }
            {
              showSignUp &&
              <ModalWindow title={'Sign up'} show={showSignUp} onHide={() => setShowSignUp(false)}>
                <SignUpInnerModal
                  onHide={() => setShowSignUp(false)}
                  setShowLogIn={setShowLogIn}
                  setShowSignUp={setShowSignUp}
                />
              </ModalWindow>
            }
            <Nav menu={menuState} setShowLogIn={setShowLogIn} setShowSignUp={setShowSignUp} />
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
