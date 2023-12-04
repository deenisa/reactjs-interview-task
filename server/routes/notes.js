
// routes/notes.js file
import express from "express";
import { getNotesByCategoryId, createNote } from "../controllers/noteController.js";
const router = express.Router({ mergeParams: true });

router.get("/", getNotesByCategoryId);
router.post("/", createNote);


export default router;

