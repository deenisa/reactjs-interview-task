import React, { useState, useEffect } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import styled from "styled-components";

const Sidebar = ({ selectedCategory, handleCategoryClick, selectedNote }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <SideBar>
      <CreateCategory className="create-category-btn">
        Create Category
        <IconContainer>
          <AddIcon
            style={{ color: "white", marginLeft: "2px", fontSize: "20px" }}
          />
        </IconContainer>
      </CreateCategory>
      {categories.map((category) => (
        <Category
          key={category._id}
          isSelected={selectedCategory?._id === category._id}
          onClick={() => handleCategoryClick(category)}
        >
          <span className="folder-icon">
            <FolderIcon
              style={{
                color:
                  selectedCategory?._id === category._id ? "black" : "white",
                fontSize: "32px",
              }}
            />
          </span>
          <span
            className="category-name"
            style={{ marginLeft: "10px", width: "230px" }}
          >
            {category.name}
            {`(${category.notes.length})`}
          </span>
          <span className="arrow-icon">
            {selectedCategory?._id === category._id ? (
              <ArrowRightRoundedIcon
                style={{ color: "black", marginLeft: "40px", fontSize: "30px" }}
              />
            ) : (
              <ArrowDropDownRoundedIcon
                style={{ color: "white", marginLeft: "40px", fontSize: "30px" }}
              />
            )}
          </span>
        </Category>
      ))}
    </SideBar>
  );
};

export default Sidebar;

const SideBar = styled.div`
  height: 899px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  width: 370px;
  overflow: hidden auto;
`;
const CreateCategory = styled.button`
  width: 100%;
  background-color: rgb(149, 208, 58);
  color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  padding: 6px 2px 6px 116px;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
  border: none;
  cursor: pointer;
`;
const Category = styled.div`
  border-radius: 5px;
  background-color: ${(props) => (props.isSelected ? "#f5f5f5" : "#006994")};
  color: ${(props) => (props.isSelected ? "black" : "white")};
  margin-bottom: 10px;
  display: flex;
  padding: 2px 6px;
  font-size: 14px;
  align-items: center;
  cursor: pointer;
  height: 38px;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid lightslategray;
  padding: 0px 3px;
`;
