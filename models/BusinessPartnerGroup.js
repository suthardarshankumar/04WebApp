import mongoose from "mongoose";

const BusinessPartnerGroupSchema = new mongoose.Schema(
  {
    groupCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    groupName: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    createdBy: {
      type: String,
      default: "",
    },

    updatedBy: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.BusinessPartnerGroup ||
  mongoose.model("BusinessPartnerGroup", BusinessPartnerGroupSchema);
