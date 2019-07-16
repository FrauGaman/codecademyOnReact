import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CareerCoursesMap from './CareerCoursesMap';
import ProIcon from '../Icons/Icons';
import { PATH } from '../../scripts/const';
import getData from '../../scripts/getData';
import './careerCourses.sass';

function CareerCourse({ currentThemeId, currentLanguageId }) {
  const [result, setResult] = useState([]);
  const addData = (res) => {
    setResult(res);
  };

  useEffect(() => {
    getData(PATH.CAREERPATH, addData);
  }, []);


  const careerPathArr = result || [];
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
      }
    </div>
  );
}

CareerCourse.propTypes = {
  currentThemeId: PropTypes.number,
  currentLanguageId: PropTypes.number,
};

export default CareerCourse;
