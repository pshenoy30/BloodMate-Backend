import express from 'express';
import { getDonorUsers, getRequestUsers } from '../controllers/userController.js';

const router = express.Router();

<<<<<<< HEAD
router.get("/donor", getDonorUsers);
router.get("/requestor", getRequestUsers);
=======
router.get("/donor/:city", getDonorUsers);
router.get("/requestor/:city", getRequestUsers);
>>>>>>> develop

export default router;