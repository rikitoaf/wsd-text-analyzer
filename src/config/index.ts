import { corsConfig } from './cors';

const auth = {
  BCRYPT_SALT: process.env.BCRYPT_SALT || '10',
  JWT_SECRET: process.env.JWT_SECRET || 'jwt_secret_123',
  JWT_TOKEN_DURATION: process.env.JWT_TOKEN_DURATION || '1d',
} as const;

const config = {
  DB_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/ps',
  PORT: process.env.PORT || '5000',
  auth,
  corsConfig,
} as const;

export default config;
