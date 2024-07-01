const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');

// Get all teachers
router.get('/', async (req, res) => {
  const teachers = await Teacher.find();
  res.send(teachers);
});

// Get a single teacher
router.get('/:id', async (req, res) => {
  const teacher = await Teacher.findById(req.params.id);
  res.send(teacher);
});

// Create a new teacher
router.post('/', async (req, res) => {
  const newTeacher = new Teacher(req.body);
  await newTeacher.save();
  res.send(newTeacher);
});

// Update a teacher
router.put('/:id', async (req, res) => {
  const newTeacher = new Teacher(req.body);
  await newTeacher.save();
  res.send(newTeacher);
});

// Delete a teacher
router.delete('/:id', async (req, res) => {
  await Teacher.findByIdAndDelete(req.params.id);
  res.send({ message: 'Teacher deleted' ,sucesss:true});
});

module.exports = router;
