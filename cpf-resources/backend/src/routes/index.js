import floorRoutes from "./floorRoutes.js"
import setRoutes from "./setRoutes.js"
import archiveRoutes from "./archiveRoutes.js"
import { Router } from "express"

const router = Router()

router.use("/floors", floorRoutes)
router.use("/sets", setRoutes)
router.use("/archives", archiveRoutes)

export default router