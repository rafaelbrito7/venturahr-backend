import { Schema, model } from 'mongoose';

const CriteriaSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
});
