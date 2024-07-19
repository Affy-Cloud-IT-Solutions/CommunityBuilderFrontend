// src/components/Layout.js
import React from 'react';
import Navbar from '../../Componants/admin/Navbar';
import Sidebar from '../../Componants/admin/Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '20px' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
