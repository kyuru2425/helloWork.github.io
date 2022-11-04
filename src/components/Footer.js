import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";
import "./footer.css";

const divstyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  margin: "0",
};
const boxleft = {
  //marginLeft: "-5em"
};

const footercss = {
  // display:  "flex",
  // flexDirection: "row",
  // position: "fixed",
  color: "white",
  backgroundColor: "#36495d",
  bottom: "0",
  left: "0",
  right: "0",
  padding: "8px",
  // textAlign: "center"
};
const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 1rem;
    position relative;
    &:hover, &:focus {
      color: #fbb631;
    }
   
  `;
const Footer = () => {
  return (
    <footer style={footercss}>
      <div class="container">
        <div style={divstyle} class="row">
          <div style={boxleft} class="col-md-2">
            <h2>Quick Links</h2>

            <div>
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
            </div>
          </div>
          <div class="col-md-5">
            <h2>Connect with Us</h2>
            <div style={divstyle} className="icons">
              <a href="#">
                <h2 class="bi bi-facebook"></h2>
              </a>
              <a href="#">
                <h2 class="bi bi-linkedin"></h2>
              </a>
              <a href="#">
                <h2 class="bi bi-twitter"></h2>
              </a>
              <a href="#">
                <h2 class="bi bi-discord"></h2>
              </a>
            </div>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-4 contactFooter">
            <div class="contactDetails">
              <p>You can Email us Here:</p>
              <p>
                Email:{" "}
                <a href="#" className="emailFooter">
                  <b>helloworkcorps@gmail.com</b>
                </a>
              </p>
            </div>
            <div>
              <p>Call: 09234556467</p>
            </div>
            <div class="contactDetails">
              <p>
                Address: consecutiuor addpiecsiing eliit, sod de no sunod tempor
                do inciduont ut laboure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div>
        <b>
          Copyright <i class="bi bi-c-circle"></i> Hello!Work
        </b>
      </div>
    </footer>
  );
};

export default Footer;
