import { Router } from "express";
import {
  getSets,
  getSetById,
  createSet,
  updateSet,
  deleteSet,
} from "../controllers/setController.js";

const router = Router();

router.get("/", getSets);
router.get("/:id", getSetById);
router.post("/", createSet);
router.put("/:id", updateSet);
router.delete("/:id", deleteSet);

export default router
