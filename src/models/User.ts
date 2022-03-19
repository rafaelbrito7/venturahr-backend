import { Schema, model } from 'mongoose';

import { IUser } from '../types/User';

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
    },
    cnpj: {
      type: String,
    },
    socialReason: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
    jobVacancies: [
      {
        type: Schema.Types.ObjectId,
        ref: 'JobVacancy',
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default model('User', UserSchema);
