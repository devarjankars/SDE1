import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the School Management System</h1>
      <p className="mb-4">
        This application allows you to manage classes, teachers, and students efficiently. Below are the main features and instructions on how to use them:
      </p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            <strong>Class Management:</strong> Create, view, update, and delete classes. Each class can have assigned teachers and students.
          </li>
          <li className="mb-2">
            <strong>Teacher Management:</strong> Add, view, update, and delete teachers. Assign teachers to specific classes.
          </li>
          <li className="mb-2">
            <strong>Student Management:</strong> Add, view, update, and delete students. Assign students to specific classes and track their fees.
          </li>
          <li className="mb-2">
            <strong>Analytics:</strong> View detailed analytics for each class, including gender distribution and financial data (teacher salaries and student fees).
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">How to Use</h2>
        <ol className="list-decimal pl-6">
          <li className="mb-2">
            Navigate to the <Link to="/class-management" className="text-blue-500">Class Management</Link> page to manage classes. You can add a new class using the form provided and view existing classes in the table.
          </li>
          <li className="mb-2">
            Go to the <Link to="/teacher-management" className="text-blue-500">Teacher Management</Link> page to manage teachers. You can add new teachers and assign them to classes.
          </li>
          <li className="mb-2">
            Visit the <Link to="/student-management" className="text-blue-500">Student Management</Link> page to manage students. Add new students and assign them to classes.
          </li>
          <li className="mb-2">
            Click on a class in the Class Management page to view detailed analytics for that class, including a graph showing the number of male and female students.
          </li>
          <li className="mb-2">
            Navigate to the <Link to="/financial-analytics" className="text-blue-500">Financial Analytics</Link> page to view financial details, including teacher salaries and student fees. Use the toggle to switch between monthly and yearly views.
          </li>
        </ol>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Quick Links</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            <Link to="/class-management" className="text-blue-500">Class Management</Link>
          </li>
          <li className="mb-2">
            <Link to="/teacher-management" className="text-blue-500">Teacher Management</Link>
          </li>
          <li className="mb-2">
            <Link to="/student-management" className="text-blue-500">Student Management</Link>
          </li>
          <li className="mb-2">
            <Link to="/financial-analytics" className="text-blue-500">Financial Analytics</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
