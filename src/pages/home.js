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
    <div className="mainHomeContainer">
      <div className="cardContainer">
        <div className="textContainer">
          <h1>
            Let's Find Your <br />
            Dream <span>Job</span> Here
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            cumque, numquam saepe voluptates iusto ipsum reprehenderit, nulla
            eos aperiam laudantium explicabo tenetur quis libero iste nihil eius
            eligendi cum sapiente.
          </p>
          <StyledLink to="/findjob" className="findJobButton">
            <Button>
              <i class="bi bi-search"></i> Find a Job
            </Button>
          </StyledLink>
        </div>
        <div className="imageContainer">
          <img src={programmer1}></img>
        </div>
      </div>
      <div className="countDiv">
        <div>
          {/* <h1>150K</h1>
          <p>Job Vacancies</p> */}
          <h1>
            How it <br />
            works
          </h1>
        </div>
        <div>
          {/* <h1>205K+</h1>
          <p>Job Seekers Active</p> */}
          <h3>
            1. Register an account <br />
            and then log in
          </h3>
        </div>
        <div>
          {/* <h1>125K+</h1>
          <p>Incorporated Companies</p> */}
          <h3>
            2. Find A job by searching
            <br /> the position you desire
          </h3>
        </div>
        <div>
          {/* <h1>125K+</h1>
          <p>Incorporated Companies</p> */}
          <h3>
            3. Upload your resume <br />
            and then apply
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
