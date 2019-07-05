import React from 'react';
import Career from '../../config/coursesCareer';
import Done from '../../img/done.svg';
import './careerCourses.sass';

function CareerCourse(props) {

  return(
    <div>
      {
        (!props.currentLanguageId) && (Career.careerPath.theme !== []) ?
          <div>
            <div className="course__title">
              <h2>Career path</h2>
              <a href="#">
                {/*<svg viewBox="0 0 32 32">*/}
                {/*  <use xlinkHref="#pro-icon"></use>*/}
                {/*</svg>*/}
              </a>
            </div>

            <div className="course__descr_all">Career Paths guide you through exactly what you need to learn to build a solid foundation for a career in tech.</div>

            <div className="career__box">
              {Career.careerPath.filter( item =>
                item.theme.includes(props.currentThemeId)
              ).map(item =>
                <div key={item.title} className="career__box__item">
                  <div className="career__box__img" style={{backgroundColor: item.bgColor}}>
                    <img src={item.img} alt={item.title}/>
                  </div>
                  <div className="career__box__descr">
                    <h3 className="career_title">{item.title}</h3>
                    <div className="career__box__descr_more">{item.descr}</div>
                    <div className="knowledges">
                      {item.knowledge.map(knowItem =>
                        <div key={knowItem} className="knowItem">
                          <img src={Done} alt=""/>
                          {knowItem}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        : ''}
    </div>

  )}

export default CareerCourse

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// {Career.careerPath.filter(item => item.theme.includes(3)).map(item =>