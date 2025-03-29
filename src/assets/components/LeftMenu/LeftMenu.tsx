import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./LeftMenu.stylex";

export enum Sections {
  intro = "intro",
  about = "about",
  timeline = "timeline",
  skills = "skills",
  projects = "projects",
  request = "request",
}

const LeftMenu = () => {
  const [activeSection, setActiveSection] = useState<Sections>(Sections.intro);
  const dispatch = useDispatch();

  const menuData = [
    {
      id: "introduction",
      title: "introduction",
      icon: (
        <i className="fi fi-rr-house-chimney" style={{ cursor: "pointer" }}></i>
      ),
      section: Sections.intro,
      onclick: () => setActiveSection(Sections.intro),
    },
    {
      id: "about",
      title: "About",
      icon: <i className="fi fi-rr-user" style={{ cursor: "pointer" }}></i>,
      section: Sections.about,
      onclick: () => setActiveSection(Sections.about),
    },
    {
      id: "timeline",
      title: "Resume",
      icon: (
        <i className="fi fi-rr-briefcase" style={{ cursor: "pointer" }}></i>
      ),
      section: Sections.timeline,
      onclick: () => setActiveSection(Sections.timeline),
    },
    {
      id: "skills",
      title: "My Skills",
      icon: (
        <i className="fi fi-rr-resources" style={{ cursor: "pointer" }}></i>
      ),
      section: Sections.skills,
      onclick: () => setActiveSection(Sections.skills),
    },
    {
      id: "projects",
      title: "Projects",
      icon: <i className="fi fi-rr-grid" style={{ cursor: "pointer" }}></i>,
      section: Sections.projects,
      onclick: () => setActiveSection(Sections.projects),
    },
    {
      id: "contact",
      title: "Contact",
      icon: (
        <i className="fi fi-rr-comment-alt" style={{ cursor: "pointer" }}></i>
      ),
      section: Sections.request,
      onclick: () => setActiveSection(Sections.request),
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
            <a href={`#${menuItem.id}`}>
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
