
import React from 'react'
import { useRef, useState, useEffect } from "react"
import "../pages/contactus.css";


const Contactus = () => {
  let firstRefName = useRef("");
  let lastRefName = useRef("");
  let emailRef = useRef("");
  let messageRef = useRef("");
  let [id,setId]= useState(Date.now());
  let [infoList, setInfoList] = useState ([])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let info = {
      id: id,
      firstName: firstRefName.current.value,
      lastName: lastRefName.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    
    };
    setInfoList([...infoList, info])
    //alert(JSON.stringify(info));
  };
  useEffect (
    () => localStorage.setItem("Contact_Us", JSON.stringify(infoList)),
    [infoList]
  );


  return (
    <div class="container-fluid">
      <form onSubmit={handleSubmit} className="form">
        <h3> Contact Us</h3><br/>

          <label for="firstName" class="row g-3 table-responsive justify-content-center">First Name</label>
          <div class='col-md-12'>
          <input tabIndex={1} id="firstName" type="text" name='firstName'ref={firstRefName}  required></input>
          </div>
          <br/>


          <label for="lastName" class="row g-3 table-responsive justify-content-center">Last Name</label>
          <div class='col-md-12 justify-content-start'>
          <input tabIndex={2} id="firstName" type="text" name="lastName" ref={lastRefName}  required></input>
          </div>
          <br/>

          <label for="Email" class="row g-3 table-responsive justify-content-center">Email</label>
          <div class='col-md-12'>
          <input tabIndex={3} id="Email" type="email" name="email"  placeholder='123@gmail.com' ref={emailRef} required></input>
          </div>
          <br/>

          <label for="Message">Comments or Questions</label><br/>
          <textarea tabIndex={4} rows="4" cols="35" maxlength="200"
           name="about" id="about" placeholder='Message' ref={messageRef} required>
          </textarea>
          <br/>

          <button type="submit" className="button-hook btn btn-primary w-50">Submit</button>
        </form>
    {/*< ContactList infolist = {infoList}/>*/}
    </div>
      

  )
  }



export default Contactus 

