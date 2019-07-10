import React from 'react';
import Clock from '../../img/clock.svg';

function SkillCoursesMap(props) {
  return (
    props.skillArr.map(item =>
      <div key={item.title} className="skill__box__item">
        <div className="skill__box__img" style={{backgroundColor: item.bgColor}}>
          <img src={item.img} alt={item.title}/>
        </div>
        <div className="skill__box__descr">
          <h2>{item.title}</h2>
          <div className="skill__box__descr_more career__box__descr_more">
            <div className="descr__text">
              {item.descr}
            </div>
          </div>
          <div className="period">
            <img className="period__img" src={Clock} alt=""/>
            <div className="period__text">{item.period}</div>
          </div>
        </div>
      </div>
    )
  );
}

export default SkillCoursesMap;
