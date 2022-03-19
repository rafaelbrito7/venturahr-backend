import { Schema, model } from 'mongoose';

const AnswerSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  jobVacancy: {
    type: Schema.Types.ObjectId,
    ref: 'JobVacancy',
  },
});

export default model('Answer', AnswerSchema);
