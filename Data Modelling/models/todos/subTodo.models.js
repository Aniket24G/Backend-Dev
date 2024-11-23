import mongoose, { mongo } from "mongoose";

const subTodoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        default:false,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
},{timestamps:true})

export const SubTodo = mongoose.model('SubTodo',subTodoSchema);