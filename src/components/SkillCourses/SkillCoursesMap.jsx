import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ClockIcon } from '../../img/icons/clock.svg';

function SkillCoursesMap({ skillArr }) {
  return (
    skillArr.map(({ img = '../../img/plugImg.svg', bgColor = '#000', title = 'Title Plug', descr = 'description Plug', period = '' }) =>
      <div key={title} className="skill__box__item">
        <div className="skill__box__img" style={{backgroundColor: bgColor}}>
          <img src={img} alt={title} />
        </div>
        <div className="skill__box__descr">
          <h2>{title}</h2>
          <div className="skill__box__descr_more career__box__descr_more">
            <div className="descr__text">
              {descr}
            </div>
          </div>
          <div className="period">
            <ClockIcon className="period__img" />
            <div className="period__text">{period}</div>
          </div>
        </div>
      </div>
    )
  );
}
SkillCoursesMap.propTypes = {
  careerArr: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    bgColor: PropTypes.string,
    title: PropTypes.string,
    descr: PropTypes.string,
    period: PropTypes.string,
  })),
};
export default SkillCoursesMap;
