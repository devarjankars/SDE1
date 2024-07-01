import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';

const ClassAnalytics = () => {
  const { id } = useParams();
  const [classData, setClassData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:5000/api/class-analytics/${id}`);
      console.log(response);
      setClassData(response.data);
    };
    fetchData();
  }, [id]);

  if (!classData) return <div>Loading...</div>;

  const maleCount = classData.maleStudents
  const femaleCount = classData.femaleStudents

  const chartData = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: 'Students',
        data: [maleCount, femaleCount],
        backgroundColor: ['#36A2EB', '#FF6384']
      }
    ]
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Class Analytics</h1>
      <div className="mb-4">
        <p><strong>Class Name:</strong> {classData.className?.className}</p>
        <p><strong>Year:</strong> {classData.className?.year}</p>
        <p><strong>Teacher:</strong> {classData.teacherName?.name}</p>
        
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Students List</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase">Gender</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase">Date of Birth</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase">Paid Fees</th>
            </tr>
          </thead>
          <tbody>
            {classData.Student.map(student => (
              <tr key={student._id}>
                <td className="py-2 px-4 border-b border-gray-200">{student.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{student.gender}</td>
                <td className="py-2 px-4 border-b border-gray-200">{student.dob}</td>
                <td className="py-2 px-4 border-b border-gray-200">Rs: {student.feesPaid
                }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Gender Distribution</h2>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default ClassAnalytics;
