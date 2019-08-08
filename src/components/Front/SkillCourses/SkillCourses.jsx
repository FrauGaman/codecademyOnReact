import React from 'react';
import PropTypes from 'prop-types';
import SkillCoursesMap from './SkillCoursesMap';
import ProIcon from '../../Icons/Icons';
import './skillCourses.sass';

function SkillCourses({ skillResult, currentThemeId, currentLanguageId }) {
  if (!skillResult.length) {
    return null;
  }
  const skillArr = skillResult.filter(item => (item.theme && item.theme.includes(currentThemeId)) || (item.language && item.language.includes(currentLanguageId)));
  return (
    <div>
      { !!skillArr.length &&
      <div>
        <div className="course__title">
          <h2>skill paths</h2>
          <a href={null}>
            <ProIcon iconName={'proIcon'} className={'proIcon'} />
          </a>
        </div>
        <div className="course__descr_all">
          Skill Paths provide a short roadmap to help you master a new job-ready skill.
        </div>
        <div className="skill__box">
          <SkillCoursesMap skillArr={skillArr} />
        </div>
      </div>
      }
    </div>
  );
}

SkillCourses.propTypes = {
  skillResult: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    bgColor: PropTypes.string,
    title: PropTypes.string,
    descr: PropTypes.string,
    period: PropTypes.string,
  })),
  currentThemeId: PropTypes.number,
  currentLanguageId: PropTypes.number,
};

export default SkillCourses;
