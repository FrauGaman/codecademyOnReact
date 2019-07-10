import React from 'react';
import Done from '../../img/done.svg';

function CareerCoursesMap(props) {
  return (
    props.careerArr.map(item =>
      <div key={item.title} className="career__box__item">
        <div className="career__box__img" style={{backgroundColor: item.bgColor}}>
          <img src={item.img} alt={item.title}/>
        </div>
        <div className="career__box__descr">
          <h3 className="career_title">{item.title}</h3>
          <div className="career__box__descr_more">{item.descr}</div>
          <div className="knowledges">
            {item.knowledge.map(knowItem =>
              <div key={knowItem} className="know__item">
                <img src={Done} alt=""/>
                {knowItem}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default CareerCoursesMap;
