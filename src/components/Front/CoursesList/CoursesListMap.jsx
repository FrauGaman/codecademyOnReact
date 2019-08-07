import React from 'react';
import PropTypes from 'prop-types';
import ProIcon from '../../Icons/Icons';

function CoursesListMap({ coursesArr }) {
  return (
      coursesArr.map(({ importance = 'Course', title = 'Title Plug', descr = 'description Plug', icon = '../../img/courseList/purple.svg', borderColor = '#000' }) =>
        <div key={title} className="course__box__item" style={{ borderTopColor: borderColor }}>
          <img className="course__item__icon" src={icon} alt=""/>
          <div className="importance__box">
            {importance === 'Exclusive Course' ?
              <div>
                {/*<img className="importance__icon" src="/img/icons/proIcon.webp" alt="" />*/}
                <ProIcon iconName={'proCourses'} className={'importance__icon'}  />
                <div className="course__importance" style={{ marginLeft: '49px' }}>{importance}</div>
              </div>
              : <div className="course__importance">{importance}</div>
            }
          </div>
          <h3 className="course__title">{title}</h3>
          <div className="course__description">
            <div className="descr__text">
              {descr}
            </div>
          </div>
        </div>
      )
  );
}

CoursesListMap.propTypes = {
  coursesArr: PropTypes.arrayOf(PropTypes.shape({
    importance: PropTypes.string,
    title: PropTypes.string,
    descr: PropTypes.string,
    icon: PropTypes.string,
    borderColor: PropTypes.string,
  })),
};

export default CoursesListMap;
