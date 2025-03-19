import mongoose from "mongoose";

export const productSchmea = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true

    },
    category:{
        type: String,
        required: true
    },
    sizes:{
        type: [String],
        required: true,
        enum: ['XS','S','M','L','XL','XXXL']
    },
    inStock:{
        type: Number,
        required: true,
    }
})
