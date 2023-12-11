import React, { useState, useEffect } from "react";
import DoneIcon from "@mui/icons-material/Done";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import styled from "styled-components";

const MainContent = ({ selectedCategory, openOneNote, selectedNote }) => {
  const [notes, setNotes] = useState([]);
  const [isCreateNoteMode, setCreateNoteMode] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteContent, setNewNoteContent] = useState("");
  // const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    if (selectedCategory && selectedCategory._id) {
      axios
        .get(`http://localhost:3002/categories/${selectedCategory._id}/notes`)
        .then((response) => setNotes(response.data.notes || []))
        .catch((error) => console.error("Error fetching notes:", error));
    }
  }, [selectedCategory]);

  const createNewNote = async () => {
    try {
      if (!selectedCategory || !selectedCategory._id) {
        console.error("No selected category");
        return;
      }

      const response = await axios.post(
        `http://localhost:3002/categories/${selectedCategory._id}/notes`,
        {
          title: newNoteTitle,
          content: newNoteContent,
        }
      );

      const { note } = response.data;
      setNotes((prevNotes) => [...prevNotes, note]);
      setNewNoteTitle("");
      setNewNoteContent("");
      toggleCreateNoteMode();
    } catch (error) {
      console.error("Error creating new note:", error);
    }
  };

  const handleNoteClick = (note) => {
    openOneNote(note);
    //setSelectedNote(note);
  };

  const toggleCreateNoteMode = () => {
    setCreateNoteMode(!isCreateNoteMode);
  };

  return (
    <MainArea selectedNote={selectedNote}>
      {/* If a category is selected, show the list of notes */}
      {selectedCategory && !isCreateNoteMode ? (
        <div>
          <div
            className="note-actions"
            style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
          >
            <CreateNote
              className="create-note-btn"
              onClick={() => {
                toggleCreateNoteMode();
                openOneNote(null);
              }}
            >
              <span style={{ marginRight: "44px", marginLeft: "20px" }}>
                Create Note
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderLeft: "1px solid lightslategray",
                }}
              >
                <AddIcon
                  style={{
                    color: "white",
                    marginLeft: "7px",
                    fontSize: "20px",
                  }}
                />
              </div>
            </CreateNote>

            <div
              className="search-bar"
              style={{ position: "relative", display: "flex" }}
            >
              <span
                className="search-icon"
                style={{ position: "absolute", left: "5px", top: "10%" }}
              >
                <SearchIcon
                  style={{
                    fontSize: "19px",
                    margin: "4px 3px",
                    color: "lightslategrey2",
                  }}
                />
              </span>
              <SearchInput type="text" placeholder="Search..." />
            </div>
          </div>
          {notes.map((note) => (
            <NoteItem
              key={note._id}
              className="note-item"
              isSelected={selectedNote && selectedNote._id === note._id}
              onClick={() => handleNoteClick(note)}
            >
              <h3 style={{ margin: "0px" }}>{note.title}</h3>
              <p style={{ margin: "0px", marginBottom: "5px" }}>
                {note.content}
              </p>
            </NoteItem>
          ))}
        </div>
      ) : (
        <div className="add-note-placeholder" style={{ height: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <Box></Box>
              <Box></Box>
              <Box
                style={{
                  backgroundColor: "#95D03A",
                }}
              ></Box>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <Box
                style={{
                  width: "32px",
                }}
              ></Box>
              <Box
                style={{
                  width: "32px",
                }}
              ></Box>
              <Box
                style={{
                  color: "#006994",
                  width: "32px",
                }}
              >
                .
              </Box>
            </div>
          </div>
          <Input
            type="text"
            placeholder="Add a title"
            value={newNoteTitle}
            onChange={(e) => setNewNoteTitle(e.target.value)}
          />
          <TextArea
            placeholder="Add a note here"
            value={newNoteContent}
            onChange={(e) => setNewNoteContent(e.target.value)}
          ></TextArea>
          <SaveChanges
            className="save-changes-btn"
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#7FAB25")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#95D03A")}
            onClick={() => createNewNote(selectedCategory?._id)}
          >
            <span style={{ marginRight: "12px" }}> Save Changes</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderLeft: "1px solid lightslategray",
              }}
            >
              <DoneIcon
                style={{ color: "white", marginLeft: "2px", fontSize: "20px" }}
              />
            </div>
          </SaveChanges>
        </div>
      )}
    </MainArea>
  );
};

export default MainContent;

const MainArea = styled.div`
  background-color: white;
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
  width: 1520px;
  width: ${({ selectedNote }) => (selectedNote ? "500px" : "1520px")};
  height: 899px;
`;
const Box = styled.div`
  background-color: rgb(0, 105, 148);
  width: 120px;
  height: 32px;
  border-radius: 5px;
`;
const Input = styled.input`
  padding: 30px 6px 30px 0px;
  width: 99%;
  border-top: none;
  border-right: none;
  border-bottom: 1px solid lightslategray;
  border-left: none;
  outline: none;
  font-size: 14px;
  font-family: open-sans;
  font-weight: 400;
`;
const TextArea = styled.textarea`
  width: 99%;
  padding-top: 30px;
  border: none;
  padding-left: 0px;
  height: 433px;
  outline: none;
  resize: none;
  font-size: 14px;
  font-family: open-sans;
  font-weight: 400;
  height: 715px;
`;
const SaveChanges = styled.button`
  display: flex;
  background-color: rgb(149, 208, 58);
  color: white;
  border-radius: 5px;
  padding: 6px 6px 6px 22px;
  font-size: 14px;
  align-items: center;
  border: none;
  cursor: pointer;
  float: right;
`;
const CreateNote = styled.button`
  display: flex;
  height: 32px;
  background-color: rgb(149, 208, 58);
  color: white;
  border-radius: 5px;
  padding: 1px 10px 1px 40px;
  font-size: 14px;
  align-items: center;
  border: none;
  cursor: pointer;
  width: 218px;
`;
const SearchInput = styled.input`
  padding-left: 32px;
  font-size: 14px;
  outline: none;
`;
const NoteItem = styled.div`
  border-bottom: 1px solid lightgray;
  font-size: 14px;
  color: gray;
  cursor: pointer;
  background-color: white;
  background-color: ${(props) => (props.isSelected ? "#DCE9F2" : "white")};
  padding-top: 5px;
`;
