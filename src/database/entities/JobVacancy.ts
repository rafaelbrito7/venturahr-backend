import { Schema, model } from 'mongoose';

interface IJobVacancy {
  role: string;
  city: string;
  formOfContract: string;
  description: string;
  users: Array<string>[];
}

const JobVacancySchema = new Schema<IJobVacancy>({
  role: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  formOfContract: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

export default model('JobVacancy', JobVacancySchema);
