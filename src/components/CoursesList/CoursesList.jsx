import React from 'react';
import Courses from '../../config/coursesList';
import './coursesList.sass';
import CoursesListMap from './CoursesListMap';

function CoursesList(props) {
  const coursesArr = Courses.coursesList.filter(item => item.theme.includes(props.currentThemeId) || item.language.includes(props.currentLanguageId));
  return (
    <div className="courses__list">
      {coursesArr.length &&
      <div>
        <div className="course__title">
          <h2>courses</h2>
        </div>
        <div className="course__descr_all">
          Codecademy courses teach you a specific language or technology through interactive lessons.
        </div>
        <div className="courses__box">
          <CoursesListMap
            currentThemeId={props.currentThemeId}
            currentLanguageId={props.currentLanguageId}
            coursesArr={coursesArr}/>
        </div>
      </div>
      }
    </div>
  );
}

export default CoursesList;
