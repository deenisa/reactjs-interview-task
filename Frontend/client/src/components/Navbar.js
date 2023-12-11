import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <div style={{ color: "white" }}>Your Notes</div>
      <div>
        <CloseIcon style={{ color: "white" }} />
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: black;
  align-items: center;
  font-size: 16px;
  height: 50px;
  padding: 0px 20px;
`;
