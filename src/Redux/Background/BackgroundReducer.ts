type InitialStateType = {
  backgroundUrl?: string;
  loading?: boolean;
};
const ActionType = {
  SetLoading: "Background/SET_LOADING",
  SetBackground: "Background/SET_BACKGROUND",
};

const initialState: InitialStateType = {
  backgroundUrl: "/video/video1.mp4",
  loading: true,
};

const backgroundReducer = (
  state = initialState,
  action: { type: keyof typeof ActionType; payload: InitialStateType }
) => {
  switch (action.type) {
    case ActionType.SetBackground:
      return {
        ...state,
        backgroundUrl: action.payload.backgroundUrl,
      };
    case ActionType.SetLoading:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default backgroundReducer;
