import React from "react";
import { useRef, useState, useEffect } from "react";

function clearLocalStorage() {
  localStorage.clear();
}
// clearLocalStorage();
let list = localStorage.getItem("Registration")
  ? JSON.parse(localStorage.getItem("Registration"))
  : [];

const SignUp = () => {
  let emailRef = useRef("");
  let passwordRef = useRef("");
  let confirmPasswordRef = useRef("");
  let firstNameRef = useRef("");
  let lastNameRef = useRef("");
  let addressRef = useRef("");
  let zipCodeRef = useRef("");
  let [id, setId] = useState(Date.now);
  let [infoList, setInfoList] = useState(list);

  const handleSubmit = (event) => {
    event.preventDefault();
    let info = {
      id: id,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      address: addressRef.current.value,
      zipCode: zipCodeRef.current.value,
    };
    setInfoList([...infoList, info]);
    setId(Date.now);
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    addressRef.current.value = "";
    zipCodeRef.current.value = "";
  };
  useEffect(
    () => localStorage.setItem("Registration", JSON.stringify(infoList)),
    [infoList]
  );
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          ref={emailRef}
          required
        ></input>
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
          required
        ></input>
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          ref={confirmPasswordRef}
          required
        ></input>
        <br />
        <label>First Name</label>
        <br />
        <input
          tabIndex={1}
          type="text"
          name="firstName"
          id="firstName"
          ref={firstNameRef}
          required
        ></input>
        <br />
        <label>Last Name</label>
        <br />
        <input
          tabIndex={2}
          type="text"
          name="lastName"
          id="lastName"
          ref={lastNameRef}
          required
        ></input>
        <br />
        <label>Address</label>
        <br />
        <input
          tabIndex={3}
          type="text"
          name="address"
          id="address"
          ref={addressRef}
          required
        ></input>
        <br />
        <label>Zip Code</label>
        <br />
        <input
          tabIndex={4}
          type="number"
          address="zipCode"
          id="zipCode"
          ref={zipCodeRef}
          required
        ></input>
        <br />
        <br />
        <label>Gender </label>
        <input tabIndex={5} type="radio" name="gender" id="male" value="male" />
        Male
        <input
          tabIndex={6}
          type="radio"
          name="gender"
          id="female"
          value="female"
        />
        Female
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
