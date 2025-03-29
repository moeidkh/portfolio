import { combineReducers, createStore } from "redux";
import Creducer from "./Color/ColorReducer";
import Mreducer from "./ShowSettingMenu/ShowMenuReducer";
import backgroundReducer from "./Background/BackgroundReducer";
import { ThemeState } from "./Theme/ThemeReducer";
import ThemeReducer from "./Theme/ThemeReducer";

type RootState = {
  theme: ThemeState;
};

const store = createStore(
  combineReducers({
    Creducer,
    Mreducer,
    backgroundReducer,
    ThemeReducer,
  })
);

export default store;
