import { Router, Request, Response } from 'express';

const healthCheckRouter = Router();

healthCheckRouter.get('/', async (request: Request, response: Response) => {
  return response.send('Application is alive!');
});

export { healthCheckRouter };
