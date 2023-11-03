const { catchAsyncError, ErrorHandler } = require("@/middlewares/error");
const { User } = require("@/models/User");
const { connectDb, generateToken, cookieSetter } = require("@/utils/features");
import bcrypt from "bcrypt";

const handler = catchAsyncError(async (req, res) => {
  if (req.method !== "POST") {
    return ErrorHandler(res, 400, "Only Post method is required");
  }
  const { email, password } = req.body;

  if (!email || !password) {
    return ErrorHandler(res, 400, "Please Fill all Fields");
  }

  await connectDb();

  const user = await User.findOne({email}).select("+password")

  if (!user) {
    return ErrorHandler(res, 400, "Invalid Email or Password");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return ErrorHandler(res, 400, "Invalid Email or Password");
  }

  const token = await generateToken(user);

  cookieSetter(res, token, true);

  res.status(200).json({
    success: true,
    message: `Welcome back ${user.name}`,
  });
});

export default handler;
