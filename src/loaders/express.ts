import cors from 'cors';
import express, { Application } from 'express';

import { routes } from '../routes/index';

const port = 8000;

const expressLoader = (): Application => {
  const options: cors.CorsOptions = {
    origin: 'http://localhost:3000',
  };

  const app: Application = express();
  app.use(cors(options));
  app.use(express.json({ limit: '50mb' }));
  app.use(routes);

  return app;
};

const expressListen = (app: Application) => {
  app.listen(port, () => {
    console.log('Server is running on port: ', port);
  });
};

export { expressLoader, expressListen };
