import mongoose from 'mongoose';

import config from './config';

import { logger } from './common/logger';

export default async function connectMongoDB() {
  try {
    await mongoose.connect(config.DB_URI);
    logger.info('mongodb connection successful');
  } catch (error) {
    logger.fatal(error, 'failed to connect to mongodb');
  }
}
