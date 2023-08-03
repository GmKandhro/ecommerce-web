import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import {
  AddShoppingCartOutlined,
  
} from "@mui/icons-material";

const Container = styled.div`
  height: 60px;
  // background-color: azure;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;

  justify-content: flex-end;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <span className="language">EN</span>
          <div className="search-container">
            <input type="text" className="input" />
            <SearchIcon style={{color:"gray",fontSize:"14px"}} />
          </div>
        </Left>
        <Center>
          <h1>GK STORE.</h1>
        </Center>
        <Right>
          <div className="menuItem">REGISTER</div>
          <div className="menuItem">SIGN IN </div>
          <div className="menuItem">
            <Badge badgeContent={4} color="primary">
              <AddShoppingCartOutlined />
            </Badge>
          </div>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
