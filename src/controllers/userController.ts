import bcrypt from 'bcryptjs';

import { DuplicatedEntityError } from '../errors/DuplicatedEntityError';
import { NotFoundError } from '../errors/NotFoundError';
import { UserRepository } from '../repositories/user.repository';
import { IUser, IUserFields } from '../types/User';

export const createUser = async (user: IUserFields): Promise<IUser> => {
  const userRepository = new UserRepository();

  const checkIfUserExist = await userRepository.findByEmail(user.email);

  if (checkIfUserExist) throw new DuplicatedEntityError('User already exist.');

  const encryptedPassword = await bcrypt.hash(user.password, 10);

  const newUser: IUserFields = { ...user };
  newUser.password = encryptedPassword;

  const result = await userRepository.store(newUser);

  return result;
};

export const getAllUsers = async (): Promise<Array<IUser>> => {
  const userRepository = new UserRepository();

  const users = await userRepository.findAll();

  if (users.length === 0) throw new NotFoundError('User');

  return users;
};

export const getOneUser = async (id: string): Promise<IUser | null> => {
  const userRepository = new UserRepository();

  const user = await userRepository.findOne(id);

  if (!user) throw new NotFoundError('User');

  return user;
};
