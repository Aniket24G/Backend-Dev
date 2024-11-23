import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
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
    },
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Address',
    },
},{timestamps:true})

export const User = mongoose.model('User',userSchema); // model is saved as 'users' as in db