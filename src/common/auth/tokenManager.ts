import jwt from 'jsonwebtoken';

import { AuthUser } from '../../models';
import config from '../../config';

export type TokenPayload = {
  user: AuthUser;
};

export const generateToken = (user: AuthUser) => {
  return jwt.sign({ user }, config.auth.JWT_SECRET, {
    expiresIn: config.auth.JWT_TOKEN_DURATION,
  });
};

export const verifyToken = (token: string) => {
  const decoded = jwt.verify(token, config.auth.JWT_SECRET);
  if (typeof decoded === 'string') {
    throw new Error('Failed to decode token');
  }
  return decoded as TokenPayload;
};
