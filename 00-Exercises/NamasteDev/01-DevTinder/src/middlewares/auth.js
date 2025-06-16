import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";

export const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Invalid Token!!");
    }
    const decodeObj = await jwt.verify(token, process.env.SECRECT_CODE);
    const { _id } = decodeObj;
    const user = await userModel.findById(_id);
    if (!user) {
      throw new Error("User not found!!");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
