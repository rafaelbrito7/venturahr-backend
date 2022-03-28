import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';

import { mongoDbConnection } from './database/mongoose';
import { routes } from './routes';

import 'dotenv/config';

const options: cors.CorsOptions = {
  origin: 'http://localhost:3000',
};

const app: Application = express();
app.use(cors(options));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

mongoDbConnection();

export { app };
