import connectDB from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const db = await connectDB();

    const users = await db.connection.db
      .collection("users")
      .find({})
      .limit(10)
      .toArray();

    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}