import express from 'express';
import { getDonorUsers, getRequestUsers } from '../controllers/userController.js';

const router = express.Router();

router.get("/donor", getDonorUsers);
router.get("/requestor", getRequestUsers);

export default router;