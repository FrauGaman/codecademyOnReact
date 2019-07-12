import React from 'react';
import PropTypes from 'prop-types';
import Skill from '../../config/coursesSkill';
import './skillCourses.sass';
import { ReactComponent as ProIcon } from '../../img/ProIcon.svg';
import SkillCoursesMap from './SkillCoursesMap';

function SkillCourses({ currentThemeId, currentLanguageId }) {
  let skillArr;
  if (Skill.skillPath) {
    skillArr = Skill.skillPath.filter(item => (item.theme && item.theme.includes(currentThemeId)) || (item.language && item.language.includes(currentLanguageId)));
  } else {
    skillArr = [];
  }
  return (
    <div>
      { (Skill.skillPath && skillArr.length) ?
      <div>
        <div className="course__title">
          <h2>skill paths</h2>
          <a href="{null}">
            <ProIcon />
          </a>
        </div>
        <div className="course__descr_all">
          Skill Paths provide a short roadmap to help you master a new job-ready skill.
        </div>
        <div className="skill__box">
          <SkillCoursesMap skillArr={skillArr} />
        </div>
      </div>
        : <div className="plug__block"> <hr/> Now this field is in work <hr/> </div>
      }
    </div>
  );
}
SkillCourses.propTypes = {
  currentThemeId: PropTypes.number,
  currentLanguageId: PropTypes.number,
};
export default SkillCourses;
