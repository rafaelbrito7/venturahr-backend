import { Router } from 'express';

import { healthCheckRouter } from './healthCheck.routes';
import { userRouter } from './user.routes';

const routes = Router();

routes.use('/healthCheck', healthCheckRouter);
routes.use('/user', userRouter);

export { routes };
