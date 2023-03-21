import { Router } from "express";
import {
  getComments,
  createComment,
  editComment,
  removeComment,
} from "../controllers/comment";

const router = Router();

router.get("/", getComments);
router.post("/", createComment);
router.put("/", editComment);
router.delete("/", removeComment);

export { router };
