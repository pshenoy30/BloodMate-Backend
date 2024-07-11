import mongoose from "mongoose";

const Schema = mongoose.Schema;
const inventorySchema = new Schema(
    {
        hospitalId: {type: String},
        bloodType: {type: String},
        qty: {type: Number},
        lastUpdated: {type: Date}
    }
)

export default mongoose.model('Inventory', inventorySchema);