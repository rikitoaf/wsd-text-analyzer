import * as dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express, { Request, Response } from 'express';
import pinoHttp from 'pino-http';

import connectMongoDB from './db';
import configureRoutes from './routes';
import config from './config';

import { errorHandlerMiddleware } from './middlewares';
import { logger } from './common/logger';

const app = express();

app.use(pinoHttp({ logger }));

app.use(express.json());

app.use(cors(config.corsConfig));

connectMongoDB();

app.get('/_status', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK' });
});

configureRoutes(app);

app.use(errorHandlerMiddleware);

app.listen(config.PORT, () => {
  logger.info(`Server is running on port ${config.PORT}`);
});
