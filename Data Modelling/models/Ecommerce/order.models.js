import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
    },
    quantity:{
        type:Number,
        required:true,
        default:1,
    },
});

const orderSchema = new mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    price:{
        type:Number,
        required:true,
    },
    items:[orderItemsSchema],
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Address',
        required:true,
    },
    status:{
        type:String,
        enum:['Pending','Cancelled','Delivered'],
        default:'Pending',
    },
},{timestamps:true})

export const Order = mongoose.model('Order',orderSchema);