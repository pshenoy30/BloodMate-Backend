import Inventory from "../models/inventorySchema.js";
import Site from "../models/siteSchema.js";

const getInventory = async (req, res, next) => {
    try{
        const inventories =  await Inventory.find().sort({"hospitalId": 1});
        return res.status(200).json({ data: inventories });
      } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
      }
}

const updateInventory = async (req, res, next) => {
    try{
        const inventory = await Inventory.find({ hospitalId: req.params.hospitalId, bloodType: req.params.bloodType});
        if(inventory){
            await Inventory.findOneAndUpdate({ hospitalId: req.params.hospitalId, bloodType: req.params.bloodType}, {qty: req.body.qty});
            return res.status(200).send("Updated the inventory");
        }else{
            return res.status(404).send("Inventory not found");
        }
      } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
      }
}

const createInventory = async (req, res, next) => {
    try{
        const exists = await Inventory.find({ hospitalId: req.body.hospitalId, bloodType: req.body.bloodType});
        if(exists.length === 0){
            const siteExists = await Site.find({ hospitalId: req.body.hospitalId});
                if (siteExists.length === 1){
                    const newInventory = new Inventory(req.body);
                    await newInventory.save();
                    return res.status(200).send("Inventory created")
                } else{
                    return res.status(404).send("Site doesnot exist")
                }
        }else{
            return res.status(403).send("Inventory already exists.");
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
}

export { getInventory, updateInventory, createInventory };