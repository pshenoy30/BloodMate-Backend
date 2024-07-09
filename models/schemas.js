import { Int32 } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        name: {type: String, required:true},
        type: {type: String,required:true},
        email: {type: String, required:true},
        phone: {type: String, required:true},
        lastDonated: {type: String, required:true},
        bloodType: {type: String, required:true},
        Availabilty: {type: String, required:true},
        RegisterDate: {type:Date, default: Date.now}
    }
)

const hospitalSchema = new Schema(
    {
        name: {type: String, required:true},
        id: {type: Int32,required:true},
        email: {type: String, required:true},
        phone: {type: String, required:true},
        lat: {type: Int32,required:true},
        lon: {type: Int32,required:true},
        RegisterDate: {type:Date, default: Date.now}
    }
)

const inventorySchema = new Schema(
    {
        hospitalId: {type: String},
        bloodType: {type: String},
        qty: {type: Int32},
        donatationNeed: {type: String},
        donate: {type: String},
        lastUpdated: {type: Date}
    }
)

const Users = mongoose.model('Users', userSchema,'users');
const Hospital = mongoose.model('Hospital', hospitalSchema,'hospital');
const Inventory = mongoose.model('Inventory', inventorySchema,'bloodInventory')

export {Users, Hospital, Inventory};