import express from "express";

import {
  createNote,
  deleteNote,
  getNotes,
  getNotesOfUserId,
  updateNote,
} from "../controllers/note.js";

const router = express.Router();

router.get("/", getNotes);
router.get("/user/:userId", getNotesOfUserId);
router.post("/", createNote);
router.patch("/update/:noteId", updateNote);
router.delete("/delete/:noteId", deleteNote);

export default router;
