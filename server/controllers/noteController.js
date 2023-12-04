import Category from "../models/Category.js";

const getNotesByCategoryId = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Notes fetched successfully", notes: category.notes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const categoryId = req.params.categoryId;
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    if (!category.notes) {
      category.notes = [];
    }
    const newNote = {
      title: title,
      content: content,
    };
    category.notes.push(newNote);
    await category.save();

    res.status(201).json({ message: "Note created successfully", note: newNote });
  } catch (error) {
    console.error('Error creating new note:', error);
    res.status(500).json({ message: error.message });
  }
};

export { getNotesByCategoryId, createNote };

