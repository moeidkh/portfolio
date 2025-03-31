const initialState = {
    backgroundUrl: "/video/video1.mp4"
}

const backgroundReducer = (state=initialState, action) => {
    switch(action.type){
        case "SETBACKGROUND":
            return {
                backgroundUrl: action.bg
            }
        default:
            return state
    }
}

export default backgroundReducer;