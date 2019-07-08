import React from 'react';
import Career from '../../config/coursesCareer';
import './careerCourses.sass';
import CareerCoursesMap from "./CareerCoursesMap";
import Icons from '../Icons'

function CareerCourse(props) {

  let careerArr = Career.careerPath.filter( item =>
    item.theme.includes(props.currentThemeId)
  );

  return(
    <div>
      {
        (!props.currentLanguageId) && (Career.careerPath.theme !== [] && careerArr.length) ?
          <div>
            <div className="course__title">
              <h2>Career path</h2>
              <a href="#">
                <Icons iconId={1}/>
              </a>

            </div>
            <div className="course__descr_all">Career Paths guide you through exactly what you need to learn to build a solid foundation for a career in tech.</div>
            <div className="career__box">
              <CareerCoursesMap currentThemeId={props.currentThemeId} />
            </div>
          </div>
        : ''}
    </div>

  )}

export default CareerCourse
