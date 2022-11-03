import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { blue } from '@mui/material/colors';


let isLogInStatus = localStorage.getItem("isLogIn")
  ? JSON.parse(localStorage.getItem("isLogIn"))
  : [];
console.log(isLogInStatus);

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
const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const logOutStatus = "none";
  function clearLocalStorage() {
    localStorage.removeItem("isLogIn");
    window.location.href = "/";
  }
  return (
    <React.Fragment>
        <Drawer open={openDrawer}
        onClose={()=>setOpenDrawer(false)} anchor="right">
            
            {/* <List>
                <ListItemButton>
                    <ListItemIcon>
                        <Navlist>
                            <ListItemText><StyledLink to="/"><Button>Home</Button></StyledLink></ListItemText>
                            <ListItemText><StyledLink to="/findjob"><Button>Find a Job</Button></StyledLink></ListItemText>
                            <ListItemText><StyledLink to="/aboutus"><Button>About Us</Button></StyledLink></ListItemText>
                            <ListItemText><StyledLink to="/contactus"><Button>Contact Us</Button></StyledLink></ListItemText>
                        </Navlist>
                    </ListItemIcon>
                </ListItemButton>
            </List> */}
            <Paper>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <Navlist>
                            <ListItemText><StyledLink to="/"><Button>Home</Button></StyledLink></ListItemText>
                        </Navlist>
                    </ListItemIcon>
                </ListItemButton>
            </List>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <Navlist>
                            <ListItemText><StyledLink to="/findjob"><Button>Find a Job</Button></StyledLink></ListItemText>
                        </Navlist>
                    </ListItemIcon>
                </ListItemButton>
            </List>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <Navlist>
                            <ListItemText><StyledLink to="/aboutus"><Button>About Us</Button></StyledLink></ListItemText>
                        </Navlist>
                    </ListItemIcon>
                </ListItemButton>
            </List>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <Navlist>
                            <ListItemText><StyledLink to="/contactus"><Button>Contact Us</Button></StyledLink></ListItemText>
                        </Navlist>
                    </ListItemIcon>
                </ListItemButton>
            </List>
            </Paper>
        </Drawer>
        <IconButton onClick={()=> setOpenDrawer(!openDrawer)}>
            <MenuIcon/>
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp
