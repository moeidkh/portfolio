import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Navbar.stylex";
import { Sections } from "../LeftMenu/LeftMenu";

type Props = {
  activeSection: string;
  setActiveSection: (section: Sections) => void;
};

const NavBar = ({ activeSection, setActiveSection }: Props) => {
  const menuData = useMemo(() => {
    return [
      {
        id: "introduction",
        icon: (
          <i
            className="fi fi-rr-house-chimney"
            style={{ cursor: "pointer" }}
          ></i>
        ),
        section: Sections.intro,
        onclick: () => setActiveSection(Sections.intro),
      },
      {
        id: "about",
        icon: <i className="fi fi-rr-user" style={{ cursor: "pointer" }}></i>,
        section: Sections.about,
        onclick: () => setActiveSection(Sections.about),
      },
      {
        id: "timeline",
        icon: (
          <i className="fi fi-rr-briefcase" style={{ cursor: "pointer" }}></i>
        ),
        section: Sections.timeline,
        onclick: () => setActiveSection(Sections.timeline),
      },
      {
        id: "skills",
        icon: (
          <i className="fi fi-rr-resources" style={{ cursor: "pointer" }}></i>
        ),
        section: Sections.skills,
        onclick: () => setActiveSection(Sections.skills),
      },
      {
        id: "projects",
        icon: <i className="fi fi-rr-grid" style={{ cursor: "pointer" }}></i>,
        section: Sections.projects,
        onclick: () => setActiveSection(Sections.projects),
      },
      {
        id: "contact",
        icon: (
          <i className="fi fi-rr-comment-alt" style={{ cursor: "pointer" }}></i>
        ),
        section: Sections.request,
        onclick: () => setActiveSection(Sections.request),
      },
    ];
  }, []);

  const changeActiveSectionColor = useCallback(
    (section: Sections) => {
      if (activeSection === section) {
        return styles.activeMenuItem;
      }
    },
    [activeSection]
  );

  return (
    <ul {...stylex.props(styles.navBarContainer)}>
      {menuData.map((item) => (
        <a href={`#${item.id}`} key={item.id}>
          <li
            {...stylex.props(
              styles.navBarItem,
              changeActiveSectionColor(item.section)
            )}
            onClick={item.onclick}
          >
            {item.icon}
          </li>
        </a>
      ))}
    </ul>
  );
};

export default NavBar;
