import { Schema,model } from "mongoose";

const videoSchema=new Schema({
    title:{type:String,require:true},
    description:{type:String,require:true},
    duration:{type:Date},
    views:{type:Number},
    qualification:{type:Number},
    category:{type:String},
    id_user:{type:Schema.Types.ObjectId,ref:'users',unique:true,require:true},
    url_video:{type:String,unique:true},
},{versionKey:false,timestamps:true})

const videoModel=model('video',videoSchema)

export default videoModel