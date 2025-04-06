import React from "react";
import * as stylex from "@stylexjs/stylex";
import AnimatedTag from "../../../shared/AnimatedTag";
import { InView } from "react-intersection-observer";
import { Sections } from "../LeftMenu/LeftMenu";
import { styles } from "./About.stylex";
import { globalStyles } from "../../../Stylex/GlobalStyles.stylex";

type Props = {
  boxVarient: Record<string, Object>;
  titleVarient: Record<string, Object>;
  setActiveSection: (section: Sections) => void;
};

const About = (props: Props) => {
  return (
    <div {...stylex.props(styles.aboutContainer)}>
      <AnimatedTag boxVarient={props.titleVarient}>
        <div {...stylex.props(globalStyles.labelContainer)}>
          <div key="title" {...stylex.props(globalStyles.label)} id={Sections.about}>
            <i
              className="fi fi-rr-user"
              style={{ display: "flex", alignItems: "center" }}
            ></i>
            <p {...stylex.props(globalStyles.labelTitle)}>ABOUT</p>
          </div>
        </div>
      </AnimatedTag>
      <AnimatedTag boxVarient={props.boxVarient}>
        <InView
          onChange={(inView) =>
            inView && props.setActiveSection(Sections.about)
          }
        >
          <div {...stylex.props(styles.container)}>
            <h1 {...stylex.props(styles.title)}>
              Every great design begin with an even{" "}
              <span {...stylex.props(styles.dynamicColor)}>better story</span>.
            </h1>
            <p {...stylex.props(styles.description)}>
              Front-End programming is like creating a work of art that brings
              an attractive design from a blank page and thousands of users
              daily immerse themselves in this design. It feels great to be the
              creator of a work that attracts thousands of views daily. So,
              I'mmore excited than ever to take steps in this path.Since the
              beginning of my journey in this field about 6 years ago until now,
              I have always tried to improve my skills and answer other people's
              questions, and at one point I started teaching in this field.
              Solving a problem is very interesting. Basically, the feeling
              after solving a problem is very sweet, so it is worth spending
              time on it. On the other hand, I am a curious, self-confident
              person who is very interested in music.
            </p>
          </div>
        </InView>
      </AnimatedTag>
    </div>
  );
};

export default About;
