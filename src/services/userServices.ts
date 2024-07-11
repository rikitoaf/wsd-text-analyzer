import { logger } from '../common/logger';
import { getPasswordHash } from '../common/auth';
import { PageResult, PaginationModel } from '../common/types';
import { User, UserDocument } from '../models';
import { UserModel } from '../models';

const getAllUsers = async ({
  page = 0,
  pageSize = 20,
}: PaginationModel): Promise<PageResult<UserDocument>> => {
  const [results, total] = await Promise.all([
    UserModel.find({ deleted: false })
      .select('-password')
      .sort({ createdAt: -1 })
      .skip(page * pageSize)
      .limit(pageSize),
    UserModel.countDocuments({ deleted: false }),
  ]);

  return { results, total };
};

const getUserByID = (_id: string) => getUser({ _id });

const getUser = (
  findBy: Partial<Pick<User, '_id' | 'email'>>,
  password = false
) =>
  UserModel.findOne({ deleted: false, ...findBy }).select(
    password ? '' : '-password'
  );

const upsertUser = async (userData: Partial<User>) => {
  if (userData._id) {
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: userData._id },
      {
        ...userData,
        ...(userData.password
          ? { password: await getPasswordHash(userData.password) }
          : {}),
      },
      { new: true }
    );

    if (updatedUser) {
      return updatedUser;
    }
  }

  if (!userData.password) {
    throw new Error('Password is required!!!!');
  }
  const newUser = new UserModel({
    ...userData,
    password: await getPasswordHash(userData.password),
  });
  await newUser.save();

  logger.info(
    newUser,
    `New ${newUser.role} user created ${newUser._id} ${newUser.email}`
  );

  return newUser;
};

const deleteUser = async (userId: string) => {
  try {
    const deletedUser = await UserModel.findOneAndDelete({
      _id: userId,
    });

    if (deletedUser) {
      return { message: 'User deleted successfully' };
    }
    throw new Error('User not found');
  } catch (error) {
    throw new Error('Internal Server Error');
  }
};

export default {
  deleteUser,
  getAllUsers,
  getUser,
  getUserByID,
  upsertUser,
};
