import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export default async function handler(req, res) {
  try {
    await connectDB();

    const count = await User.countDocuments();

    return res.status(200).json({
      success: true,
      totalUsers: count,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}