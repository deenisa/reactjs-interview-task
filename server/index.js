import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import categoriesRoutes from "./routes/categories.js"; // Update the path accordingly
import notesRoutes from "./routes/notes.js"; // Update the path accordingly

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/categories/:categoryId/notes", notesRoutes);


app.post('/test', (req, res) => {
  res.send('Test route');
});
const PORT = process.env.PORT || 6001;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    try {
      // MongoDB insert operation one time
      // await Category.insertMany(categories);
      // await Note.insertMany(categories.notes);
      console.log('Data inserted successfully.');
    } catch (error) {
      console.error('Error inserting data:', error);
    }
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
