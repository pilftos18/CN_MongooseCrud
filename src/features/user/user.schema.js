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
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "please Enter a valid email address"]
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        validate:{
            validator: function(v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
            },
            message: "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        }
    },
    type : {
        type: String,
        required: true,
        enum: ['Seller', 'Customer']
    }

})