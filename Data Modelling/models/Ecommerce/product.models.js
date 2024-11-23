import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
    },
    stock: {
        type:Number,
        default:0,
    },
    price: {
        type:Number,
        required:true,
        default:0,
    },
    image: {    //images are directly not stored in db as they are heavy, so they are stored in cloud and
        type:String,    //url is accessed
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
