import React from 'react';
import PropTypes from 'prop-types';
import DoneIcon from '../../Icons/Icons';

function CareerCoursesMap({ careerArr, knowledgeArr }) {
  return (
    careerArr.map(({ id, img = '../../img/plugImg.svg', bgColor = '#000', title = 'Title Plug', descr = 'description Plug', knowledge = [] }) =>
      <div key={id} className="career__box__item">
        <div className="career__box__img" style={{ backgroundColor: bgColor }}>
          <img src={img} alt={title}/>
        </div>
        <div className="career__box__descr">
          <h3 className="career_title">{title}</h3>
          <div className="career__box__descr_more">{descr}</div>
          <div className="knowledges">
            {knowledge.map(knowItem =>
              <div key={knowItem} className="know__item">
                <DoneIcon iconName={'doneIcon'} className="done__icon" />
                {knowledgeArr.map(elem =>
                  knowItem === elem.id ? knowItem = elem.name : '',
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
}

CareerCoursesMap.propTypes = {
  careerArr: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    bgColor: PropTypes.string,
    title: PropTypes.string,
    descr: PropTypes.string,
    knowledge: PropTypes.array,
  })),
  knowledgeArr: PropTypes.array,
};

export default CareerCoursesMap;
