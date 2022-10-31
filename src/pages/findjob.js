import React, { useState } from "react";
import Joblist from "../components/JobList";
import "./findJob.css";

const Findjob = () => {
  const [search, setSearch] = useState("");

  //debounce Fuction
  let debounce = (timer, delay = 500) => {
    let timeOut;
    return (...args) => {
      if (timeOut) {
        clearTimeout(timeOut);
      }
      timeOut = setTimeout(() => {
        timer.apply(null, args);
      }, delay);
    };
  };

  return (
    <div className="findJobContainer">
      <h2>Search Job here</h2>
      <div className="inputContainer">
        <input
          text="type"
          placeholder="Search job position"
          onChange={debounce((event) => {
            setSearch(event.target.value);
          })}
        ></input>
      </div>

      <div className="jobCardsContainer">
        {Joblist.filter((val) => {
          if (search == "") {
            return val;
          } else if (
            val.position
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase())
          ) {
            return val;
          }
        }).map((jobs, key) => {
          return (
            <div className="jobCards" key={key}>
              <h3>{jobs.position}</h3>
              <p>Company: {jobs.company}</p>
              <p>Experience: {jobs.experience}</p>
              <p>Location: {jobs.location}</p>
              <button type="button">
                <a href={jobs.page}>Apply</a>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Findjob;
