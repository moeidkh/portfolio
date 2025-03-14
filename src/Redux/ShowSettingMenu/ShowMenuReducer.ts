const initialState = {
    settingMenu: false,
    leftMenu: false
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case "SHOWLEFTMENU":
            return {
                ...state,
                leftMenu: action.leftMenu
            }
        case "SHOWSETTINGMENU":
            return {
                ...state,
                settingMenu: action.settingMenu
            }
        default:
            return state;
    }
}

export default reducer;