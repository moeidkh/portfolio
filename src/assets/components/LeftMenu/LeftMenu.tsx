import { act, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./LeftMenu.stylex";
import { ModalAction } from "../../../Redux/Modal/ModalReducer";
import { ModalTypes } from "../ModalManager/modal";

export enum Sections {
  intro = "intro",
  about = "about",
  timeline = "timeline",
  skills = "skills",
  experience = "experience",
  languages = "languages",
}

const LeftMenu = () => {
  const [activeSection, setActiveSection] = useState<Sections>(Sections.intro);
  const dispatch = useDispatch();

  const handleActiveSection = useCallback(
    (section: Sections) => {
      if (activeSection !== section) {
        setActiveSection(section);
        dispatch({
          type: ModalAction.CloseModal,
          payload: { modalType: ModalTypes.LeftMenu },
        });
      }
    },
    [activeSection]
  );

  const menuData = [
    {
      id: "introduction",
      title: "introduction",
      icon: (
        <i className="fi fi-rr-house-chimney" style={{ cursor: "pointer" }}></i>
      ),
      section: Sections.intro,
      onclick: () => handleActiveSection(Sections.intro),
    },
    {
      id: "about",
      title: "About",
      icon: <i className="fi fi-rr-user" style={{ cursor: "pointer" }}></i>,
      section: Sections.about,
      onclick: () => handleActiveSection(Sections.about),
    },
    {
      id: "timeline",
      title: "Resume",
      icon: (
        <i className="fi fi-rr-briefcase" style={{ cursor: "pointer" }}></i>
      ),
      section: Sections.timeline,
      onclick: () => handleActiveSection(Sections.timeline),
    },
    {
      id: "skills",
      title: "My Skills",
      icon: (
        <i className="fi fi-rr-resources" style={{ cursor: "pointer" }}></i>
      ),
      section: Sections.skills,
      onclick: () => handleActiveSection(Sections.skills),
    },
    {
      id: "experience",
      title: "experience",
      icon: <i className="fi fi-rr-grid" style={{ cursor: "pointer" }}></i>,
      section: Sections.experience,
      onclick: () => handleActiveSection(Sections.experience),
    },
    {
      id: "Languages",
      title: "Languages",
      icon: (
        <i className="fi fi-rr-comment-alt" style={{ cursor: "pointer" }}></i>
      ),
      section: Sections.languages,
      onclick: () => handleActiveSection(Sections.languages),
    },
  ];

  const changeActiveSectionColor = useCallback(
    (section: Sections) => {
      if (activeSection === section) {
        return styles.activeMenuItem;
      }
    },
    [activeSection]
  );

  const containerOnClick = useCallback(() => {
    dispatch({ type: "SHOWLEFTMENU", settingMenu: false });
  }, []);

  return (
    <div {...stylex.props(styles.container)} onClick={containerOnClick}>
      <div {...stylex.props(styles.closeBtnContainer)}>
        <i className="fi fi-rr-cross"></i>
      </div>
      <div
        {...stylex.props(styles.menuContainer)}
        onClick={(e) => e.stopPropagation()}
      >
        <ul {...stylex.props(styles.menu)}>
          {menuData.map((menuItem) => (
            <a href={`#${menuItem.id}`} key={menuItem.id}>
              <li
                {...stylex.props(
                  styles.menuItem,
                  changeActiveSectionColor(menuItem.section)
                )}
                onClick={menuItem.onclick}
              >
                {menuItem.icon}
                {menuItem.title}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftMenu;
