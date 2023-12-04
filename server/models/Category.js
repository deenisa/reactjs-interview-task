import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const CategorySchema = new mongoose.Schema({
  name: String,
  notes: [NoteSchema], // Embed the NoteSchema within the CategorySchema
});

const Category = mongoose.model("Category", CategorySchema);

export default Category;
