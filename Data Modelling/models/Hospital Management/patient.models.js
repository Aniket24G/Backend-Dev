import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    doctorAssign:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
        required:true,
    },
    Age:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        enum:['Male','Female','Transgender'],
        required:true,
    },
    medicalHistory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'MedicalRecord',
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital',
    },
},{timestamps:true});

export const Patient = mongoose.model('Patient',patientSchema);