// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 mt-6">
        <Outlet />
        
      </main>
    </div>
  );
};

export default Layout;
