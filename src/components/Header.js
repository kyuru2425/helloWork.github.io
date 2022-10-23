import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../images/helloWorkLogo.png'


const Navlist = styled.a`
    text-decoration: none;
  `;
  const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 1rem;
    position relative;
    &:hover, &:focus {
      color: yellow;
    }
    &:active{
      color: red;
    }
  `;


const Header = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    {/* <img src={logo}></img> */}
                </IconButton>
                
                    
                </Typography>
                <Navlist>
                  <StyledLink to="/"><Button color="inherit">Home</Button></StyledLink>
                  <StyledLink to="/findjob"><Button color="inherit">Find a Job</Button></StyledLink>
                  <StyledLink to="/aboutus"><Button color="inherit">About Us</Button></StyledLink>
                  <StyledLink to="/contactus"><Button color="inherit">Contact Us</Button></StyledLink>
                  <StyledLink to="/login"><Button color="inherit">Login</Button></StyledLink>
                  

                </Navlist>
                
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}

export default Header
