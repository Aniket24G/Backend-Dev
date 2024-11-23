import mongoose, { mongo } from "mongoose";

const worksAtSchema = new mongoose.Schema({
    hospital:mongoose.Schema.Types.ObjectId,
    ref:'Hospital',
})

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    department:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Department',
    },
    education:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    },
    hospital:[worksAtSchema],
},{timestamps:true});

export const Doctor = mongoose.model('Doctor',doctorSchema);