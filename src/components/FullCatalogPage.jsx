import React from 'react';
import MainDescr from "./MainDescription/MainDescription"
import CareerCourses from "./CareerCourses/CareerCourses";
import SkillCourses from "./SkillCourses/SkillCourses";
import CoursesList from "./CoursesList/CoursesList";
import '../style/basic.sass';
import '../style/app.sass';
import Theme from "../config/theme";
import Language from "../config/language";

function FullCatalogPage(props) {
  let currentThemeId;
  let currentLanguageId;
  let activeLink;

  for (let i = 0; i < Theme.theme.length; i++) {
    if ((`/${props.match.params.link}`) === Theme.theme[i].link)
      currentThemeId = Theme.theme[i].id;
  }

  for (let i = 0; i < Language.language.length; i++) {
    if ((`/${props.match.params.linkLang}`) === Language.language[i].link)
      currentLanguageId = Language.language[i].id;
  }

  let filterArr = [ ...Theme.theme,...Language.language];

  for (let i = 0; i < filterArr.length; i++) {
    if (((`/${props.match.params.link}`) !== undefined) && ((`/${props.match.params.link}`) === filterArr[i].link)) {
      activeLink = filterArr[i].link
    } else if ((`/${props.match.params.linkLang}` !== undefined) && (`/${props.match.params.linkLang}`) === filterArr[i].link) {
      activeLink = filterArr[i].link
    }
  }

   return (
    <React.Fragment>

        <main className="main">
          <MainDescr filterArr={filterArr} activeLink={activeLink}/>
        </main>

        <section className="careerPath">
          <CareerCourses currentThemeId={currentThemeId} currentLanguageId={currentLanguageId}/>
        </section>

        <section className="skillPath">
          <SkillCourses currentThemeId={currentThemeId} currentLanguageId={currentLanguageId}/>
        </section>

      <section className="courses__list">
        <CoursesList currentThemeId={currentThemeId} currentLanguageId={currentLanguageId}/>
      </section>

    </React.Fragment>

  );
}

export default FullCatalogPage
