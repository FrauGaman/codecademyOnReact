import React from 'react';
import PropTypes from 'prop-types';
import CoursesListMap from './CoursesListMap';
import './coursesList.sass';

function CoursesList({ coursesRresult, currentThemeId, currentLanguageId }) {
  const coursesListPathArr = coursesRresult || [];
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
  coursesRresult: PropTypes.arrayOf(PropTypes.shape({
    importance: PropTypes.string,
    title: PropTypes.string,
    descr: PropTypes.string,
    icon: PropTypes.string,
    borderColor: PropTypes.string,
  })),
  currentThemeId: PropTypes.number,
  currentLanguageId: PropTypes.number,
};

export default CoursesList;
