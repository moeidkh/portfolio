import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as stylex from "@stylexjs/stylex";
import { Themes } from "../../../Stylex/Themes.stylex";
import { ThemesActionTypes } from "../../../Redux/Theme/ThemeReducer";
import { styles } from "./SettingMenu.stylex";
import { ModalAction } from "../../../Redux/Modal/ModalReducer";
import { ModalTypes } from "../ModalManager/modal";
import { ActionType } from "../../../Redux/Background/BackgroundReducer";

interface ColorOption {
  id: string;
  theme: Themes;
  colorStyle: stylex.StyleXStyles;
  textColor: string;
  borderColor: string;
  bgColor: string;
}

const SettingMenu = () => {
  const { themeName } = useSelector(({ ThemeReducer }) => ThemeReducer);
  const dispatch = useDispatch();

  const colorOptions: ColorOption[] = useMemo(
    () => [
      {
        id: "red",
        theme: Themes.redTheme,
        colorStyle: [styles.colorSection, styles.red],
        textColor: "text-red-500",
        borderColor: "border-red-500",
        bgColor: "bg-red-500",
      },
      {
        id: "orange",
        theme: Themes.orangeTheme,
        colorStyle: [styles.colorSection, styles.orange],
        textColor: "text-orange-500",
        borderColor: "border-orange-500",
        bgColor: "bg-orange-500",
      },
      {
        id: "yellow",
        theme: Themes.yellowTheme,
        colorStyle: [styles.colorSection, styles.yellow],
        textColor: "text-yellow-500",
        borderColor: "border-yellow-500",
        bgColor: "bg-yellow-500",
      },
      {
        id: "green",
        theme: Themes.greenTheme,
        colorStyle: [styles.colorSection, styles.green],
        textColor: "text-green-500",
        borderColor: "border-green-500",
        bgColor: "bg-green-500",
      },
      {
        id: "cyan",
        theme: Themes.cyanTheme,
        colorStyle: [styles.colorSection, styles.cyan],
        textColor: "text-cyan-500",
        borderColor: "border-cyan-500",
        bgColor: "bg-cyan-500",
      },
      {
        id: "blue",
        theme: Themes.blueTheme,
        colorStyle: [styles.colorSection, styles.blue],
        textColor: "text-blue-500",
        borderColor: "border-blue-500",
        bgColor: "bg-blue-500",
      },
      {
        id: "purple",
        theme: Themes.purpleTheme,
        colorStyle: [styles.colorSection, styles.purple],
        textColor: "text-fuchsia-500",
        borderColor: "border-fuchsia-500",
        bgColor: "bg-fuchsia-500",
      },
      {
        id: "gray",
        theme: Themes.grayTheme,
        colorStyle: [styles.colorSection, styles.gray],
        textColor: "text-zinc-400",
        borderColor: "border-zinc-400",
        bgColor: "bg-zinc-400",
      },
    ],
    []
  );

  const backgroundOptions = useMemo(
    () => [
      {
        id: "water",
        name: "Water Waves",
        path: "/video/video2.mp4",
      },
      {
        id: "abstract",
        name: "3D Abstract Ball",
        path: "/video/video3.mp4",
      },
      {
        id: "liquids",
        name: "Liquids Wavy",
        path: "/video/video1.mp4",
      },
      {
        id: "earth",
        name: "Earth Lines Sphere",
        path: "/video/video4.mp4",
      },
    ],
    []
  );

  const activeBorder = useCallback(
    (currentTheme: Themes) => {
      return themeName === currentTheme ? styles.activeMenuItem : null;
    },
    [themeName]
  );

  const handleCloseMenu = useCallback(() => {
    dispatch({
      type: ModalAction.CloseModal,
      modalType: ModalTypes.SettingMenu,
    });
  }, []);

  const handleColorChange = useCallback((option: ColorOption) => {
    dispatch({
      type: ThemesActionTypes.SetTheme,
      payload: option.theme,
    });
  }, []);

  const handleBackgroundChange = useCallback((path: string) => {
    dispatch({
      type: ActionType.SetBackground,
      payload: { backgroundUrl: path },
    });
    dispatch({
      type: ActionType.SetLoading,
      payload: { loading: true },
    });
  }, []);

  return (
    <div
      onClick={handleCloseMenu}
      {...stylex.props(styles.settingMenuContainer)}
    >
      <div {...stylex.props(styles.closeIcon)} onClick={handleCloseMenu}>
        <i className="fi fi-rr-cross" aria-hidden="true" />
      </div>

      <div
        {...stylex.props(styles.menuContainer)}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 {...stylex.props(styles.menuTitle)} id="settings-title">
          Configuration
        </h1>

        <div {...stylex.props(styles.menu)}>
          {colorOptions.map((option) => (
            <div
              key={option.id}
              {...stylex.props(styles.menuItem, activeBorder(option.theme))}
              onClick={() => handleColorChange(option)}
              role="button"
              tabIndex={0}
              aria-label={`Change theme to ${option.id}`}
            >
              <div {...stylex.props(option.colorStyle)} />
            </div>
          ))}
        </div>

        <div {...stylex.props(styles.backgroundOptionWrapper)}>
          <p {...stylex.props(styles.backgroundOptionTitle)}>
            Three Dimensional Shapes
          </p>
          <div {...stylex.props(styles.backgroundOptionsContainer)}>
            {backgroundOptions.map((option) => (
              <p
                key={option.id}
                {...stylex.props(styles.backgroundOption)}
                onClick={() => handleBackgroundChange(option.path)}
                role="button"
                tabIndex={0}
              >
                {option.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SettingMenu);
