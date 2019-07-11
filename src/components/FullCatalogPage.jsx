import React from 'react';
import MainDescr from './MainDescription/MainDescription';
import CareerCourses from './CareerCourses/CareerCourses';
import SkillCourses from './SkillCourses/SkillCourses';
import CoursesList from './CoursesList/CoursesList';
import '../style/basic.sass';
import theme from '../config/theme';
import language from '../config/language';

function FullCatalogPage(props) {
  let currentThemeId;
  let currentLanguageId;
  let activeLink;
  let filterArr;

  if (theme.theme) {
    for (let i = 0; i < theme.theme.length; i++) {
      if ((`/${props.match.params.link}`) === theme.theme[i].link) {
        currentThemeId = theme.theme[i].id;
      }
    }
  } else {
    theme.theme = [];
  }

  if (language.language) {
    for (let i = 0; i < language.language.length; i++) {
      if ((`/${props.match.params.linkLang}`) === language.language[i].link) {
        currentLanguageId = language.language[i].id;
      }
    }
  } else {
    language.language = [];
  }

   if (theme.theme && language.language) {
    filterArr = [...theme.theme, ...language.language];
  } else if (!theme.theme && language.language) {
    filterArr = [...language.language];
  } else if (theme.theme && !language.language) {
    filterArr = [...theme.theme];
  } else {
     filterArr = [];
   }

  for (let i = 0; i < filterArr.length; i++) {
    if (((`/${props.match.params.link}`) !== undefined) && ((`/${props.match.params.link}`) === filterArr[i].link)) {
      activeLink = filterArr[i].link;
    } else if ((`/${props.match.params.linkLang}` !== undefined) && (`/${props.match.params.linkLang}`) === filterArr[i].link) {
      activeLink = filterArr[i].link;
    }
  }

  return (
    <div className="content__wrapper">
      <MainDescr filterArr={filterArr} activeLink={activeLink} />
      <CareerCourses currentThemeId={currentThemeId} currentLanguageId={currentLanguageId} />
      <SkillCourses currentThemeId={currentThemeId} currentLanguageId={currentLanguageId} />
      <CoursesList currentThemeId={currentThemeId} currentLanguageId={currentLanguageId} />
    </div>

  );
}

export default FullCatalogPage;
