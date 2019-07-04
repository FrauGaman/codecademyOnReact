import React from 'react'
import Navigation from '../components/nav/Navigation/Navigation.jsx'
import Logo from '../components/nav/Logo/Logo.jsx'
import Additionally from '../components/nav/Additionally/Additionally.jsx'
import Auth from '../components/nav/Auth/Auth.jsx'
import Filter from '../components/Filter/Filter.jsx'
import MainDescr from "../components/MainDescription/MainDescription"
import CareerCourse from "../components/CareerCourses/CareerCourses"
import SkillCourses from "../components/SkillCourses/SkillCourses"

import Menu from '../config/menu'
import Theme from '../config/theme'
import Language from '../config/language'

import '../style/basic.sass'
import '../style/app.sass'


function FullCatalogPage(props) {
  console.log(props);
  const { link } = props.match.params
  return (
    <React.Fragment>

        <main className="main">
          <MainDescr/>
        </main>

        <section className="careerPath">

          <CareerCourse link={link}/>
        </section>

        <section className="skillPath">
          <SkillCourses />
        </section>

    </React.Fragment>

  );
}

export default FullCatalogPage;
