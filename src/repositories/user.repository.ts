import User from '../models/User';
import { IUser } from '../types/User';

export const store = async (user: IUser) => {
  const newUser = await User.create(user);

  return newUser;
};

export const findAll = async () => {
  const users = await User.find();

  return users;
};

export const findByEmail = async (email: string) => {
  const user = await User.findOne({ email });

  return user;
};
