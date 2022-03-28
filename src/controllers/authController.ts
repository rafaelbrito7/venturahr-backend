import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import 'dotenv/config';

import { BadRequest } from '../errors/BadRequest';
import { ForbiddenError } from '../errors/ForbiddenError';
import { NotFoundError } from '../errors/NotFoundError';
import { UserRepository } from '../repositories/user.repository';

export const login = async (email: string, password: string) => {
  const userRepository = new UserRepository();

  if (!(email && password))
    throw new BadRequest('Email and password are required.');

  const user = await userRepository.findByEmail(email);

  if (!user) throw new NotFoundError('User');

  if (!(await bcrypt.compare(password, user.password)))
    throw new ForbiddenError('Password is not correct.');

  const token = jwt.sign(
    {
      user_id: user,
      email,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: '2h' },
  );

  return token;
};
