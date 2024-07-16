import express from 'express';
import { getDonorUsers, getRequestUsers, getUser, postUser } from '../controllers/userController.js';

const router = express.Router();

router.get("/donor/:city", getDonorUsers);
router.get("/requestor/:city", getRequestUsers);
router.get("/login", getUser);
router.post("/register", postUser);
export default router;