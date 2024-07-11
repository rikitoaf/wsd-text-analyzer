import bcrypt from 'bcryptjs';

import config from '../../config';

export const comparePasswordHash = async (
  providedPassword: string,
  hashedPassword: string
): Promise<boolean> => await bcrypt.compare(providedPassword, hashedPassword);

export const getPasswordHash = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(parseInt(config.auth.BCRYPT_SALT));
  return await bcrypt.hash(password, salt);
};
