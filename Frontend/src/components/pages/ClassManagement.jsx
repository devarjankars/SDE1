import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from '../Table';
const ClassManagement = () => {
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [form, setForm] = useState({
    name: '',
    year: '',
    teacherId: '',
    studentFees: '',
  });

  useEffect(() => {
    fetchClasses();
    fetchTeachers();
  }, []);

  const fetchClasses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/classes');
      setClasses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchTeachers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/teachers');
      setTeachers(res.data);
    } catch (err) {
      console.error(err);
    }
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/classes', form);
      
      setClasses([...classes, res.data]);
      setForm({
        name: '',
        year: '',
        teacherId: '',
        
        studentLimit:'',
      });
    } catch (err) {
      console.error(err);
    }
  };
const HandleEidt= async(e)=>{
  try {
    setForm({
      name:e.className,
      year:e.year,
      teacherId:'',
      studentLimit:e.studentLimit,
    })
    const res = axios.delete(`http://localhost:5000/api/classes/${e._id}`);
    console.log(res.data);

    
  } catch (error) {
    alert(error.message)
    
  }
  


}
const HandleDel=(id)=>{
  const res = axios.delete(`http://localhost:5000/api/classes/${id}`);
  console.log(res.data);
  ({
    name: '',
    year: '',
    teacherId: '',
    studentFees: '',
  });
   
}
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Class Management</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Class Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
            Year
          </label>
          <input
            type="number"
            name="year"
            id="year"
            value={form.year}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="teacherId">
            Teacher
          </label>
          <select
            name="teacherId"
            id="teacherId"
            value={form.teacherId}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select a teacher</option>
            {teachers.map((teacher) => (
              <option key={teacher._id} value={teacher._id}>
                {teacher.name}
              </option>
            ))}
          </select>
        </div>
       
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentLimit">
           Class Limit
          </label>
          <input
            type="number"
            name="studentLimit"
            id="studentLimit"
            value={form.studentLimit}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Class
          </button>
        </div>
      </form>
      <div className="mb-4">
        <Table
          headers={['Class Name', 'Year', 'Student Limit', 'Analytics',"Edit","Delete" ]}
          data={classes.map(c => (console.log(c),{
            
            
            className: c.className,
            year: c.year,
            studentLimit: c.studentLimit,
            Analytics:<Link to={`class-analytics/${c._id}`} className="text-blue-500">Anylsis</Link>,
            Edit:<button className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'onClick={()=>{HandleEidt(c) }}>Edit</button>,
            Delete:<button className='bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'onClick={()=>{HandleDel(c._id)}}>Delete</button>
          }))}
          linkColumn="class name"
        />
      </div>
    </div>
  );
};

export default ClassManagement;
