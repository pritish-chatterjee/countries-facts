import React from "react";
import "../styling/footer.css";

function Footer() {
  return (
    <div className="navbar footer">
      <div>Made by Pritish Chatterjee</div>
      <div className="socials">
        <a href={process.env.REACT_APP_WEBSITE_URL} target="blank">
          <img
            className="website-img"
            src="website.svg"
            alt="website-link"
            target="blank"
          ></img>
        </a>
        <a href={process.env.REACT_APP_LINKEDIN_URL} target="blank">
          <img
            className="linkedin-img"
            src="linkedin.svg"
            alt="linkedin-link"
            target="blank"
          ></img>
        </a>
        <a href={process.env.REACT_APP_GITHUB_URL} target="blank">
          <img
            className="github-img"
            src="github.svg"
            alt="github-link"
            target="blank"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
