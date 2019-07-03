import React from 'react'
import Career from '../../config/coursesCareer'

import Done from '../../img/done.svg'
import ProImg from '../../img/pro.svg'

import './careerCourses.sass'

function CareerCourse() {
  return(
    <div>
        <div className="careerPathTitle">
          <h2>Career path</h2>
          <img src={ProImg} alt=""/>
        </div>
        <div className="careerMainDescr">Career Paths guide you through exactly what you need to learn to build a solid foundation for a career in tech.</div>
        <div className="careerBox">
          {Career.careerPath.map(item =>
            <div key={item.title} className="courseBox">
              <div className="courseImg" style={{backgroundColor: item.bgColor}}>
                <img src={item.img} alt={item.title}/>
              </div>
              <div className="careerCourseDescr">
                <h3>{item.title}</h3>
                <div className="careerDescr">{item.descr}</div>
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

  )}

export default CareerCourse

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// {Career.careerPath.filter(item => item.theme.includes(3)).map(item =>