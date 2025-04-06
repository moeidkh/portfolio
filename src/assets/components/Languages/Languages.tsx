import React from "react";
import AnimatedTag from "../../../shared/AnimatedTag";
import { InView } from "react-intersection-observer";
import { Sections } from "../LeftMenu/LeftMenu";
import * as stylex from "@stylexjs/stylex";
import { globalStyles } from "../../../Stylex/GlobalStyles.stylex";
import { styles } from "./Languages.stylex";

type Props = {
  titleVarient: Record<string, Object>;
  boxVarient: Record<string, Object>;
  boxVarientDown: Record<string, Object>;
  boxVarientLeft: Record<string, Object>;
  setActiveSection: (section: Sections) => void;
};

const Languages = ({ boxVarient, setActiveSection, titleVarient }: Props) => {
  const languages = [
    { name: "English", level: "Intermediate" },
    { name: "Persian", level: "Native" },
  ];
  return (
    <>
      <AnimatedTag boxVarient={titleVarient}>
        <div {...stylex.props(globalStyles.labelContainer)}>
          <div
            key="title"
            {...stylex.props(globalStyles.label)}
            id={Sections.languages}
          >
            <i
              className="fi fi-rr-comment-alt"
              style={{ display: "flex", alignItems: "center" }}
            ></i>
            <p {...stylex.props(globalStyles.labelTitle)}>LANGUAGES</p>
          </div>
        </div>
      </AnimatedTag>

      <AnimatedTag boxVarient={boxVarient}>
        <InView
          onChange={(inView) => inView && setActiveSection(Sections.languages)}
        >
          <div {...stylex.props()} id={Sections.languages}>
            <AnimatedTag boxVarient={boxVarient}>
              <div {...stylex.props(styles.container)}>
                <h1 {...stylex.props(styles.title)}>
                  Language&nbsp;
                  <span {...stylex.props(globalStyles.dynamicColor)}>
                    Proficiency
                  </span>
                </h1>

                <div {...stylex.props(styles.languageContainer)}>
                  {languages.map((lang, index) => (
                    <div key={index} {...stylex.props(styles.language)}>
                      <p>{lang.name}</p>
                      <p {...stylex.props(styles.level)}>{lang.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedTag>
          </div>
        </InView>
      </AnimatedTag>
    </>
  );
};

export default Languages;
