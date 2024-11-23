import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
    mobile:{
        type:Number,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10,
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
},{timestamps:true});

export const User = mongoose.model('User',userSchema);