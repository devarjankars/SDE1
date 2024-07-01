import  { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../Form';
import Table from '../Table';

const TeacherManagement = () => {
  const [teachers, setTeachers] = useState([]);
  const [formValues, setFormValues] = useState({
    name: '',
    gender: '',
    
    contactDetails: '',
    salary: ''
  });


  const fetchTeachers = async () => {
    const response = await axios.get('http://localhost:5000/api/teachers');
    setTeachers(response.data);
  };

  useEffect(() => {
    fetchTeachers();
  }, [formValues]);

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/teachers', formValues);
    fetchTeachers();
    setFormValues({
      name: '',
      gender: '',
     
      contactDetails: '',
      salary: ''
    })
  };


  const HandleEidt=async(ele)=>{
try {
  setFormValues({
    name:ele.name ,
    gender:ele.gender,
   
    contactDetails:ele.contactDetails,
    salary:ele.salary
  })
  
 let res= await axios.delete(`http://localhost:5000/api/teachers/${ele._id}`)
 console.log(res.data);
    
  
} catch (error) {
  alert(error.messsage)
  
}
   


  }

  const HandleDel=async(id)=>{
    try {
      let res= await axios.delete(`http://localhost:5000/api/teachers/${id}`)
          console.log(res.data);
        console.log(id);
    } catch (error) {
      console.log(error);
    }
    
  }


  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Teacher Management</h1>
      <Form fields={[
        { label: 'Name', name: 'name', type: 'text' },
        { label: 'Gender', name: 'gender', type: 'text' },
        { label: 'Contact Details', name: 'contactDetails', type: 'text' },
        { label: 'Salary', name: 'salary', type: 'number' }
      ]} values={formValues} onChange={handleChange} onSubmit={handleSubmit} />
      <Table headers={['Name', 'Gender', 'Contact Details', 'Salary',"Edit","Delete"]} data={teachers.map(t => (
        
                {
        name: t.name,
        gender: t.gender,
        contactDetails: t.contactDetails,
        salary: t.salary,
        Edit:<button className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'onClick={()=>{HandleEidt(t) }}>Edit</button>,
        Delete:<button className='bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'onClick={()=>{HandleDel(t._id)}}>Delete</button>
      }))} />
    </div>
  );
};

export default TeacherManagement;
