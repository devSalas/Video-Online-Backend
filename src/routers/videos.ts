import { Router } from "express";
import { getvideos, getvideosbyid, postvideos } from "../controllers/videos";

const router = Router()


router.post('/',postvideos)
router.get("/:id",getvideosbyid )
router.get("/", getvideos)

export {router}