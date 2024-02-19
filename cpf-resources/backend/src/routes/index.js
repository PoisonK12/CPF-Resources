import floorRoutes from "./floorRoutes.js"
import setRoutes from "./setRoutes.js"
import { Router } from "express"

const router = Router()

router.use("/floors", floorRoutes)
router.use("/sets", setRoutes)

export default router
