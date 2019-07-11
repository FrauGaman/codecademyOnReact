import React from 'react';
import PropTypes from 'prop-types';
import Courses from '../../config/coursesList';
import './coursesList.sass';
import CoursesListMap from './CoursesListMap';

function CoursesList({ currentThemeId, currentLanguageId }) {
  let coursesArr;
  if (Courses.coursesList) {
    coursesArr = Courses.coursesList.filter(item =>
      (item.theme && item.theme.includes(currentThemeId)) || (item.language && item.language.includes(currentLanguageId)));
  } else {
    coursesArr = [];
  }
  return (
    <div className="courses__list">
      {Courses.coursesList ?
        coursesArr.length ?
        <div>
          <div className="course__title">
            <h2>courses</h2>
          </div>
          <div className="course__descr_all">
            Codecademy courses teach you a specific language or technology through interactive lessons.
          </div>
          <div className="courses__box">
            <CoursesListMap coursesArr={coursesArr}/>
          </div>
        </div>
          : []
        : <div className="plug__block"> <hr/> Now this field is in work <hr/> </div>
      }
    </div>
  );
}
CoursesList.propTypes = {
  currentThemeId: PropTypes.number,
  currentLanguageId: PropTypes.number,
};
export default CoursesList;
