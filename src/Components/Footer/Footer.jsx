import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        This project was coded by
        <a href="https://github.com/TunmiDev" target="_blank">
          TunmiDev
        </a>{" "}
        {""}
        and is
        <a
          href="https://github.com/TunmiDev/weather-shecodes/tree/main"
          target="_blank"
        >
          {" "}
          {""}
          on GitHub
        </a>{" "}
        {""}
        and
        <a
          href="https://weather-shecodesassignment.onrender.com"
          target="_blank"
        >
          hosted on Render
        </a>
      </p>
    </footer>
  );
};

export default Footer;
