import { ModalTypes } from "../../assets/components/ModalManager/modal";

type Modal = {
  modalType: typeof ModalTypes | undefined;
  data?: unknown;
};

export const initialState: Modal = { modalType: undefined, data: undefined };

export const ModalAction = {
  OpenModal: "Modal/OpenModal",
  CloseModal: "Modal/CloseModal",
};

export type ModalActionsTypes = (typeof ModalAction)[keyof typeof ModalAction];

export const ModalReducer = (
  state = initialState,
  action: { type: ModalActionsTypes; payload: Modal }
) => {
  switch (action.type) {
    case ModalAction.OpenModal:
      console.log(">>>>>>>>>>modals", action);
      return {
        ...state,
        ...action.payload,
      };
    case ModalAction.CloseModal:
      console.log(">>>>>>>>>>modals", action);
      return {
        ...state,
        modalType: undefined,
        data: undefined,
      };
    default:
      return state;
  }
};
