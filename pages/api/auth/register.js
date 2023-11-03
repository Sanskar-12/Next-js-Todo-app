const { catchAsyncError, ErrorHandler } = require("@/middlewares/error");
const { User } = require("@/models/User");
const { connectDb, cookieSetter, generateToken } = require("@/utils/features");
import bcrypt from "bcrypt"

const handler = catchAsyncError(async (req, res) => {
  if (req.method !== "POST") {
    return ErrorHandler(res, 400, "Only Post method is required");
  }
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return ErrorHandler(res, 400, "Please Fill all Fields");
  }

  await connectDb();

  let user = await User.findOne({ email });

  if (user) {
    return ErrorHandler(res, 400, "User already exists");
  }

  const hashedPassword=await bcrypt.hash(password,10)

  user = await User.create({
    name,
    email,
    password:hashedPassword,
  });

  const token = await generateToken(user);

  cookieSetter(res, token, true);

  res.status(200).json({
    success: true,
    message: "User created",
  });
});

export default handler
