import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png";
import { height } from "@mui/system";
import DrawerComp from "./Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

let isLogInStatus = localStorage.getItem("isLogIn")
  ? JSON.parse(localStorage.getItem("isLogIn"))
  : [];
console.log(isLogInStatus);
const Navlist = styled.a`
  text-decoration: none;
`;
const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 1rem;
    position relative;
    padding: 10px;
    border-radius:10px;
    &:hover, &:focus {
      background-color: #fbb631;
      
    }
    &:active{
      color: red;
    }
  `;

if (isLogInStatus == "") {
  window.onload = function () {
    document.getElementById("logOut").style.display = "none";
    document.getElementById("logIn").style.display = "inline-block";
  };
} else {
  window.onload = function () {
    document.getElementById("logOut").style.display = "inline-block";
    document.getElementById("logIn").style.display = "none";
  };
}
const Header = () => {
  const logOutStatus = "none";
  function clearLocalStorage() {
    localStorage.removeItem("isLogIn");
    window.location.href = "/helloWork.github.io/";
  }
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={logo} style={{ width: "225px", height: "55px" }}></img>
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            {isMatch ? (
              <>
                <DrawerComp />
              </>
            ) : (
              <Navlist>
                <StyledLink to="/helloWork.github.io/">
                  <Button color="inherit">Home</Button>
                </StyledLink>
                <StyledLink to="/helloWork.github.io/findjob">
                  <Button color="inherit">Find a Job</Button>
                </StyledLink>
                <StyledLink to="/helloWork.github.io/aboutus">
                  <Button color="inherit">About Us</Button>
                </StyledLink>
                <StyledLink to="/helloWork.github.io/contactus">
                  <Button color="inherit">Contact Us</Button>
                </StyledLink>
              </Navlist>
            )}
            <Navlist>
              <span id="logIn">
                <StyledLink
                  to="/helloWork.github.io/login"
                  style={{ backgroundColor: "#fbb631", color: "black" }}
                >
                  <Button color="inherit">Log In</Button>
                </StyledLink>
              </span>

              <span id="logOut">
                <StyledLink
                  to="/helloWork.github.io/"
                  style={{ backgroundColor: "#fff", color: "black" }}
                >
                  <Button color="inherit" onClick={clearLocalStorage}>
                    Log Out
                  </Button>
                </StyledLink>
              </span>
            </Navlist>
            {/* <Navlist>
              <StyledLink to="/">
                <Button color="inherit">Home</Button>
              </StyledLink>
              <StyledLink to="/findjob">
                <Button color="inherit">Find a Job</Button>
              </StyledLink>
              <StyledLink to="/aboutus">
                <Button color="inherit">About Us</Button>
              </StyledLink>
              <StyledLink to="/contactus">
                <Button color="inherit">Contact Us</Button>
              </StyledLink>
              <span id="logIn">
                <StyledLink
                  to="/login"
                  style={{ backgroundColor: "#fbb631", color: "black" }}
                >
                  <Button color="inherit">Log In</Button>
                </StyledLink>
              </span>
              <span id="logOut">
                <StyledLink
                  to="/"
                  style={{ backgroundColor: "#fff", color: "black" }}
                >
                  <Button color="inherit" onClick={clearLocalStorage}>
                    Log Out
                  </Button>
                </StyledLink>
              </span>
            </Navlist> */}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
