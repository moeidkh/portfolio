import React from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Header.stylex";
import { Sections } from "../LeftMenu/LeftMenu";

const Header = () => {
  return (
    <div {...stylex.props(styles.HeaderTitle)} id="intro">
      <div {...stylex.props(styles.titleContainer)}>
        <h1 {...stylex.props(styles.title)}>
          Say Hi from <span {...stylex.props(styles.HeaderName)}>Moeid</span>,
          Front-End Developer
        </h1>
        <p {...stylex.props(styles.description)}>
          I design and code beautifully simple things and i love what i do.
          <br /> Just simple like that!
        </p>
      </div>
      <div {...stylex.props(styles.AnchorButtonContainer)}>
        <a href={`#${Sections.experience}`}>
          <div {...stylex.props(styles.AnchorButton)}>
            <img
              src="/MyExperience.png"
              alt="text"
              {...stylex.props(styles.spinAnimate, styles.image)}
            />
            <i
              className="fi fi-rr-arrow-down"
              style={{
                display: "flex",
                position: "absolute",
                fontSize: "1.5rem",
                lineHeight: "2rem",
                top: "calc(50% - 0.75rem)",
                right: "calc(50% - 0.75rem)",
              }}
            ></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
