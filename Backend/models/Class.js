const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
  className: { type: String, required: true },
  year: { type: Number, required: true },
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true },
  studentLimit: { type: Number, required: true },
  studentList: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Class', classSchema);
