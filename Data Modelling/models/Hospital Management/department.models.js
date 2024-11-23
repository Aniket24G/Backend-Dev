import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    noOfEmployee:{
        type:Number,
        default:0,
    },
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital',
    },
},{timestamps:true});

export const Department = mongoose.model('Department',departmentSchema);