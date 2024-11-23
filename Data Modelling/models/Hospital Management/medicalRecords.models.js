import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    bloodGroup: {
      type: String,
      required: true,
    },
    diagnosedWith: {
      type: String,
      rerquired: true,
    },
    allergies: [{ type: String }],
    history: {
        type:String,
    },
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);