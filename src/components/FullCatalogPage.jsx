import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MainDescr from './MainDescription/MainDescription';
import CareerCourses from './CareerCourses/CareerCourses';
import SkillCourses from './SkillCourses/SkillCourses';
import CoursesList from './CoursesList/CoursesList';
import { PATH } from '../scripts/const';
import getData from '../scripts/getData';
import '../style/basic.sass';
import NotFoundFront from './404Front';

function FullCatalogPage({ match }) {
  const [initialize, setInitialize] = useState(false);
  const [pageIsFound, setPageIsFound] = useState(true);
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

  const [knowResult, setKnowResult] = useState([]);
  const addDataKnow = (res) => {
    setKnowResult(res);
  };

  useEffect(() => {
    const themeData = getData(PATH.THEME, addDataTheme);
    const languageData = getData(PATH.LANGUAGE, addDataLang);
    const knowledgeData = getData(PATH.KNOWLEDGE, addDataKnow);
    Promise.all([themeData, languageData, knowledgeData]).then(() => setInitialize(true))
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

  useEffect(() => {
    if (initialize) {
      let flag;
      if (match.params.link !== undefined && match.params.linkLang === undefined) {
        flag = themeArr.some(item => item.link === `/${match.params.link}`);
      } else {
        flag = languageArr.some(item => item.link === `/${match.params.linkLang}`);
      }
      setPageIsFound(flag);
    }
  }, [initialize, match.params.link, match.params.linkLang]);

  return (
    <div>
      {
        pageIsFound ?
          <div className="content__wrapper">

            <MainDescr filterArr={filterArr} activeLink={activeLink} />
            <CareerCourses currentThemeId={currentThemeId} currentLanguageId={currentLanguageId} knowledgeArr={knowResult} />
            <SkillCourses currentThemeId={currentThemeId} currentLanguageId={currentLanguageId} />
            <CoursesList currentThemeId={currentThemeId} currentLanguageId={currentLanguageId} />
          </div>
            : <NotFoundFront />
      }
    </div>
  );
}

FullCatalogPage.propTypes = {
  match: PropTypes.object,
};

export default FullCatalogPage;
