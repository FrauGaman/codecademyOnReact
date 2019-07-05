import React from 'react';
import Courses from '../../config/coursesList';
import './coursesList.sass';

import ProIcon from '../../img/proIcon.webp'

function CoursesList() {
  return (
    <div>
      <div className="course__title">
        <h2>courses</h2>
      </div>
      <div className="course__descr_all">Codecademy courses teach you a specific language or technology through
        interactive lessons.
      </div>

      <div className="courses__box">
        {Courses.coursesList.map(item =>
          <div>
            <div key={item.title} className="course__box__item" style={{borderTopColor: item.borderColor}}>

              <img className="course__item__icon" src={item.icon} alt=""/>

              <div className="importance__box">
                {item.importance === "Exclusive Course" ?
                  <div>
                    <img className="importance__icon" src={ProIcon} alt=""/>
                    <div className="course__importance" style={{marginLeft: '49px'}}>{item.importance}</div>
                  </div> :
                  <div className="course__importance">{item.importance}</div>
                }
              </div>
              <h3 className="course__title">{item.title}</h3>
              <div className="course__description">
                <div className="descr__text">
                  {item.descr}
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CoursesList

