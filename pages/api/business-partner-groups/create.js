import connectDB from "@/lib/mongodb";
import BusinessPartnerGroup from "@/models/BusinessPartnerGroup";

export default async function handler(req,res){
    try {
        if(req.method !=="POST"){
            return res.status(405).json({
                success: false,
                message: "This method not allowed",
            });
        }

        await connectDB();

        const {groupCode, groupName, description, isActive} = req.body;

        const existingGroup = await BusinessPartnerGroup.findOne({
            groupCode: groupCode.toUpperCase(),
        });

        if(existingGroup){
            return res.status(400).json({
                success: false,
                message: "Group Code already exists",
            })
        }

        const group = await BusinessPartnerGroup.create({
            groupCode :groupCode.toUpperCase(),
            groupName,
            description,
            isActive,
        });

        return res.status(201).json({
            success: true,
            group,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}