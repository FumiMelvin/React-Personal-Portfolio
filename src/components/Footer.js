import React from "react";
import "../styles/Footer.css";
import { Twitter, GitHub, Email } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Twitter />
        <GitHub />
        <Email />
      </div>
      <p>&copy; 2022 Fumi Melvin</p>
    </div>
  );
}

export default Footer;
