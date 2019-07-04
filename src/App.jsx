import React from 'react';

import Logo from "./components/nav/Logo/Logo";
import Navigation from "./components/nav/Navigation/Navigation";
import Menu from "./config/menu";
import Additionally from "./components/nav/Additionally/Additionally";
import Auth from "./components/nav/Auth/Auth";
import Filter from "./components/Filter/Filter";

import Theme from "./config/theme";
import Language from "./config/language";

import './style/basic.sass';
import './style/app.sass';

const App = ({children}) => (
  <React.Fragment>
             <nav>
               <div className="nav-container">
                 <div className="navLinks">
                   <Logo />
                   <Navigation
                    Menu={Menu}
                    URL={Menu.URL}
                    linkName={Menu.linkName}
                  />
                </div>
                <div className="usersActions">
                  <Additionally />
                  <Auth />
                </div>
              </div>
            </nav>

            <section className="filterSection">
              <Filter
                theme={Theme.theme}
                language={Language.language}
              />
            </section>

            {children}

            {/*<Router>*/}
            {/*  <main className="main">*/}
            {/*    /!*<Switch>*!/*/}
            {/*      <Route path="/theme/:link" component={FullCatalogPage} />*/}
            {/*      /!*<Route path="/theme/web-development" component={Auth} />*!/*/}
            {/*    /!*</Switch>*!/*/}
            {/*  </main>*/}
            {/*</Router>*/}

          </React.Fragment>
);

export default App;