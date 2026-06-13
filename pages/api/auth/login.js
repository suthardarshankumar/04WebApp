import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({
        success: false,
        message: "Method Not Allowed",
      });
    }
    await connectDB();

    const { userId, password } = req.body;

    const user = await User.findOne({ userId: userId.toUpperCase() });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid userId",
      });
    }

    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: "User is not active",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        userId: user.userId,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30m" },
    );

    const cookie = serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60, // 30 minutes
    });

    res.setHeader("Set-Cookie", cookie);
    return res.status(200).json({
      success: true,
      user: {
        userId: user.userId,
        userName: user.userName,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
