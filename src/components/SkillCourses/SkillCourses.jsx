import React from 'react';
import Skill from '../../config/coursesSkill';
import './skillCourses.sass';
import Icons from '../Icons';
import SkillCoursesMap from './SkillCoursesMap';

function SkillCourses(props) {
  const skillArr = Skill.skillPath.filter(item => item.theme.includes(props.currentThemeId) || item.language.includes(props.currentLanguageId));
  return (
    <div>
      {skillArr.length &&
      <div>
        <div className="course__title">
          <h2>skill paths</h2>
          <a href="null">
            <Icons iconId={'proIcon'}/>
          </a>
        </div>
        <div className="course__descr_all">
          Skill Paths provide a short roadmap to help you master a new job-ready skill.
        </div>
        <div className="skill__box">
          <SkillCoursesMap
            currentThemeId={props.currentThemeId}
            currentLanguageId={props.currentLanguageId}
            skillArr={skillArr}/>
        </div>
      </div>
      }
    </div>
  );
}

export default SkillCourses;
