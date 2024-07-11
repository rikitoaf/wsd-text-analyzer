import type { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import { comparePasswordHash, generateToken } from '../common/auth';
import { userServices } from '../services';

const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('email and password are required');
  }

  const user = await userServices.getUser({ email }, true );

  if (user && (await comparePasswordHash(password, user.password))) {
    res.json({
      token: generateToken(user),
    });
    return;
  }
  res.status(400);
  throw new Error('Invalid credentials');
});

export default {
  login,
};
