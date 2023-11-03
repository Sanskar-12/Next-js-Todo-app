import { checkAuth } from "@/middlewares/auth";
import { User } from "@/models/User";
import { connectDb } from "@/utils/features";

const { catchAsyncError, ErrorHandler } = require("@/middlewares/error");

const handler = catchAsyncError(async (req, res, next) => {
  if (req.method !== "GET") {
    return ErrorHandler(res, 400, "Only get method is required");
  }
  await connectDb();

  await checkAuth(req);

  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

export default handler;
