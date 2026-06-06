import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  try {
    await connectDB();

    const existingUser = await User.findOne({
      userId: "SUPER0001",
    });

    if (existingUser) {
      return res.status(200).json({
        success: true,
        message: "SuperAdmin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(
      "Admin123",
      10
    );

    const user = await User.create({
      userId: "SUPER0001",
      userName: "Super Admin",
      password: hashedPassword,
      role: "SUPERADMIN",
      isActive: true,
    });

    return res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}