import express from 'express';
import { getDonorUsers, getRequestUsers } from '../controllers/userController.js';

const router = express.Router();

router.get("/donor/:city", getDonorUsers);
router.get("/requestor/:city", getRequestUsers);

export default router;