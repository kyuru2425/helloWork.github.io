import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "./home";
import Findjob from "./findjob";
import Aboutus from "./aboutus";
import Login from "./login";
import Contactus from "./contactus";
import Footer from "../components/Footer";
import Registration from "../pages/registration";
import JobDescription from "./JobDescription";

const Index = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/helloWork.github.io/" element={<Home />} />
        <Route exact path="/helloWork.github.io/findjob" element={<Findjob />} />
        <Route exact path="/helloWork.github.io/aboutus" element={<Aboutus />} />
        <Route exact path="/helloWork.github.io/contactus" element={<Contactus />} />
        <Route exact path="/helloWork.github.io/login" element={<Login />} />
        <Route exact path="/helloWork.github.io/registration" element={<Registration />} />
        <Route exact path="/helloWork.github.io/JobDescription" element={<JobDescription />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Index;
