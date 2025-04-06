import LeftMenu from "../LeftMenu/LeftMenu";
import SettingMenu from "../SettingMenu/SettingMenu";

export const ModalTypes = {
  SettingMenu: "SettingMenu",
  LeftMenu: "LeftMenu",
};

export const modals = {
  [ModalTypes.SettingMenu]: SettingMenu,
  [ModalTypes.LeftMenu]: LeftMenu,
};
