// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-4 bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">School Management System</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/classes" className="hover:underline">Manage Classes</Link>
            </li>
            <li>
              <Link to="/teachers" className="hover:underline">Manage Teachers</Link>
            </li>
            <li>
              <Link to="/students" className="hover:underline">Manage Students</Link>
            </li>
            <li>
              <Link to="financial-analytics" className="hover:underline">Financial Analytics</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
