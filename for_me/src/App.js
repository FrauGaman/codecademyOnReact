import React from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation/Navigation.jsx'
import Logo from './components/Logo/Logo.jsx'
import Additionally from './components/additionally/Additionally.jsx'
import Auth from './components/Auth/Auth.jsx'
import Filter from './components/Filter/Filter.jsx'
import MainDescr from "./components/MainDescription/MainDescription";

import './style/basic.sass';
import './style/nav.sass';

function App() {


  return (
    <div className="App">
      <nav>
        <div className="navLinks">
          <Logo />
          <Navigation />
        </div>
        <div className="usersActions">
          <Additionally />
          <Auth />
        </div>
      </nav>

      <section className="filterSection">
        <Filter />
      </section>

      <main className="main">
        <MainDescr/>
      </main>

    </div>
  );
}

export default App;
