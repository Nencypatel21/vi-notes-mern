import User, { IUser } from "../models/User";

export const findByEmail = async (email: string): Promise<IUser | null> => {
  return await User.findOne({ email });
};

export const createUser = async (data: { email: string; password: string }): Promise<IUser> => {
  const user = new User(data);
  return await user.save();
};