import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs"

const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        id: {type: Number},
        firstName: {type: String},
        lastName:{type: String},
        email: {type: String},
        gender: {type: String},
        lastDonated: {type: Date},
        bloodType: {type: String},
        availability: {type: Boolean},
        formSigned: {type: Date},
        userType:  {type: String},
        city: {type: String},
        userName: {type: String},
        password: {type: String},
        siteId: {type: Number}
    }  
);

userSchema.methods.generateHash = function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function validPassword(password) {
    return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('User', userSchema);