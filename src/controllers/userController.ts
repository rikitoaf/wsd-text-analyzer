import type { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import { userServices } from '../services';

import { extractPaginationParams } from './helper';

const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  res.json(await userServices.getAllUsers({ ...extractPaginationParams(req) }));
});

const getUserByID = asyncHandler(async (req: Request, res: Response) => {
  const user = await userServices.getUserByID(req.params.id);
  res.json(user);
});

const upsertUser = asyncHandler(async (req: Request, res: Response) => {
  const result = await userServices.upsertUser(req.body);
  res.json(result);
});

const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  res.json(await userServices.deleteUser(req.params.id));
});

export default {
  deleteUser,
  getAllUsers,
  getUserByID,
  upsertUser,
};
