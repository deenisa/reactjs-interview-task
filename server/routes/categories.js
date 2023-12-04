import express from "express";
import categoryController from "../controllers/categoryController.js";
import notesRouter from "./notes.js";

const router = express.Router();
router.get("/", categoryController.getAllCategories);
router.get("/:categoryId", categoryController.getCategoryById);
router.use("/:categoryId", notesRouter);

export default router;
