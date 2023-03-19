import { Router } from "express";

const router = Router()


router.get("/", (req, res) => {
res.send("todos los videos")
})
router.get("/:id", (req, res) => {
  res.send("todos los videos "+req.params.id)
  })


export {router}