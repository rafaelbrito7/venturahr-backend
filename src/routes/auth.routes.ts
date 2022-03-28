import { Router, Request, Response } from 'express';

import { login } from '../controllers/authController';

const authRouter = Router();

authRouter.post('/login', async (request: Request, response: Response) => {
  const { email, password } = request.body;

  try {
    const token = await login(email, password);

    return response
      .status(200)
      .json({ message: 'User logged with success!', token });
  } catch (err) {
    return response.status(403).json({ message: err });
  }
});

export { authRouter };
