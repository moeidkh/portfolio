import { useEffect, useState } from "react";
import MainComponent from "../MainComponent";
import AboutMe from "../AboutMe/AboutMe";
import * as stylex from "@stylexjs/stylex";
import { useSelector } from "react-redux";
import { variables } from "../../../Stylex/CssVariables.stylex";
import SettingMenu from "../SettingMenu/SettingMenu";
import { dynamicHeight } from "../../../Stylex/dynamicHeight.stylex";
import LeftMenu from "../LeftMenu/LeftMenu";

const breakpoints = {
  sm: "@media (max-width: 640px)",
  md: "@media (max-width: 768px)",
  lg: "@media (max-width: 1024px)",
};

const styles = stylex.create({
  container: {
    width: "100%",
    color: variables.white,
    display: "flex",
    flexWrap: { default: "no-wrap", [breakpoints.sm]: "wrap" },
    alignItems: "center",
    gap: "9rem",
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
      <MainComponent />
      {showMenu.settingMenu && <SettingMenu />}
      {showMenu.leftMenu && <LeftMenu />}
    </div>
  );
};

export default Main;
