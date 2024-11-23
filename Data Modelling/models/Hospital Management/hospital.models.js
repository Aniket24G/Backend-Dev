import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    speciality:{
        type:String,
        enum:['Multi','Heart','ENT','Bone','Dental','Child'],
        default:'Multi',
    },
    noOfBeds:{
        type:Number,
        default:0,
    },
},{timestamps:true})

export const Hospital = mongoose.model('Hospital',hospitalSchema)