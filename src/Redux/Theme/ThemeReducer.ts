import { Themes, ThemesMap } from "../../Stylex/Themes.stylex";

export type ThemeState = {
  themeName: Themes;
  theme: (typeof ThemesMap)[Themes];
};

const initialState: ThemeState = {
  themeName:
    (localStorage.getItem("theme") as Themes | undefined) ?? Themes.greenTheme,
  theme:
    ThemesMap[
      (localStorage.getItem("theme") as Themes | undefined) ?? Themes.greenTheme
    ],
};

export const ThemesActionTypes = {
  SetTheme: "Theme/SetTheme",
};

const reducer = (
  state = initialState,
  action: { type: string; payload: ThemeState["themeName"] }
) => {
  switch (action.type) {
    case ThemesActionTypes.SetTheme:
      localStorage.setItem("theme", action.payload);
      return {
        ...state,
        themeName: action.payload,
        theme: ThemesMap[action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
