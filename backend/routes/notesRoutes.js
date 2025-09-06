import express from "express";
import { createNote, getAllNotes } from "../controllers/notesController.js";

const router = express.Router();

router.get("/sth", getAllNotes);

router.post("/", createNote);

router.put("/:id", (req, res) => {
  res.status(201).json({
    msg: "note just updateed successfully",
  });
});

router.delete("/:id", (req, res) => {
  res.status(201).json({
    msg: "note just deleted successfully",
  });
});

export default router;
