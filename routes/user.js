import express from 'express';
import { currentUser, getDonorUsers, getRequestUsers, getUser, postUser } from '../controllers/userController.js';
import validateToken from '../controllers/middleware/validateTokenHandler.js';

const router = express.Router();

router.get("/donor/:city", getDonorUsers);
router.get("/requestor/:city", getRequestUsers);
router.post("/login", getUser);
router.post("/register", postUser);
router.get("/profile", validateToken, currentUser);
export default router;