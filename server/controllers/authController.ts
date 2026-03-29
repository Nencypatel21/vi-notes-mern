import { Request, Response } from "express";
import * as authService from "../services/authService";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    await authService.registerUser(email, password);

    res.json({ message: "Registration successful" });
  } catch (error: any) {
    res.json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    await authService.loginUser(email, password);

    res.json({ message: "Login successful" });
  } catch (error: any) {
    res.json({ message: error.message });
  }
};