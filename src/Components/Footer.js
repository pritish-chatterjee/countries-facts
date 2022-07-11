import React from "react";
import "../styling/footer.css";

function Footer() {
  return (
    <div className="navbar footer">
      <div>Made by Pritish Chatterjee</div>
      <div className="socials">
        <a href="https://pritish.netlify.app/" target="blank">
          <img
            className="website-img"
            src="website.svg"
            alt="website-link"
            target="blank"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/pritishchatterjee48/"
          target="blank"
        >
          <img
            className="linkedin-img"
            src="linkedin.svg"
            alt="linkedin-link"
            target="blank"
          ></img>
        </a>
        <a href="https://github.com/pritish-chatterjee" target="blank">
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
