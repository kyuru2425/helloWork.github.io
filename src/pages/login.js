import React from "react";
import "../pages/login.css";
import { useRef, useState, useEffect } from "react";
import wfh from "../images/Login-rafiki.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Index from "./index";
import Home from "./home";

const StyledLink = styled(Link)`
    color: red;
    text-decoration: underline;
    margin: 1rem;
    position relative;
    &:hover, &:focus {
      color: yellow;
    }
    &:active{
      color: red;
    }
  `;

let lists = localStorage.getItem("userRegistration")
  ? JSON.parse(localStorage.getItem("userRegistration"))
  : [];

const Login = () => {
  let emailRef = useRef("");
  let passwordRef = useRef("");
  let [id, setId] = useState(Date.now());
  let [infoList, setInfoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let info = {
      id: id,
      email: emailRef.current.value,
      passWord: passwordRef.current.value,
    };

    let filtered = lists.find((item) => item.email === emailRef.current.value);
    if (filtered === undefined) {
      alert("Email not registered");
    } else {
      if (filtered.userpass === passwordRef.current.value) {
        window.location.href = "https://kyuru2425.github.io/helloWork.github.io/";

        setInfoList([...infoList, info]);
      } else {
        alert("wrong password");
      }
    }

    // /setInfoList([...infoList, info])
    //alert(JSON.stringify(info));
    setId(Date.now);
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  useEffect(
    () => localStorage.setItem("isLogIn", JSON.stringify(infoList)),
    [infoList]
  );

  return (
    <div className="mainContainer">
      <div className=" logInContainer">
        <div className=" logInImage" style={{ maxWidth: "700px" }}>
          <img src={wfh} style={{ maxWidth: "100%" }}></img>
        </div>
        <div className="logInWrapper">
          <form className="box" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label>Email</label>
            <br />
            <input
              tabIndex={1}
              type="email"
              placeholder="Email"
              name="userName"
              id="passWord"
              ref={emailRef}
              required
            />
            <br />
            <br />
            <label>Password</label>
            <br />
            <input
              tabIndex={2}
              type="password"
              placeholder="Password"
              name="password"
              ref={passwordRef}
              required
            />
            <br />
            <br />
            <label>
              Not Yet Registered?
              <StyledLink to="/registration">Sign up</StyledLink>
            </label>
            <br />
            <br />
            <br />
            <br />
            <button type="submit" className="button-hook btn w-50 logInButton">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
