import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/harshal.png";
import { FaInstagram, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Harshal Savaliya</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        This project is created for learning how to use react redux with
        typescript
      </h4>
      <div className="profile-links">
        <a target="_blank" rel="noreferrer" href="https://github.com/hetx19">
          <FaGithub />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/hetsavaliya19"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
