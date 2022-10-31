import React from "react";
import "./Home.css";
import programmer1 from "../images/programmer1.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";

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

const Home = () => {
  return (
    <div className="mainContainer">
      <div className="cardContainer">
        <div className="textContainer">
          <h1>
            Let's Find Your <br />
            Dream Job Here
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            cumque, numquam saepe voluptates iusto ipsum reprehenderit, nulla
            eos aperiam laudantium explicabo tenetur quis libero iste nihil eius
            eligendi cum sapiente.{" "}
          </p>
          <StyledLink to="/findjob" className="findJobButton">
            <Button>
              <i class="bi bi-search"></i>Find a Job
            </Button>
          </StyledLink>
        </div>
        <div className="imageContainer">
          <img src={programmer1}></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
