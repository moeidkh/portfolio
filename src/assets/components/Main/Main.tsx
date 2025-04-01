import { useEffect, useState } from "react";
import MainComponent from "../MainComponent";
import AboutMe from "../AboutMe/AboutMe";
import * as stylex from "@stylexjs/stylex";
import { useSelector } from "react-redux";
import { variables } from "../../../Stylex/CssVariables.stylex";
import SettingMenu from "../SettingMenu/SettingMenu";
import { dynamicHeight } from "../../../Stylex/dynamicHeight.stylex";
import LeftMenu from "../LeftMenu/LeftMenu";

const styles = stylex.create({
  container: {
    width: "100%",
    color: variables.white,
    display: "flex",
    alignItems: "center",
    gap: "9rem",
    padding: "1.5rem",
    paddingRight: 0,
    position: "relative",
    height: "100vh",
    ...dynamicHeight,
  },
});

const Main = () => {
  const showMenu = useSelector(({ Mreducer }) => Mreducer);
  const { theme } = useSelector(({ ThemeReducer }) => ThemeReducer);

  return (
    <div {...stylex.props(styles.container, theme)}>
      <AboutMe />
      <MainComponent />
      {showMenu.settingMenu && <SettingMenu />}
      {showMenu.leftMenu && <LeftMenu />}
    </div>
  );
};

export default Main;
