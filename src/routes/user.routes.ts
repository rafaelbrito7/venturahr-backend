import { Router, Request, Response } from 'express';
// import * as yup from 'yup';

import { createUser, getAllUsers } from '../services/user.service';
// import { IUser } from '../types/User';

const userRouter = Router();

// const userSchema: yup.SchemaOf<IUser> = yup.object({
//   name: yup.string().required(),
//   address: yup.string().required(),
//   phoneNumber: yup.string().required(),
//   email: yup.string().email().required(),
//   password: yup.string().required(),
//   cpf: yup.string().optional(),
//   cnpj: yup.string().optional(),
//   socialReason: yup.string().optional(),
//   type: yup.string().required().defined(),
//   jobVacancies: yup.array().of(yup.string()).optional(),
//   token: yup.string().optional(),
// });

userRouter.post('/', async (request: Request, response: Response) => {
  const {
    name,
    address,
    phoneNumber,
    email,
    password,
    cpf,
    cnpj,
    socialReason,
    type,
  } = request.body;

  try {
    const user = await createUser({
      name,
      address,
      phoneNumber,
      email,
      password,
      cpf,
      cnpj,
      socialReason,
      type,
    });

    return response
      .status(200)
      .json({ message: 'User created with success!', user });
  } catch (error) {
    return response.status(403).json({ message: error });
  }
});

userRouter.get('/', async (request: Request, response: Response) => {
  try {
    const users = await getAllUsers();

    return response.status(200).json({ users });
  } catch (error) {
    return response.status(403).json({ error });
  }
});

export { userRouter };
