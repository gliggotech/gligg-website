import mongoose from "mongoose";

const subscriberSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    subscribed:{
        type:Boolean,
        required:true
    }
})

export const subscribe=mongoose.models?.subscribe||mongoose.model("subscribe",subscriberSchema);