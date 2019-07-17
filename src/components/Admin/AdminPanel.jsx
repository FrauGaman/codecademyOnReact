import React from 'react';
import NavAdmin from './AdminNav/NavAdmin';
import './adminPanel.sass';

function AdminPanel({ children }) {
  return (
    <div className="admin__panel">
      <div className="admin__nav">
        <NavAdmin />
      </div>
      {children}
    </div>
  );
}

export default AdminPanel;
