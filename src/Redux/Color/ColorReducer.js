const initialState = {
    color: "text-green-500",
    border: "border-green-500",
    bgColor: "bg-green-500"
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case "SETCOLOR":
            return {
                ...state,
                color: action.color
            }
        case "SETBG":
            return {
                ...state,
                bgColor: action.bgColor
            }
        case "SETBORDER":
            return {
                ...state,
                border: action.border
            }
        case "CHANGEALL":
            return {
                color: action.color,
                border: action.border,
                bgColor: action.bgColor
            }
        default:
            return state;
    }
}

export default reducer;