import React from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation.jsx'
import Logo from './components/Logo.jsx'
import Additionally from './components/Additionally.jsx'
import Auth from './components/Auth.jsx'
import './style/style.css';

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

    </div>
  );
}

export default App;
