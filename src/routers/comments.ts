import { Router } from "express";
import {
  getComments,
  createComment,
  editComment,
  removeComment,
} from "../controllers/comment";

const router = Router();

router
  .get("/", getComments)
  .post("/", createComment)
  .put("/", editComment)
  .delete("/", removeComment)

export { router };
