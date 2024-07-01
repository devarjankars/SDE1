const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());



mongoose.connect("mongodb+srv://dev1:oiUyfvYNfFmvzrQp@new1.p6bwflq.mongodb.net/?retryWrites=true&w=majority&appName=new1").then(()=>console.log("connected")).catch(err=>console.log(err));




const classRoutes = require('./Routes/classRoutes');
const teacherRoutes = require('./Routes/teacherRoutes');
const studentRoutes = require('./Routes/studentRoutes');
const Financial= require('./Routes/financialAnalytics')
const Classmgmt=require('./Routes/classAnalytics');

app.use('/api/classes', classRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/financial-analytics',Financial);
app.use('/api/class-analytics', Classmgmt);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
