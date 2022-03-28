/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const checkJwt = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(403).json({
      message: 'No token provided.',
    });
  }

  const token = authHeader.split(' ')[1];

  let jwtPayload;

  try {
    jwtPayload = <any>jwt.verify(token, process.env.JWT_SECRET as string);
    response.locals.jwtPayload = jwtPayload;
  } catch (error) {
    return response.status(401).send();
  }

  const { userId, name } = jwtPayload;
  const newToken = jwt.sign(
    { userId, name },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '2h',
    },
  );
  response.setHeader('token', newToken);

  next();
};
