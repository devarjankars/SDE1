const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const Class =require ('../models/Class')

// Get all students
router.get('/', async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

// Get a single student
router.get('/:id', async (req, res) => {
  const student = await Student.findById(req.params.id)
  let id= student.class
  const cls=await Class.findById(id);
  console.log(cls);
  res.send({student,cls});
});

// Create a new student
router.post('/', async (req, res) => {
    const Name=req.body.class;
      console.log(req.body);
     const classN=await Class.find({"className":Name})
     console.log(classN);
     const id=classN[0]._id;
     const Obj={...req.body};

     
     Obj.class=id;
  const newStudent = new Student(Obj);
  await newStudent.save();
  res.send(newStudent);
});

// Update a student
router.put('/:id', async (req, res) => {
  const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updatedStudent);
});

// Delete a student
router.delete('/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send({ message: 'Student deleted' });
});

module.exports = router;
