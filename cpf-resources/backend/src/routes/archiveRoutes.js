import { Router } from "express";
import {
  getArchives,
  getArchiveById,
  createArchive,
  updateArchive,
  deleteArchive,
} from "../controllers/archiveController.js";

const router = Router();

router.get("/", getArchives);
router.get("/:id", getArchiveById);
router.post("/", createArchive);
router.put("/:id", updateArchive);
router.delete("/:id", deleteArchive);

export default router;