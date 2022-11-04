import React from "react";
import aboutimg from "../images/aboutsus.png";
import "./Aboutus.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";
import PortfolioCard from "../components/PortfolioCard";

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

const Aboutus = () => {
  return (
    <div className="tocol">
      <div className="torow">
        <div className="aboutUsImg">
          <img src={aboutimg} style={{ maxWidth: "500px" }}></img>
        </div>
        <div className="aboutUs">
          <h2>About Us</h2>
          <p>
            Hello!Work is a job-hunting website that caters programmers to find
            their dream job. As we know using a job website is one of the best
            and most efficient way to search for and apply to dozens of
            opportunities.The site welcomes job seekers in areas ranging from
            entry level to senior level developers.
            <br />
            <br />
            Those interested in finding a job can create a free account and
            browse job openings or search for specific positions. In the future
            the users will be able to monitor their applications. The jobs are
            also easily categorized for easier browsing.
          </p>

          <button className="todev">
            <a href="#developers">
              See Developers <i class="bi bi-arrow-right"></i>
            </a>
          </button>
        </div>
      </div>
      <div id="developers" className="developers">
        <h1 style={{ color: "white" }}>The Developers</h1>
        <PortfolioCard />
      </div>
    </div>
  );
};

export default Aboutus;
