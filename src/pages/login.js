import React from 'react'
import "../pages/login.css";
import { useRef, useState, useEffect } from "react"
import wfh from '../images/work_from_home.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Index from './index';



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

  let lists = localStorage.getItem("userRegistration")
  ? JSON.parse(localStorage.getItem("userRegistration"))
  : [];

const Login = () => {
  let emailRef = useRef("");
  let passwordRef = useRef("");
  // let [id,setId]= useState(Date.now());
  // let [infoList, setInfoList] = useState ([])
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // let info = {
    //   id: id,
    //   userName: userRefName.current.value,
    //   passWord: passRefWord.current.value,
    
    // };

    let filtered = lists.find((item) => item.email === emailRef.current.value);
    if (filtered === undefined) {
      alert("Email not registered");
    } else {
      if (filtered.userpass === passwordRef.current.value) {
        //window.location.href = "http://localhost:3000/";
        <Index/>
      } else {
        alert("wrong password");
      }
    }

    // /setInfoList([...infoList, info])
    //alert(JSON.stringify(info));
  };
  // useEffect (
  //   () => localStorage.setItem("Contact_Us", JSON.stringify(infoList)),
  //   [infoList]
  // );


  return (

  <div className='d-flex row'>
    {}
    <div class="col-6">
    <img src={wfh} style={{maxWidth:"500px"}}></img> 
    </div>
    <div class="col-6">
      <form className='box' onSubmit={handleSubmit}>
          <h1>Login</h1>
              <label>Email</label><br/>
              <input tabIndex={1} type="email" placeholder='Email' name='userName' id='passWord' ref={emailRef} required/><br/><br/>
              <label>Password</label><br/>
              <input tabIndex={2} type="password" placeholder='Password' name='password' ref={passwordRef} required/><br/><br/>


              <label>Not Yet Registered? <StyledLink to="/registration">Sign up</StyledLink></label><br/><br/>
              <button type="submit" className="button-hook btn btn-primary w-50">Login</button>
              
        </form>  
    </div>
    
    </div>


  
);
}

export default Login
