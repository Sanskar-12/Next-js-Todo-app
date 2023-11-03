import { User } from "@/models/User"
import jwt from "jsonwebtoken"

export const checkAuth=async(req)=>{

    const {token}=req.cookies

    const decoded=jwt.verify(token,process.env.JWT_SECRET)


    req.user=await User.findById(decoded._id)

}