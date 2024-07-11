import mongoose from "mongoose";

const Schema = mongoose.Schema;
const siteSchema = new Schema(
    {
        id: {type: Number},
		address1: {type: String},
		city: {type: String},
        province: {type: String},
        postalCode: {type: String},
		country: {type: String},
        fullAddress: {type: String},
		providerType: {type: String},
        latitude: {type: Number},
        longitude: {type: Number},
        plasma:  {type: String},
        blood:  {type: String},
        platelet:  {type: String},
        phoneNumber:  {type: String},
        appointmentNeeded:  {type: String},
        sunStart:  {type: String},
        sunEnd:  {type: String},
        monStart:  {type: String},
        monEnd:  {type: String},
        tueStart: {type: String},
        tueEnd:  {type: String},
        wedStart:  {type: String},
        wedEnd:  {type: String},
        thurStart:  {type: String},
        thurEnd:  {type: String},
        friStart: {type: String},
        friEnd:  {type: String},
        satStart:  {type: String},
        satEnd:  {type: String},
        notes:  {type: String}
    }
);

export default mongoose.model('Site', siteSchema);

