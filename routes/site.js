import { getSite, createSite, deleteSite } from "../controllers/siteController.js"
import express from 'express';

const router = express.Router();

router.get("/:city", getSite);
router.post("/", createSite);
router.delete("/:hospitalId", deleteSite);

export default router;