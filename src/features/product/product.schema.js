import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
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
        required: false

    },
    category:{
        type: String,
        required: true
    },
    sizes:{
        type: [String],
        required: false,
        enum: ['XS','S','M','L','XL','XXXL']
    },
    inStock:{
        type: Number,
        required: false,
    },
    review:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    categories:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Category'

        }
]
})
