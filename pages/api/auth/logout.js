import { ErrorHandler, catchAsyncError } from "@/middlewares/error";
import { cookieSetter } from "@/utils/features";

const handler=catchAsyncError(async(req,res)=>{
    if (req.method !== "GET") {
        return ErrorHandler(res, 400, "Only get method is required");
      }

    cookieSetter(res,null,false)

    res.status(200).json({
        success:true,
        message:"Logged Out Successfully"
    })
})

export default handler