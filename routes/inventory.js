import express from 'express';
import { getInventory, updateInventory, createInventory} from '../controllers/inventoryController.js';

const router = express.Router();

router.get("/", getInventory).post("/", createInventory);
router.put("/:hospitalId/:bloodType", updateInventory);

export default router;