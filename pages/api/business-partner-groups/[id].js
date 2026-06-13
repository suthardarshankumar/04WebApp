import connectDB from "@/lib/mongodb";
import BusinessPartnerGroup from "@/models/BusinessPartnerGroup";

export default async function handler(req, res) {
  try {
    await connectDB();
    const { id } = req.query;

    if (req.method === "GET") {
      const group = await BusinessPartnerGroup.findById(id);
      return res.status(200).json({
        success: true,
        group,
      });
    }

    if (req.method === "PUT") {
      const {groupName, description, isActive} = req.body
      const group = await BusinessPartnerGroup.findByIdAndUpdate(id, {
        groupName, 
        description, 
        isActive,
      }, {
        new: true,
      });
      return res.status(200).json({
        success: true,
        group,
      });
    }

    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
