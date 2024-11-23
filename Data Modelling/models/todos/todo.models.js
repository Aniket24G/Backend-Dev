import mongoose, { mongo } from "mongoose";

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'SubTodo',
        }
    ],
    status:{
        type:Boolean,
        default:false,
    },
},{timestamps:true})

export const Todo = mongoose.model("Todo",todoSchema)