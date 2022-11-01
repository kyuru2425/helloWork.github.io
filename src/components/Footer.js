import React from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '@mui/material/Button';


const divstyle ={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin : "0"
}
const boxleft ={
    //marginLeft: "-5em"
}
// const boxright ={
//     //marginRight: "-5em",
//     display: "flex",
//     alignItems: "center",
//     flexDirection: "column",
//     textAlign: "left"
// }

const footercss ={

        // display:  "flex",
        // flexDirection: "row",
        // position: "fixed",
        color: "white",
        backgroundColor: "#1976d2",
        bottom: "0",
        left: "0",
        right: "0",
        padding: "8px",
        // textAlign: "center"
    
}
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
const Footer = () => {
  return (
    <footer style={footercss}>
        <div class="container">
            <div style={divstyle} class="row">
                <div style={boxleft} class="col-2">
                    <h2>Quick Links</h2>
                    
                    <div>
                        <StyledLink to="/"><Button color="inherit">Home</Button></StyledLink>
                        <StyledLink to="/findjob"><Button color="inherit">Find a Job</Button></StyledLink>
                        <StyledLink to="/aboutus"><Button color="inherit">About Us</Button></StyledLink>
                        <StyledLink to="/contactus"><Button color="inherit">Contact Us</Button></StyledLink>
                        
                    </div>
                </div>
                <div class="col-5">
                    <h2>Connect with Us</h2>
                    <div style={divstyle}>
                        <h2 class="bi bi-facebook"></h2>
                        <h2 class="bi bi-linkedin"></h2>
                        <h2 class="bi bi-twitter"></h2>
                        <h2 class="bi bi-discord"></h2>
                    </div>
                    
                </div>
                <div class="col-5">
                    <div class="col-12">
                        <p>You can Email us Here:</p>
                        <p>Email: <b>helloworkcorps@gmail.com</b></p>
                    </div>
                    <div class="col-12">
                        <p>Call: 09234556467</p>
                    </div>
                    <div class="col-12">
                        <p>Address: consecutiuor addpiecsiing eliit, sod de no sunod tempor do inciduont ut laboure.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div> <b>Copyright <i class="bi bi-c-circle"></i> Hello!Work</b> </div>
    </footer>
  )
}

export default Footer
