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
  const color = useSelector(({ Creducer }) => Creducer.color);
  const border = useSelector(({ Creducer }) => Creducer.border);
  const bgColor = useSelector(({ Creducer }) => Creducer.bgColor);
  const showMenu = useSelector(({ Mreducer }) => Mreducer);
  const { theme } = useSelector(({ ThemeReducer }) => ThemeReducer);

  const [colorS, setColorS] = useState(color);
  const [bgColorS, setBgColorS] = useState(bgColor);
  useEffect(() => {
    setColorS(color);
    setBgColorS(bgColor);
  }, [color, border, bgColor]);
  return (
    <div {...stylex.props(styles.container, theme)}>
      <AboutMe color={colorS} bg={bgColorS} />
      <MainComponent color={colorS} bg={bgColorS} />
      {showMenu.settingMenu && <SettingMenu />}
      {showMenu.leftMenu && <LeftMenu />}
    </div>
  );
};

export default Main;
