import Inventory from "../models/inventorySchema.js";
import InventoryJson from "../data/inventory.json" assert {type: "json"};

const importInventoryData = async () => {
  try {
    await Inventory.deleteMany({});
    await Inventory.insertMany(InventoryJson);
    console.log("Inventory data successfully seeded");
    
  } catch (error) {
    console.log(error);
  }
}

export default importInventoryData;