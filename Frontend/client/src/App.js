import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import OneNote from "./components/OneNote";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedNote(null);
  };

  const openOneNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <div className="App">
      <Navbar />
      <div
        style={{ padding: "10px", backgroundColor: "#E8E9EB", display: "flex" }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
          selectedNote={selectedNote}
        />
        <MainContent
          selectedCategory={selectedCategory}
          selectedNote={selectedNote}
          openOneNote={openOneNote}
        />
        {selectedNote && (
          <OneNote
            selectedNote={selectedNote}
            onCancel={() => setSelectedNote(null)}
            onSaveChanges={(editedTitle, editedContent) => {
              setSelectedNote(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
