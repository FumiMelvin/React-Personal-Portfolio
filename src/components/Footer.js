import React from "react";
import "../styles/Footer.css";
import { Twitter, GitHub, Email } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href={"https://github.com/FumiMelvin"}>
          <GitHub />
        </a>
        <a href={"mailto:fumelvin@gmail.com"}>
          <Email />
        </a>
        <a href={"https://twitter.com/fumi_melvin"}>
          <Twitter />
        </a>
      </div>
      <p>&copy; 2022 Fumi Melvin</p>
    </div>
  );
}

export default Footer;
