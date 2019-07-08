import React from 'react';

import Logo from "./components/nav/Logo/Logo";
import Navigation from "./components/nav/Navigation/Navigation";
import Additionally from "./components/nav/Additionally/Additionally";
import Auth from "./components/nav/Auth/Auth";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";

import theme from "./config/theme";
import language from "./config/language";
import menu from "./config/menu";
import footerNav from "./config/siteNavigation";
import resources from "./config/resourses";

import './style/basic.sass';
import './style/app.sass';

const App = ({children}) => (
  <React.Fragment>
    <nav>
      <div className="nav-container">
        <div className="navLinks">
          <Logo/>
          <Navigation
            Menu={menu}
            URL={menu.URL}
            linkName={menu.linkName}
          />
        </div>
        <div className="usersActions">
          <Additionally/>
          <Auth/>
        </div>
      </div>
    </nav>

    <section className="filterSection">
      <Filter theme={theme.theme} language={language.language}
      />
    </section>

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