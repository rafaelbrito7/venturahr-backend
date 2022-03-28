import { Router, Request, Response } from 'express';

import {
  createUser,
  getAllUsers,
  getOneUser,
} from '../controllers/userController';
import { DuplicatedEntityError } from '../errors/DuplicatedEntityError';
import { NotFoundError } from '../errors/NotFoundError';

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
    createdId,
  } = request.body;

  try {
    const result = await createUser({
      name,
      address,
      phoneNumber,
      email,
      password,
      cpf,
      cnpj,
      socialReason,
      type,
      createdId,
    });

    return response.status(200).json(result);
  } catch (error: any) {
    if (error instanceof DuplicatedEntityError)
      return response.status(error.statusCode).json({
        name: error.name,
        message: error.message,
        statusCode: error.statusCode,
        stack: error.stack,
      });
  }
});

userRouter.get('/', async (request: Request, response: Response) => {
  try {
    const users = await getAllUsers();

    return response.status(200).json(users);
  } catch (error: any) {
    if (error instanceof NotFoundError) {
      return response.status(error.statusCode).json(error);
    }
    return response.status(500).json(error);
  }
});

userRouter.get('/:uuid', async (request: Request, response: Response) => {
  const { uuid } = request.params;
  try {
    const user = await getOneUser(uuid);

    return user;
  } catch (error: any) {
    if (error instanceof NotFoundError) {
      return response.status(error.statusCode).json(error);
    }
    return response.status(500).json(error);
  }
});

userRouter.delete(':/uuid', async (request: Request, response: Response) => {
  const { uuid } = request.params;
  try {
    const user = await getOneUser(uuid);

    return user;
  } catch (error: any) {
    if (error instanceof NotFoundError) {
      return response.status(error.statusCode).json(error);
    }
    return response.status(500).json(error);
  }
});

export { userRouter };
