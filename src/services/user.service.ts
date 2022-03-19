import bcrypt from 'bcryptjs';

import { ErrorHandler } from '../helpers/errorHandler';
import { store, findByEmail, findAll } from '../repositories/user.repository';
import { IUser } from '../types/User';

export const createUser = async (user: IUser) => {
  const checkIfUserExist = await findByEmail(user.email);

  if (checkIfUserExist) throw ErrorHandler('User already exists.', 409);

  const encryptedPassword = await bcrypt.hash(user.password, 10);

  const newUser: IUser = { ...user };
  newUser.password = encryptedPassword;

  const result = await store(newUser);

  return result;
};

export const getAllUsers = async () => {
  const users = await findAll();

  if (!users) throw new Error('No users!');

  return users;
};
