import React from "react";
import { GitHub, Email } from "@material-ui/icons";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Fumi Melvin</h2>
        <div className="prompt">
          <p>
            Full Stack Developer An ambitious and self-motivated Full Stack
            Developer with a considerable technical skills, and a
            performance-driven with a vast array of knowledge in many diﬀerent
            Front-End and Back-End languages and frameworks.
          </p>
          <a href={"https://github.com/FumiMelvin"}>
            <GitHub />
          </a>
          <a href={"mailto:fumelvin@gmail.com"}>
            <Email />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              HTML, CSS, BootStrap, TailwindCSS, MaterialUI, ReactJS, Angular
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Nodejs, .NET, ExpressJS, GraphQL, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript, Python, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
