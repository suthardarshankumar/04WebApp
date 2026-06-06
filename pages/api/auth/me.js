import connectDB from "@/lib/mongodb"
import User from "@/models/User"
import jwt from "jsonwebtoken"

export default async function handler(req, res){
  try {
    await connectDB()
    const token = req.cookies.token

    if(!token) {
      return res.status(401).json({success: false, message: "Unauthorized"})
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findById(decoded.id);
    if(!user){
      return res.status(404).json({success: false, message: "User not found"})
    }

    return res.status(200).json({success:true,user: {
      userId: user.userId,
      userName: user.userName,
      role: user.role,
    },})
  } catch (error){
    return res.status(500).json({success: false, message: "Server error"})
  }
}