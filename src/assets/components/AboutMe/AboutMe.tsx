import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hoverGenerator } from "../../functions/hoverGenerator";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./AboutMe.stylex";
import clsx from "clsx";
import { FaGithub, FaLinkedin, FaPhone, FaTelegram } from "react-icons/fa";
import { ModalAction } from "../../../Redux/Modal/ModalReducer";
import { ModalTypes } from "../ModalManager/modal";

const AboutMe = () => {
  const dispatch = useDispatch();

  return (
    <div {...stylex.props(styles.container)}>
      <div
        key="settings"
        {...stylex.props(styles.settingsIconContainer)}
        // onClick={() => dispatch({ type: "SHOWSETTINGMENU", settingMenu: true })}
        onClick={() =>
          dispatch({
            type: ModalAction.OpenModal,
            payload: { modalType: ModalTypes.SettingMenu },
          })
        }
      >
        <i
          {...stylex.props(styles.settingIcon)}
          className={clsx(
            "fi fi-rr-settings",
            stylex.props(styles.settingIcon).className
          )}
        ></i>
      </div>
      <div key="info" {...stylex.props(styles.info)}>
        <h1 {...stylex.props(styles.name)}>Moeid Khoshbaten</h1>
        <p {...stylex.props(styles.skill)}>
          Web Developer
          <br /> Front-End
          <span {...stylex.props(styles.react)}> (React-TypeScript)</span>
        </p>
      </div>
      <div {...stylex.props(styles.imageContainer)}>
        <img src="/prof.jpg" alt="" {...stylex.props(styles.image)} />
      </div>
      <div key="contact" {...stylex.props(styles.contactContainer)}>
        <a
          href="mailto://moeid.kh1381@gmail.com"
          {...stylex.props(styles.mail)}
        >
          <p>moeid.kh1381@gmail.com</p>
        </a>
        <p>Based in Qom, IR</p>
      </div>
      <div key="social" {...stylex.props(styles.social)}>
        <div {...stylex.props(styles.contactSection)}>
          <a
            href="https://t.me/Moeid_Khoshbaten"
            target="_blank"
            {...stylex.props(styles.contactItem)}
          >
            <FaTelegram />
            <p {...stylex.props(styles.contactItemText)}>Telegram</p>
          </a>
          <a
            href="https://www.linkedin.com/in/moeid-khoshbaten-7aa27523a/"
            target="_blank"
            {...stylex.props(styles.contactItem)}
          >
            <FaLinkedin />
            <p {...stylex.props(styles.contactItemText)}>Linkedin</p>
          </a>
        </div>
        <div {...stylex.props(styles.contactSection)}>
          <a
            href="https://github.com/moeidkh"
            target="_blank"
            {...stylex.props(styles.contactItem)}
          >
            <FaGithub />
            <p {...stylex.props(styles.contactItemText)}>Github</p>
          </a>
          <a
            href="tel:+989210228136"
            target="_blank"
            {...stylex.props(styles.contactItem)}
          >
            <FaPhone />
            <p {...stylex.props(styles.contactItemText)}>Call Me</p>
          </a>
        </div>
      </div>
      <div key="copyright" {...stylex.props(styles.copyRight)}>
        &copy; Moeid. All Rights Reserved.
      </div>
    </div>
  );
};

export default AboutMe;
