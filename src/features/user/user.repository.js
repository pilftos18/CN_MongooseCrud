import mongoose  from "mongoose";
import { userSchema } from "./user.schema.js";
import { ApplicationError } from "../../error-handler/applicationError.js";

//creating model from Schema
const UserModel = mongoose.model('User', userSchema);

export default class UserRepository{
    async signUp(user){
        try {
        //create a instance of Model
        const newUser = new UserModel(user);
        //save user to the database
        await newUser.save();
        return newUser
        }catch (error) {
           console.log(error);
           if(error instanceof mongoose.Error.ValidationError) {
                throw error;
           }else{
            throw new  ApplicationError('Sommething Went Wrong With database', 500);
           }
        }
    }

    async  singIn(email, password){
        try {
            return await UserModel.findOne({email, password});
        }catch (error) {
            console.log(error);
            throw new  ApplicationError('Sommething Went Wrong With database', 500);
        }
    }

     async findByEmail(email) {
        try{
            return await UserModel.findOne({email});
        }catch(err){
            console.log(err);
            throw new ApplicationError("Something went wrong with database", 500);
        }
    }

    async resetPassword(userID, newPassword) {
        try {
            let user = await UserModel.findById(userID);
            if(user){
                user.password = newPassword;
                await user.save();
                return true;
            }else{
                throw new Error("User not found");
            }
            
        } catch (error) {
            
        }

    }

};