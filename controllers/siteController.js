import Site from "../models/siteSchema.js";
import Inventory from "../models/inventorySchema.js";

const getSite = async (req, res, next) => {
    try{
        const sites =  await Site.find({city: req.params.city});
        if(sites.length > 0){
            return res.status(200).json(sites);
        } else{
            return res.status(404).send("Site not found");
        }
      } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
      }
}

const createSite = async (req, res, next) => {
    try{
        const sites =  await Site.find({city: req.params.city});
        const newSite = new Site(req.body);
        await newSite.save();
        return res.status(200).send("Site created");
      } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
      }
}

const deleteSite = async (req, res, next) => {
    try{
        const sites =  await Site.find({id: req.params.hospitalId});
        if(sites.length === 1){
            await Site.findOneAndDelete({id: req.params.hospitalId});
            await Inventory.find({hospitalId: req.params.hospitalId}).deleteMany();
            return res.status(204).send("Site deleted");
        } else{
            return res.status(404).send("Site not found");
        }
      } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
      }
}

export {getSite,createSite, deleteSite};