import connectDB from "@/lib/mongodb";
import BusinessPartnerGroup from "@/models/BusinessPartnerGroup";

export default async function handler(req, res){
    try {
        await connectDB();
        const groups = await BusinessPartnerGroup.find().sort({groupCode:1,});
        return res.status(200).json({
            success: true,
            groups,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}