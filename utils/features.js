import mongoose from "mongoose";
import { serialize } from "cookie";
import jwt from "jsonwebtoken"

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Database connected on ${connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export const cookieSetter = (res, token, set) => {
  res.setHeader(
    "Set-Cookie",
    serialize("token", set ? token : "", {
      path: "/",
      httpOnly: true,
      maxAge: set ? 15 * 24 * 60 * 60 * 1000 : 0,
    })
  );
};

export const generateToken=(user)=>{
  return jwt.sign({_id:user._id},process.env.JWT_SECRET)
} 
