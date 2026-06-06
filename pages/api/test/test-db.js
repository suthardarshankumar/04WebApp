import connectDB from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    await connectDB();

    res.status(200).json({
      success: true,
      message: "MongoDB Connected Successfully",
    });
  } catch (error) {
    console.error("DATABASE ERROR:", error);

    res.status(500).json({
      success: false,
      error: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
}