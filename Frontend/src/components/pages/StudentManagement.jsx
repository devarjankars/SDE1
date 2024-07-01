import  { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import Form from '../Form'
import Table from '../Table';
import { MyContext } from './StudentContext';

const StudentManagement = () => {
   
  const {state, updater} = useContext(MyContext);
  const [students, setStudents] = useState([]);
  
  const [Classes, SetClasses]=useState([]);
  const [formValues, setFormValues] = useState({
    name: '',
    gender: '',
    dob: '',
    contactDetails: '',
    feesPaid: '',
    class: ''
  });

  const fetchStudents = async () => {
    const response = await axios.get('http://localhost:5000/api/students');
    setStudents(response.data);
  };

  const fetchClasses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/classes');
      SetClasses(res.data);
      
    } catch (err) {
      console.error(err);
    }
  }; 
 

  useEffect(() => {
    fetchStudents();
    fetchClasses()
  }, []);

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formValues);
    
    await axios.post('http://localhost:5000/api/students', formValues);
    fetchStudents();
    setFormValues({
      class:'',
      name:'',
      gender:'',
      dob:'',
      contactDetails:'',
      feesPaid:'',
    });
  };
  console.log(Classes);

  const HandleEidt=async(s)=>{
    try {

      let response= await axios.get(`http://localhost:5000/api/students/${s._id}`)
      console.log("this one"+response.data);

      setFormValues({
        class:'',
        name:s.name,
        gender:s.gender,
        dob:s.dob,
        contactDetails:s.contactDetails,
        feesPaid:s.feesPaid,
      });
      
     let res= await axios.delete(`http://localhost:5000/api/students/${s._id}`)
     console.log(res.data);
        
      
    } catch (error) {
      alert(error.messsage)
      
    }
       
    
    
      }
    
      const HandleDel=async(id)=>{
        try {
          let res= await axios.delete(`http://localhost:5000/api/students/${id}`)
              console.log(res.data);
            console.log(id);
        } catch (error) {
          console.log(error);
        }
        
      }


  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Student Management</h1>
      <div>  We Have Available Classes:
        {Classes.map(e=>{
         return  (
          <button className={'bg-blue-400 mx-2 px-2 hover:underline rounded-sm bottom-auto'}
          key={e._id} >
           {e.className}
            </button>) } 
            )}
            
      </div>
      <Form fields={[
        { label: 'Name', name: 'name', type: 'text' },
        { label: 'Gender', name: 'gender', type: 'text' },
        { label: 'Date of Birth', name: 'dob', type: 'date' }, 
        { label: 'Contact Details', name: 'contactDetails', type: 'text' },
        { label: 'Fees Paid', name: 'feesPaid', type: 'number' },
        { label: 'class ', name: 'class', type: 'text' },
       
      ]} values={formValues} onChange={handleChange} onSubmit={handleSubmit} />
      <Table headers={['Name', 'Gender', 'Date of Birth', 'Contact Details', 'Fees Paid',"Edit","Delete" ]} data={students.map(s => ({
        name: s.name,
        gender: s.gender,
        dob: s.dob,
        contactDetails: s.contactDetails,
        feesPaid: s.feesPaid,
        Edit:<button className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'onClick={()=>{HandleEidt(s) }}>Edit</button>,
        Delete:<button className='bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'onClick={()=>{HandleDel(s._id)}}>Delete</button>
      }))} />
    </div>
  );
};

export default StudentManagement;
