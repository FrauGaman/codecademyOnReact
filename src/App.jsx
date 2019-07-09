import React from 'react';

import Nav from "./components/nav/Nav"
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";

import theme from "./config/theme";
import language from "./config/language";
import menu from "./config/menu";
import footerNav from "./config/siteNavigation";
import resources from "./config/resourses";

import './style/basic.sass';

const App = ({children}) => (
  <React.Fragment>

   <Nav menu={menu}/>

   <Filter theme={theme.theme} language={language.language} />

   {children}

    <section className="footer">
      <Footer
        footerNav={footerNav.siteNavigation}
        theme={theme.theme}
        language={language.language}
        resources={resources.siteNavigation}/>
    </section>

  </React.Fragment>
);

export default App;