import mongoose from 'mongoose';
import type { Request, Response, NextFunction } from 'express';

import { logger } from '../common/logger';

const errorHandlerMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(error, error.message);

  let statusCode = res.statusCode || 500;

  if (
    error instanceof mongoose.MongooseError ||
    error instanceof mongoose.mongo.MongoError
  ) {
    statusCode = 400;
  }

  res.status(statusCode);
  res.json({ message: error.message, stack: error.stack });
  next();
};

export default errorHandlerMiddleware;
