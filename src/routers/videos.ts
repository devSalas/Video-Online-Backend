import { Router } from "express";
import { getvideos, getvideosbyid, postvideos } from "../controllers/videos";

const router = Router()


router.post('/',postvideos)
router.get("/", getvideos)
router.get("/:id",getvideosbyid )

export {router}