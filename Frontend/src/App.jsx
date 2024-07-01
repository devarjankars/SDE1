// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClassManagement from './components/pages/ClassManagement';
import TeacherManagement from './components/pages/TeacherManagement';
import StudentManagement from './components/pages/StudentManagement';
import ClassAnalytics from './components/pages/ClassAnalytics';
import FinancialAnalytics from './components/pages/FinancialAnalytics';
import Layout from './components/Layout';
import Home from './components/Home';

const App = () => (
  <Router>
  <Routes>
    <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home/> }/>
      <Route path="/classes" element={<ClassManagement />} />
      <Route path="/teachers" element={<TeacherManagement />} />
      <Route path="/students" element={<StudentManagement />} />
      <Route path="/financial-analytics" element={<FinancialAnalytics />} />
      <Route path="/classes/class-analytics/:id" element={<ClassAnalytics/>} />    
      </Route>
  </Routes>
</Router>
);

export default App;
