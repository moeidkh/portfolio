import React, { useRef, useState } from "react";
import AnimatedTag from "../../shared/AnimatedTag";
import NavBar from "./NavBar/NavBar";
import Swal from "sweetalert2";
import * as stylex from "@stylexjs/stylex";

// functions
import { calcMonthAndYear } from "../functions/calcMonth";

// redux
import { useDispatch } from "react-redux";

import { InView } from "react-intersection-observer";
import { styles } from "./Main/Main.stylex";
import { Sections } from "./LeftMenu/LeftMenu";
import Header from "./Header/Header";
import About from "./About/About";
import TimeLine from "./TimeLine/TimeLine";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Languages from "./Languages/Languages";

const MainComponent = ({ color, bg }) => {
  const dispatch = useDispatch();
  const [month, year] = calcMonthAndYear();

  const [activeSection, setActiveSection] = useState<Sections>(Sections.intro);
  const form = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    Email: "",
    phoneNumber: "",
    Subject: "",
    budge: "",
    message: "",
  });

  const boxVarient = {
    visible: { opacity: 1, x: "40px" },
    hidden: { opacity: 0, x: "0", transitionDelay: 0.5 },
  };
  const boxVarientLeft = {
    visible: { opacity: 1, x: "40px" },
    hidden: { opacity: 0, x: "80px", transitionDelay: 0.5 },
  };
  const boxVarientDown = {
    visible: { opacity: 1, x: "40px", y: "0" },
    hidden: { opacity: 0, x: "40px", y: "40px", transitionDelay: 0.5 },
  };
  const titleVarient = {
    visible: { opacity: 1, x: "10px" },
    hidden: { opacity: 0, x: "0", transitionDelay: 0.5 },
  };

  const emailSender = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "success",
      text: "your request send.",
    });
    setFormData({
      fullName: "",
      Email: "",
      phoneNumber: "",
      Subject: "",
      budge: "",
      message: "",
    });
  };

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.labelContainer)}>
        <div key="title" {...stylex.props(styles.label)} id="introduce">
          <i
            className="fi fi-rr-house-chimney"
            style={{ display: "flex", alignItems: "center" }}
          ></i>
          <p {...stylex.props(styles.labelTitle)}>INTRODUCE</p>
        </div>
        <div
          key="menuIcon"
          onClick={() => {
            dispatch({ type: "SHOWLEFTMENU", leftMenu: true });
          }}
          {...stylex.props(styles.menuIcon)}
        >
          <i className="fi fi-rr-apps"></i>
        </div>
      </div>
      <div {...stylex.props(styles.HeaderContainer)}>
        <div {...stylex.props(styles.navbarContainer)}>
          <NavBar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
        <AnimatedTag boxVarient={boxVarient}>
          <InView
            onChange={(inView) => inView && setActiveSection(Sections.intro)}
          >
            <Header />
          </InView>
          <AnimatedTag boxVarient={boxVarient}>
            <div {...stylex.props(styles.experienceContainer)}>
              <div {...stylex.props(styles.monthExperience)}>
                <div {...stylex.props(styles.experienceNumber)}>{month}</div>
                <div {...stylex.props(styles.experienceDescription)}>
                  MONTHS OF <br />
                  EXPERIENCE AND LEARNING
                </div>
              </div>
              <div {...stylex.props(styles.monthExperience)}>
                <div {...stylex.props(styles.experienceNumber)}>+{year}</div>
                <div {...stylex.props(styles.experienceDescription)}>
                  YEARS OF <br />
                  EXPERIENCE AND LEARNING
                </div>
              </div>
            </div>
          </AnimatedTag>
        </AnimatedTag>

        <About
          boxVarient={boxVarient}
          titleVarient={titleVarient}
          setActiveSection={setActiveSection}
        />

        <Skills
          boxVarient={boxVarient}
          titleVarient={titleVarient}
          boxVarientDown={boxVarientDown}
          boxVarientLeft={boxVarientLeft}
          setActiveSection={setActiveSection}
        />

        <TimeLine
          boxVarient={boxVarient}
          titleVarient={titleVarient}
          boxVarientDown={boxVarientDown}
          boxVarientLeft={boxVarientLeft}
          setActiveSection={setActiveSection}
        />

        <Experience
          boxVarient={boxVarient}
          titleVarient={titleVarient}
          boxVarientDown={boxVarientDown}
          boxVarientLeft={boxVarientLeft}
          setActiveSection={setActiveSection}
        />

        <Languages
          boxVarient={boxVarient}
          titleVarient={titleVarient}
          boxVarientDown={boxVarientDown}
          boxVarientLeft={boxVarientLeft}
          setActiveSection={setActiveSection}
        />
      </div>
    </div>
  );
};

export default MainComponent;
