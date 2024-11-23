import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    line1:{
        type:String,
        required:true,
    },
    line2:{
        type:String,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        rerquired:true,
    },
    pincode:{
        type:String,
        required:true,
    },
},{timestamps:true});

export const Address = mongoose.model('Address',addressSchema)