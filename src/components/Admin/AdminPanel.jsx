import React from 'react';
import NavAdmin from './AdminNav/NavAdmin';
import './adminPanel.sass';
import AdminBurger from './AdminBurger/AdminBurger';

function AdminPanel({ children }) {
  return (
    <div className="admin__panel">
      <div className="admin__nav">
        <NavAdmin />
      </div>
      <div className="admin__nav__burger">
        <AdminBurger />
      </div>
      {children}
    </div>
  );
}

export default AdminPanel;
