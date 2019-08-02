import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SkillCoursesMap from './SkillCoursesMap';
import ProIcon from '../Icons/Icons';
import { PATH } from '../../scripts/const';
import getData from '../../scripts/getData';
import './skillCourses.sass';

function SkillCourses({ currentThemeId, currentLanguageId }) {
  const [result, setResult] = useState([]);
  const addData = (res) => {
    setResult(res);
  };

  useEffect(() => {
    getData(PATH.SKILLPATH, addData);
  }, []);

  const skillPathArr = result || [];

  let skillArr;
  if (skillPathArr.length) {
    skillArr = skillPathArr.filter(item => (item.theme && item.theme.includes(currentThemeId)) || (item.language && item.language.includes(currentLanguageId)));
  } else {
    skillArr = [];
  }

  return (
    <div>
      { skillArr.length ?
      <div>
        <div className="course__title">
          <h2>skill paths</h2>
          <a href={null}>
            <ProIcon iconName={'proIcon'} />
          </a>
        </div>
        <div className="course__descr_all">
          Skill Paths provide a short roadmap to help you master a new job-ready skill.
        </div>
        <div className="skill__box">
          <SkillCoursesMap skillArr={skillArr} />
        </div>
      </div>
          : []
      }
    </div>
  );
}

SkillCourses.propTypes = {
  currentThemeId: PropTypes.number,
  currentLanguageId: PropTypes.number,
};

export default SkillCourses;
