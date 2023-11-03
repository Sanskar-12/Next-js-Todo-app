import { checkAuth } from "@/middlewares/auth";
import { ErrorHandler, catchAsyncError } from "@/middlewares/error";
import { Task } from "@/models/Task";
import { connectDb } from "@/utils/features";

const handler = catchAsyncError(async (req, res) => {
  if (req.method !== "POST") {
    return ErrorHandler(res, 400, "Only Post method is required");
  }
  await connectDb();

  const { title, description } = req.body;

  await checkAuth(req)

  const task = await Task.create({
    title,
    description,
    user: req.user._id,
  });

  res.status(200).json({
    success: true,
    task,
  });
});

export default handler;
