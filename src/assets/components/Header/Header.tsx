import React from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Header.stylex";

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
        <a href="#projects">
          <div {...stylex.props(styles.AnchorButton)}>
            <img
              src="/RoundText.png"
              alt="text"
              {...stylex.props(styles.spinAnimate)}
            />
            <i
              className="fi fi-rr-arrow-down"
              style={{
                display: "flex",
                position: "absolute",
                fontSize: "1.5erm",
                lineHeight: "2rem",
                top: "80px",
                right: "76px",
              }}
            ></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
