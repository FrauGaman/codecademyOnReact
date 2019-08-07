import React from 'react';
import PropTypes from 'prop-types';
import CareerCoursesMap from './CareerCoursesMap';
import ProIcon from '../../Icons/Icons';
import './careerCourses.sass';

function CareerCourse({ careerResult, currentThemeId, currentLanguageId, knowledgeArr }) {
  const careerPathArr = careerResult || [];
  let careerArr;
  if (careerPathArr.length) {
    careerArr = careerPathArr.filter(item => item.theme && item.theme.includes(currentThemeId));
  } else {
    careerArr = [];
  }

  return (
    <div>
      { (currentThemeId && !currentLanguageId && careerArr.length) ?
        <div>
          <div className="course__title">
            <h2>Career path</h2>
            <a href={null}>
							<ProIcon iconName={'proIcon'} className={'proIcon'} />
            </a>
          </div>
          <div className="course__descr_all">Career Paths guide you through exactly what you need to learn to build a
            solid foundation for a career in tech.
          </div>
          <div className="career__box">
            <CareerCoursesMap careerArr={careerArr} knowledgeArr={knowledgeArr} />
          </div>
        </div>
          : []
      }
    </div>
  );
}

CareerCourse.propTypes = {
	careerResult: PropTypes.arrayOf(PropTypes.shape({
		img: PropTypes.string,
		bgColor: PropTypes.string,
		title: PropTypes.string,
		descr: PropTypes.string,
		knowledge: PropTypes.array,
	})),
  currentThemeId: PropTypes.number,
  currentLanguageId: PropTypes.number,
  knowledgeArr: PropTypes.array,
};

export default CareerCourse;
