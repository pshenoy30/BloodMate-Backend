import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        id: {type: Number},
        firstName: {type: String },
        lastName: {type: String },
        userType: {type: String},
        gender: {type: String},
        email: {type: String },
        phone: {type: String },
        lastDonated: {type: String },
        bloodType: {type: String },
        availabilty: {type: String },
        formDate: {type: String }
    }
);


export default mongoose.model('User', userSchema);