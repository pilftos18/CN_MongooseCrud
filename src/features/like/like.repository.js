import mongoose from "mongoose";
import { likeSchema } from "./like.schema.js";
import { ObjectId } from "mongodb";
import { ApplicationError } from "../../error-handler/applicationError.js";
const LikeModel = mongoose.model('Like',likeSchema)

export default class  LikeRepository{

    async getLikes(type, id){
        return await LikeModel.find({
            likekable : new ObjectId(id),
            types : type
        }).populate('user').populate({path:'likekable', model:type})
    }

    async likeProduct(userID, ProductId){
        try {
            const newLike = new LikeModel({
                user: new ObjectId(userID),
                likekable: new ObjectId(ProductId),
                types:'Product'
            })

            await newLike.save();
            
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);    
        }

    }

    async likeCategory(userID, categoryId){
        try {
            const newLike  = new LikeModel({
                user : new ObjectId(userID),
                likekable: new ObjectId(categoryId),
                types:'Category'
            })
            await newLike.save();  

        } catch (error) {
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500); 
        }
    }

}