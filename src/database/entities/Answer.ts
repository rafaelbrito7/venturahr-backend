import { Schema, model } from 'mongoose';

import { IAnswer } from '../../types/Answer';

const AnswerSchema = new Schema<IAnswer>({
  date: {
    type: Date,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  
  { timestamps: true}
});

export default model('Answer', AnswerSchema);
