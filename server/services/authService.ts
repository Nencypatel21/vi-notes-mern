import * as userRepo from "../repositories/userRepository";

export const registerUser = async (email: string, password: string) => {
  const existingUser = await userRepo.findByEmail(email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  return await userRepo.createUser({ email, password });
};

export const loginUser = async (email: string, password: string) => {
  const user = await userRepo.findByEmail(email);

  if (!user || user.password !== password) {
    throw new Error("Invalid credentials");
  }

  return user;
};