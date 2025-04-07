import mongoose  from "mongoose";

export const likeSchema =  new mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    likekable:{
        type:mongoose.Schema.Types.ObjectId,
        refPath: 'types'   //name can be anything
    },
    types:{
        type: String,
        enum: ['Product', 'Category']
    }
}).pre('save', (next)=>{
    console.log("New Like Coming in");
    next();
}).post('save', (doc)=>{
    console.log("Like is Saved");
    console.log(doc);  
}).pre('find', (next)=>{
    console.log("Retriving Likes");
    next();
}).post('find', (docs)=>{
    console.log("Find is Completes");
    console.log(docs);
    
})