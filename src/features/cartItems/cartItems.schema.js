import mongoose from "mongoose";

export const cartItemSchema = new mongoose.Schema({

    productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    quantity: { type: Number, required: true },
});