import {combineReducers, createStore} from "redux";
import Creducer from "./Color/ColorReducer";
import Mreducer from "./ShowSettingMenu/ShowMenuReducer"
import backgroundReducer from "./Background/BackgroundReducer";

const store = createStore(combineReducers({
    Creducer,
    Mreducer,
    backgroundReducer
}));

export default store;