const express = require('express');
const router = express.Router();
const Class = require('../models/Class');
const Teacher= require('../models/Teacher');

// Get all classes
router.get('/', async (req, res) => {
  const classes = await Class.find().populate('teacher studentList');
  res.send(classes);
});

// Get a single class
router.get('/:id', async (req, res) => {
  // const singleClass = await Class.findById(req.params.id).populate('teacher studentList');
  res.send(singleClass);
});

// Create a new class
router.post('/', async (req, res) => {
  // className, year,teacher,studentLimit studentList
let className=req.body.name;
let year= req.body.year;
let teacher=req.body.teacherId;
let studentLimit=req.body.studentLimit;


  const newClass = new Class({className,year,teacher,studentLimit}); 
  await newClass.save();
  res.send(newClass);
});

// Update a class
router.put('/:id', async (req, res) => {
  let className=req.body.name;
let year= req.body.year;
let teacher=req.body.teacherId;
let studentLimit=req.body.studentLimit;


  const newClass = new Class({className,year,teacher,studentLimit}); 
  await newClass.save();
  res.send(newClass);
});

// Delete a class
router.delete('/:id', async (req, res) => {
  await Class.findByIdAndDelete(req.params.id);
  res.send({ message: 'Class deleted' });
});

module.exports = router;
