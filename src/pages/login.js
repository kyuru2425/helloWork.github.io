import React from 'react'
import "../pages/login.css";
import { useRef, useState, useEffect } from "react"



const Login = () => {
  let userRefName = useRef("");
  let passRefWord = useRef("");
  let [id,setId]= useState(Date.now());
  let [infoList, setInfoList] = useState ([])
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let info = {
      id: id,
      userName: userRefName.current.value,
      passWord: passRefWord.current.value,
    
    };

    setInfoList([...infoList, info])
    //alert(JSON.stringify(info));
  };
  useEffect (
    () => localStorage.setItem("Contact_Us", JSON.stringify(infoList)),
    [infoList]
  );


  return (

  <div className='container-fluid'>
    <div>
      <img src="work_from_home.png"/>
    </div>

    <form className='box' onSubmit={handleSubmit}>
         <h1>Login</h1>
            <label>Username</label><br/>
            <input tabIndex={1} type="text" placeholder='Username' name='userName' id='passWord' ref={userRefName} required/><br/><br/>
            <label>Password</label><br/>
            <input tabIndex={2} type="password" placeholder='Password' name='password' ref={passRefWord} required/><br/><br/>


            <label>Not Yet Registered? <a href= "#"> Sign Up</a></label><br/><br/>
            <button type="submit" className="button-hook btn btn-primary w-50">Submit</button>
            
      </form>
    </div>


  
);
}

export default Login
