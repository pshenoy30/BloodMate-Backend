import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        id: {type: Number},
        firstName: {type: String},
        lastName:{type: String},
        email: {type: String, required: [true, "Please add the user email"], unique: [true, "Email address is already taken"]},
        birthDate: {type: Date},
        gender: {type: String},
        lastDonated: {type: Date},
        bloodType: {type: String},
        availability: {type: Boolean},
        formSigned: {type: Date},
        userType:  {type: String},
        city: {type: String},
        userName: {type: String, required: [true, "Please add the username"]},
        password: {type: String, required: [true, "Please add the password"]},
        siteId: {type: Number}
    }  
);

export default mongoose.model('User', userSchema);