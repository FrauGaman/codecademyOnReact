import React from 'react';
import Navigation from './components/Navigation/Navigation.jsx'
import Logo from './components/Logo/Logo.jsx'
import Additionally from './components/Additionally/Additionally.jsx'
import Auth from './components/Auth/Auth.jsx'
import Filter from './components/Filter/Filter.jsx'
import MainDescr from "./components/MainDescription/MainDescription"
import CareerCourse from "./components/CareerCourses/CareerCourses"

import Menu from './config/menu'
import Theme from './config/theme'
import Language from './config/language'

import './style/basic.sass'
import './style/nav.sass'
import SkillCourses from "./components/SkillCourses/SkillCourses";


function App() {
  return (
    <div className="App">
      <nav>
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
      </nav>

      <section className="filterSection">
        <Filter
          theme={Theme.theme}
          language={Language.language}
          themeId="3"
          />
      </section>

      <main className="main">
        <MainDescr/>
      </main>

      <section className="careerPath">
        <CareerCourse />
      </section>

      <section className="skillPath">
        <SkillCourses />
      </section>


    </div>
  );
}

export default App;
