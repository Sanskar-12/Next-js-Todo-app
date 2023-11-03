import { checkAuth } from "@/middlewares/auth";

const { catchAsyncError, ErrorHandler } = require("@/middlewares/error");
const { Task } = require("@/models/Task");
const { connectDb } = require("@/utils/features");

const handler = catchAsyncError(async (req, res) => {
  if (req.method !== "GET") {
    return ErrorHandler(res, 400, "Only get method is required");
  }
  await connectDb();

  await checkAuth(req)

const task=await Task.find({user:req.user._id})

  res.status(200).json({
    success: true,
    task,
  });
});

export default handler