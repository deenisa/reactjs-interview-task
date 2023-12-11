import React, { useState, useEffect } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";

const OneNote = ({ selectedNote, onCancel, onSaveChanges }) => {
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  useEffect(() => {
    if (selectedNote) {
      setEditedTitle(selectedNote.title);
      setEditedContent(selectedNote.content);
    }
  }, [selectedNote]);

  const handleCancel = () => {
    onCancel();
  };

  const handleSaveChanges = () => {
    onSaveChanges(editedTitle, editedContent);
  };

  // Render null if selectedNote is not available
  if (!selectedNote) {
    return null;
  }

  return (
    <OneNoteContainer>
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
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <TextArea
          placeholder="Add a note here"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        ></TextArea>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <SaveChanges
            style={{
              backgroundColor: "#EF6262",
              padding: "6px 8px 6px 25px",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#E06469")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#EF6262")}
            onClick={handleCancel}
          >
            <span style={{ marginRight: "16px" }}> Delete Note</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderLeft: "1px solid lightslategray",
              }}
            >
              <DeleteIcon
                style={{ color: "white", marginLeft: "6px", fontSize: "20px" }}
              />
            </div>
          </SaveChanges>
          <SaveChanges
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#7FAB25")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#95D03A")}
            onClick={handleSaveChanges}
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
      </div>
    </OneNoteContainer>
  );
};

export default OneNote;

const OneNoteContainer = styled.div`
  background-color: white;
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
  width: 1010px;
`;
const Box = styled.div`
  background-color: rgb(0, 105, 148);
  width: 120px;
  height: 32px;
  border-radius: 5px;
`;
const Input = styled.input`
  padding: 25px 6px 25px 0px;
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
  padding-top: 25px;
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
