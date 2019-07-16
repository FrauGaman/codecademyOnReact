import React, { useState, useEffect } from 'react';
import Nav from './components/nav/Nav';
import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';

import { PATH } from './scripts/const';
import getData from './scripts/getData';

import './style/basic.sass';

function App({ children }) {
  const [menuState, setMenu] = useState([]);
  const [themeState, setTheme] = useState([]);
  const [languageState, setLanguage] = useState([]);
  const [footerNavState, setFooterNav] = useState([]);
  const [resourcesState, setResourses] = useState([]);

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
    getData(PATH.ITEMS, addDataMenu);
    getData(PATH.THEME, addDataTheme);
    getData(PATH.LANGUAGE, addDataLanguage);
    getData(PATH.FOOTERSITENAVIGATION, addDataFooterNav);
    getData(PATH.SITENAVIGATION, addDataResourses);
  }, []);

  return (
    <React.Fragment>
      <Nav menu={menuState} />
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
    </React.Fragment>
  );
}

export default App;
