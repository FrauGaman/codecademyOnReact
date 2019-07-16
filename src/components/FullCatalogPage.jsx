import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MainDescr from './MainDescription/MainDescription';
import CareerCourses from './CareerCourses/CareerCourses';
import SkillCourses from './SkillCourses/SkillCourses';
import CoursesList from './CoursesList/CoursesList';
import { PATH } from '../scripts/const';
import getData from '../scripts/getData';
import '../style/basic.sass';

function FullCatalogPage({ match }) {
  let currentThemeId;
  let currentLanguageId;
  let activeLink;
  let filterArr = [];

  const [themeResult, setThemeResult] = useState([]);
  const addDataTheme = (res) => {
    setThemeResult(res);
  };
  const [langResult, setLangResult] = useState([]);
  const addDataLang = (res) => {
    setLangResult(res);
  };

  useEffect(() => {
    getData(PATH.THEME, addDataTheme);
  }, []);

  useEffect(() => {
    getData(PATH.LANGUAGE, addDataLang);
  }, []);

  const themeArr = themeResult;
  const languageArr = langResult;
  filterArr = [...themeResult, ...langResult];

  if (themeArr.length) {
    for (let i = 0; i < themeArr.length; i++) {
      if ((`/${match.params.link}`) === themeArr[i].link) {
        currentThemeId = themeArr[i].id;
      }
    }
  }

  if (languageArr.length) {
    for (let i = 0; i < languageArr.length; i++) {
      if ((`/${match.params.linkLang}`) === languageArr[i].link) {
        currentLanguageId = languageArr[i].id;
      }
    }
  }

  for (let i = 0; i < filterArr.length; i++) {
    if (((`/${match.params.link}`) !== undefined) && ((`/${match.params.link}`) === filterArr[i].link)) {
      activeLink = filterArr[i].link;
    } else if ((`/${match.params.linkLang}` !== undefined) && (`/${match.params.linkLang}`) === filterArr[i].link) {
      activeLink = filterArr[i].link;
    }
  }

  return (
    <div>
      <div className="content__wrapper">
        <MainDescr filterArr={filterArr} activeLink={activeLink} />
        <CareerCourses currentThemeId={currentThemeId} currentLanguageId={currentLanguageId} />
        <SkillCourses currentThemeId={currentThemeId} currentLanguageId={currentLanguageId} />
        <CoursesList currentThemeId={currentThemeId} currentLanguageId={currentLanguageId} />
      </div>
    </div>
  );
}

FullCatalogPage.propTypes = {
  match: PropTypes.object,
};

export default FullCatalogPage;
