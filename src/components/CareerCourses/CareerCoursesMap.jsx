import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DoneIcon} from '../../img/icons/done.svg';

function CareerCoursesMap({ careerArr }) {
  return (
    careerArr.map(( { img = '../../img/plugImg.svg', bgColor = '#000', title = 'Title Plug', descr = 'description Plug', knowledge = [] }) =>
      <div key={title} className="career__box__item">
        <div className="career__box__img" style={{ backgroundColor: bgColor }}>
          <img src={img} alt={title}/>
        </div>
        <div className="career__box__descr">
          <h3 className="career_title">{title}</h3>
          <div className="career__box__descr_more">{descr}</div>
          <div className="knowledges">
            {knowledge.map(knowItem =>
              <div key={knowItem} className="know__item">
                <DoneIcon className="done__icon" />
                {knowItem}
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
};
export default CareerCoursesMap;
