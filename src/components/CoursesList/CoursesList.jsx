import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CoursesListMap from './CoursesListMap';
import { PATH } from '../../scripts/const';
import getData from '../../scripts/getData';
import './coursesList.sass';

function CoursesList({ currentThemeId, currentLanguageId }) {
  const [result, setResult] = useState([]);
  const addData = (res) => {
    setResult(res);
  };

  useEffect(() => {
    getData(PATH.COURSESLIST, addData);
  }, []);

  const coursesListPathArr = result || [];

  let coursesArr;
  if (coursesListPathArr.length) {
    coursesArr = coursesListPathArr.filter(item =>
      (item.theme && item.theme.includes(currentThemeId)) || (item.language && item.language.includes(currentLanguageId)));
  } else {
    coursesArr = [];
  }
  return (
    <div className="courses__list">
      { coursesArr.length ?
        <div>
          <div className="course__title">
            <h2>courses</h2>
          </div>
          <div className="course__descr_all">
            Codecademy courses teach you a specific language or technology through interactive lessons.
          </div>
          <div className="courses__box">
            <CoursesListMap coursesArr={coursesArr} />
          </div>
        </div>
          : []
      }
    </div>
  );
}

CoursesList.propTypes = {
  currentThemeId: PropTypes.number,
  currentLanguageId: PropTypes.number,
};

export default CoursesList;
