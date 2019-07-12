import React from 'react';
import PropTypes from 'prop-types';
import CareerCoursesMap from './CareerCoursesMap';
import ProIcon from '../Icons/Icons';
import Career from '../../config/coursesCareer';
import './careerCourses.sass';

function CareerCourse({ currentThemeId, currentLanguageId }) {
  let careerArr;
  if (Career.careerPath) {
    careerArr = Career.careerPath.filter(item => item.theme && item.theme.includes(currentThemeId));
  } else {
    careerArr = [];
  }
  return (
    <div>
      { Career.careerPath ?
        (currentThemeId && !currentLanguageId && (Career.careerPath.theme !== []) && careerArr.length) ?
        <div>
          <div className="course__title">
            <h2>Career path</h2>
            <a href="{null}">
              <ProIcon iconName={'proIcon'} />
            </a>
          </div>
          <div className="course__descr_all">Career Paths guide you through exactly what you need to learn to build a
            solid foundation for a career in tech.
          </div>
          <div className="career__box">
            <CareerCoursesMap careerArr={careerArr} />
          </div>
        </div>
          : []
        : <div className="plug__block"> <hr/> Now this field is in work <hr/> </div>
      }
    </div>
  );
}

CareerCourse.propTypes = {
  currentThemeId: PropTypes.number,
  currentLanguageId: PropTypes.number,
};

export default CareerCourse;
