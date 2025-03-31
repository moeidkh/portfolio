import React, { useCallback, useMemo } from "react";
import AnimatedTag from "../../../shared/AnimatedTag";
import { Sections } from "../LeftMenu/LeftMenu";
import { InView } from "react-intersection-observer";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Skills.stylex";
import { globalStyles } from "../../../Stylex/GlobalStyles.stylex";
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IconType } from "react-icons";

type Props = {
  titleVarient: Record<string, Object>;
  boxVarient: Record<string, Object>;
  boxVarientDown: Record<string, Object>;
  boxVarientLeft: Record<string, Object>;
  setActiveSection: (section: Sections) => void;
};

type SkillsType = {
  id: string;
  icon: IconType;
  link: string;
  variant: "default" | "left" | "down";
  name: string;
};

const Skills = ({
  boxVarient,
  boxVarientDown,
  boxVarientLeft,
  setActiveSection,
  titleVarient,
}: Props) => {
  const skillsData: SkillsType[] = [
    {
      id: "react",
      icon: SiReact,
      link: "https://react.dev/",
      variant: "default",
      name: "React.js",
    },
    {
      id: "typescript",
      icon: SiTypescript,
      link: "https://www.typescriptlang.org/",
      variant: "down",
      name: "TypeScript",
    },
    {
      id: "javascript",
      icon: SiJavascript,
      link: "#",
      variant: "down",
      name: "JavaScript",
    },
    {
      id: "redux",
      icon: SiRedux,
      link: "https://redux.js.org/",
      variant: "left",
      name: "Redux",
    },
    {
      id: "html",
      icon: SiHtml5,
      link: "#",
      variant: "default",
      name: "HTML",
    },
    {
      id: "css",
      icon: SiCss3,
      link: "#",
      variant: "left",
      name: "CSS",
    },
    {
      id: "tailwind",
      icon: SiTailwindcss,
      link: "https://tailwindcss.com/",
      variant: "down",
      name: "Tailwind",
    },
    {
      id: "Redux Toolkit",
      icon: SiRedux,
      link: "https://redux-toolkit.js.org/",
      variant: "left",
      name: "Redux Toolkit",
    },
    {
      id: "bootstrap",
      icon: SiBootstrap,
      link: "https://getbootstrap.com/",
      variant: "left",
      name: "BootStrap",
    },
    {
      id: "sass",
      icon: SiSass,
      link: "https://sass-lang.com/",
      variant: "default",
      name: "Sass",
    },
    {
      id: "python",
      icon: SiPython,
      link: "https://python.org/",
      variant: "down",
      name: "Python",
    },
  ];

  const getVariant = useCallback(
    (variant: SkillsType["variant"]) => {
      switch (variant) {
        case "left":
          return boxVarientLeft;
        case "down":
          return boxVarientDown;
        default:
          return boxVarient;
      }
    },
    [boxVarient, boxVarientDown, boxVarientLeft]
  );

  return (
    <>
      <AnimatedTag boxVarient={titleVarient}>
        <div {...stylex.props(globalStyles.labelContainer)}>
          <div key="title" {...stylex.props(globalStyles.label)} id="myskill">
            <i
              className="fi fi-rr-resources"
              style={{ display: "flex", alignItems: "center" }}
            ></i>
            <p {...stylex.props(globalStyles.labelTitle)}>MY SKILLS</p>
          </div>
        </div>
      </AnimatedTag>

      <AnimatedTag boxVarient={boxVarient}>
        <InView
          onChange={(inView) => inView && setActiveSection(Sections.skills)}
        >
          <div {...stylex.props(styles.SkillContainer)} id={Sections.skills}>
            <h1 {...stylex.props(styles.title)}>
              My{" "}
              <span {...stylex.props(globalStyles.dynamicColor)}>Skills</span>
            </h1>
            <div {...stylex.props(styles.skillIconContainer)}>
              {skillsData.map((skill) => (
                <AnimatedTag
                  boxVarient={getVariant(skill.variant)}
                  key={skill.id}
                >
                  <div {...stylex.props(styles.skill)}>
                    <div {...stylex.props(styles.skillIcon)}>
                      <a href={skill.link} target="_blank">
                        <skill.icon />
                      </a>
                    </div>
                    <p>{skill.name}</p>
                  </div>
                </AnimatedTag>
              ))}
            </div>
          </div>
        </InView>
      </AnimatedTag>
    </>
  );
};

export default Skills;
