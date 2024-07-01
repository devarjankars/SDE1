const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');
const Student = require('../models/Student');

router.get('/', async (req, res) => {
  const { view = 'yearly', Month, year } = req.query;
 
  console.log(req.query);

  let startDate, endDate;

  if (view === 'monthly') {
    if(Month){
        const [year, month] = Month.split('-');
        startDate = new Date(year, month - 1, 1);
        endDate = new Date(year, month, 0);
    }
    startDate=0; endDate=0
   
   
  } else if (view === 'yearly') {
    startDate = new Date(year, 0, 1);
    endDate = new Date(year, 11, 31);
  }

  try {
    const teachers = await Teacher.find();
    const students = await Student.find();

    const expenses = teachers.reduce((acc, teacher) => acc + teacher.salary, 0);
    const income = students.reduce((acc, student) => acc + student.feesPaid, 0);

    res.json({ income, expenses });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
