import { Request, Response } from "express";
import { authSchema } from "../models/authschema";

//registercontroller
const authRegister = async (req: Request, res: Response) => {
  try {
    const { username } = req.body;
    const userExist = await authSchema.findOne({ username });
    if (userExist) {
      return res.json({
        success: false,
        message: "user already exist please use unique username",
      });
    } else {
      await authSchema.create(req.body);
      res.json({ success: true, message: "register successfull" });
    }
  } catch (error) {}
};

//logincontroller
const authLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const userExist = await authSchema.findOne({ username });
  if (userExist) {
    if (userExist.password === password) {
      res.json({
        success: true,
        message: "login successfull",
        userid: userExist._id,
      });
    } else {
      res.json({ success: false, message: "wrong credentials" });
    }
  } else {
    res.json({ success: false, message: "user not found" });
  }
};

export { authLogin, authRegister };
