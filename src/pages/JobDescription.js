import React from "react";
import "./JobDescription.css";
import { useRef } from "react";

let islogIn = localStorage.getItem("isLogIn")
  ? JSON.parse(localStorage.getItem("isLogIn"))
  : [];

const JobDescription = () => {
  let resumeRef = useRef("");
  const emailSent = () => {
    if (islogIn == "") {
      alert("log in first");
      window.location.href = "https://kyuru2425.github.io/helloWork.github.io/login";
    } else if (resumeRef.current.value == "") {
      alert("Upload Resume First");
    } else {
      alert("Email Sent");
    }
    resumeRef.current.value = "";
  };
  return (
    <div className="jobDescription">
      <h1>Junior Front-end Web Developer</h1>
      <br />
      <div className="location">
        <p>
          <b>Location:</b> Makati
        </p>
        <p>
          <b>Work Type:</b> Permanent
        </p>
      </div>
      <br />
      <div className="aboutRole">
        <h3>About Role</h3>
        <p>
          We are seeking a front-end web developer to build new web pages and
          improve our company website. The right person for this role will be
          proficient in HTML, CSS, JavaScript, and PHP. You will be responsible
          for building and deploying new front-end features to our WordPress
          website, handling the integration of plugins such as WooCommerce, and
          performing routine maintenance of our site.
        </p>
      </div>
      <br />
      <div className="responsibilities">
        <h3>Responsibilities</h3>
        Below are some of the responsibilities a web developer is expected to
        assume:
        <ul>
          <li>
            Write well-designed, testable, efficient code by using web
            development best practices
          </li>
          <li>
            Create basic website layouts and user interfaces with HTML and CSS
          </li>
          <li>
            Integrate data from various back-end web services and databases
          </li>
          <li>
            Work with stakeholders to gather and refine specifications and
            requirements based on technical needs
          </li>
          <li>Create and maintain software documentation</li>
          <li>Ensure cross-browser compatibility of new features</li>
          <li>
            Be responsible for maintaining, expanding, and scaling our site
          </li>
          <li>
            Stay plugged into emerging technologies and industry trends and
            apply them to operations and activities
          </li>
          <li>
            Collaborate with web designers to realize visual design intent
          </li>
        </ul>
      </div>
      <br />
      <div className="qualifications">
        <h3>Job Qualifications and Skill Sets</h3>
        Below are the qualifications expected of a web developer:
        <ul>
          <li>
            Bachelor's degree in computer science, web development, software
            development, or related field
          </li>
          <li>
            Web development fundamentals, including HTML, CSS, and JavaScript
          </li>
          <li>
            Front-end JavaScript frameworks such as Vue, React, and Angular
          </li>
          <li>
            Back-end frameworks such as Ruby on Rails, Node.js, and ASP.NET
          </li>
          <li>
            Content management systems (CMSs) such as WordPress, Joomla, and
            Squarespace
          </li>
          <li>UI/UX design experience</li>
          <li>Working knowledge of graphic design</li>
          <li>REST API development</li>
          <li>Relational databases such as MySQL</li>
          <li>Agile and test-driven development best practices</li>
        </ul>
      </div>
      <br />
      <div className="perks">
        <h3>Perks</h3>
        <ul>
          <li>Free barista-style coffee</li>
          <li>Free parking and jeepney services</li>
          <li>Highly engaged team</li>
          <li>Unlimited potential for growth</li>
          <li>Challenging role</li>
          <li>Fun and family-oriented working environment</li>
        </ul>
      </div>
      <br />
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <form>
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              color: "#1976d2",
            }}
          >
            Upload your Resume
          </label>
          <br />

          <input type="file" name="resume" ref={resumeRef}></input>
        </form>
      </div>
      <div>
        <h2>
          Join this <span>Amazing </span>Company
        </h2>
        <br />
        <button className="applyButton" type="button" onClick={emailSent}>
          <h2>APPLY</h2>
        </button>
      </div>
    </div>
  );
};

export default JobDescription;
