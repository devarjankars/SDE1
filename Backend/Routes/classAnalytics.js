const express = require('express');
const router = express.Router();
const Class = require('../models/Class');
const Teacher = require('../models/Teacher');
const Student = require('../models/Student');

router.get('/:id', async (req, res) => {
  try {
    const classId = req.params.id;
    const classData = await Student.find({"class":classId});
    
    const cls= await Class.findById(classData[0].class);
    const tnme=await Teacher.findById(cls.teacher);
    

    if (!classData) {
      return res.status(404).json({ error: 'Class not found' });
    }

    const maleStudents = classData.filter(student => student.gender === 'male'||student.gender === 'Male').length;
    const femaleStudents = classData.filter(student => student.gender === 'female'||student.gender === 'Female').length;
     
    const classAnalytics = {
    
      maleStudents,
      femaleStudents,
      Student:classData,
      className:cls,
      teacherName:tnme
    };

    res.json(classAnalytics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
