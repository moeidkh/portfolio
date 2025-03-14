import React from "react";

type Props = {
  activeSection: string;
  color: string;
};

const NavBar = ({ activeSection, color }: Props) => {
  return (
    <ul className="flex flex-col items-center justify-center gap-5 border border-gray-500 p-5 rounded-full">
      <a href="#introduce">
        <li
          className={`list-none flex justify-center items-center transition-all `.concat(
            activeSection === "intro" ? ` ${color}` : ""
          )}
        >
          <i className="fi fi-rr-house-chimney cursor-pointer"></i>
        </li>
      </a>
      <a href="#aboutTitle">
        <li
          className={"list-none flex justify-center items-center transition-all ".concat(
            activeSection === "about" ? ` ${color}` : ""
          )}
        >
          <i className="fi fi-rr-user cursor-pointer"></i>
        </li>
      </a>
      <a href="#resume">
        <li
          className={"list-none flex justify-center items-center transition-all ".concat(
            activeSection === "timeline" ? ` ${color}` : ""
          )}
        >
          <i className="fi fi-rr-briefcase cursor-pointer"></i>
        </li>
      </a>
      <a href="#myskill">
        <li
          className={"list-none flex justify-center items-center transition-all ".concat(
            activeSection === "skills" ? ` ${color}` : ""
          )}
        >
          <i className="fi fi-rr-resources cursor-pointer"></i>
        </li>
      </a>
      <a href="#projects">
        <li
          className={"list-none flex justify-center items-center transition-all ".concat(
            activeSection === "proj" ? ` ${color}` : ""
          )}
        >
          <i className="fi fi-rr-grid cursor-pointer"></i>
        </li>
      </a>
      <a href="#contact">
        <li
          className={"list-none flex justify-center items-center transition-all ".concat(
            activeSection === "request" ? ` ${color}` : ""
          )}
        >
          <i className="fi fi-rr-comment-alt cursor-pointer"></i>
        </li>
      </a>
    </ul>
  );
};

export default NavBar;
