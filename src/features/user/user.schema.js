import mongoose from "mongoose";

export const userSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    type : {
        type: String,
        required: true,
        enum: ['Seller', 'Customer']
    }

})