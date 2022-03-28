import { Schema, model } from 'mongoose';

import { IUser, userType } from '../../types/User';

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    cpf: {
      type: String,
      trim: true,
      required: false,
    },
    cnpj: {
      type: String,
      trim: true,
      required: false,
    },
    socialReason: {
      type: String,
      trim: true,
      required: false,
    },
    type: {
      type: String,
      enum: [userType.Admin, userType.Contractor, userType.Candidate],
      required: true,
      trim: true,
    },
    createdId: {
      type: String,
      required: true,
      trim: true,
    },
    updatedId: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model('User', UserSchema);
