import bcrypt from 'bcryptjs';
import { Router, Request, Response } from 'express';
import User from 'src/models/User';

import { ErrorHandler } from '../helpers/errorHandler';

const authRouter = Router();

authRouter.post('/login', async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body;

    const user = await User.findOne({ email });

    if (!user) throw ErrorHandler('User does not exist.', 403);

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({
        user_id: user.id,
        email,
      });
    }
  } catch (error) {}
});
