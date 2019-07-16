import React from 'react';
import NavAdmin from './AdminNav/NavAdmin';
import './adminPanel.sass';
// import AdminCareer from './CareerTable/AdminCareer';
// import AdminSkill from './SkillTable/AdminSkill';
// import AdminAllCourses from './AllCoursesTable/AdminAllCourses';


function AdminPanel({ children }) {
  return (
    <div className="admin__panel">
      <div className="admin__nav">
        <NavAdmin/>
      </div>
      {children}
    </div>
  );
}

export default AdminPanel;
